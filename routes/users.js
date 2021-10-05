//* Dependencies
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

//* Import User model
const User = require('../models/User');

//* Init router
const router = express.Router();

//* @route POST api/users
//* @desc Register a user
//* @access Public
router.post(
  '/',
  // *Input validation & check for errors
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email'),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //* Destructure elements from request body
    const { name, email, password } = req.body;

    //* Search db for user matching email submitted and throw error if email exists
    //* Prevents duplicate accounts
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      //* Create user using model
      user = new User({
        name,
        email,
        password,
      });

      //* Generate salt for encryption
      const salt = await bcrypt.genSalt(10);

      //* Hash password input
      user.password = await bcrypt.hash(password, salt);

      //* Save user to database
      await user.save();

      //* Define payload for response
      const payload = {
        user: {
          id: user.id,
        },
      };

      //* Sign JWT token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//* Export route
module.exports = router;
