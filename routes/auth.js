//* Dependencies
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

//* Import User model
const User = require('../models/User');

//* Init router
const router = express.Router();

//* @route GET api/auth
//* @desc Get logged in user
//* @access Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//* @route     POST api/auth
//* @desc      Auth user & get token
//* @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    //* Input validation and check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //* Destructure elements from body request
    const { email, password } = req.body;

    //* Find user by email
    try {
      let user = await User.findOne({ email });

      //* If that email doesn't have a userID associated, return error
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      //* Compare req body password with db
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      //* Define response payload
      const payload = {
        user: {
          id: user.id,
        },
      };

      //*sign JWT token
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
      res.stats(500).send('Server Error');
    }
  }
);

//* Export route
module.exports = router;
