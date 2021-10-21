//? Pseudo coding CRUD operations even though MVP of product will not
//? feature update or delete functionality
//? Will need to add roadblock in V2 to the client that confirms if user wants to update or delete an entry.
//* Dependencies
const express = require('express');
const auth = require('../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');

//* Import User model and Metrics model
const User = require('../models/User');
const Metric = require('../models/Metric');

//* Init router
const router = express.Router();

//* @route     GET api/metrics
//* @desc      Get all users metrics
//* @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const metrics = await Metric.find({ user: req.user.id }).sort({
      //* Sorts results by most recent date
      date: -1,
    });

    //* Send results
    res.json(metrics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//* @route     POST api/contacts
//* @desc      Add new contact
//* @access    Private
router.post(
  '/',
  //* Input validation & check for errors
  [
    auth,
    [
      check('weight', 'Weight is required').not().isEmpty(),
      check('systolic', 'Systolic blood pressure reading is required')
        .not()
        .isEmpty(),
      check('diastolic', 'Diastolic blood pressure reading is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //* Destructure elements from req body
    const { weight, systolic, diastolic } = req.body;

    //* Create new metric
    try {
      const newMetric = new Metric({
        weight,
        systolic,
        diastolic,
        user: req.user.id,
      });

      //* Save metric to db
      const metric = await newMetric.save();

      //* Send result
      res.json(metric);

      //* Handle errors
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//! Begin update metric route
//? Placeholder route
//* @route     PUT api/contacts/:id
//* @desc      Update contact
//* @access    Private
router.put('/:id', (req, res) => {
  res.send('Update metric');
});

//! End update metric route

//! Begin delete metric route
//? Placeholder route
//* @route     DELETE api/contacts/:id
//* @desc      Delete contact
//* @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete metric');
});

//! End delete metric route

//* Export route
module.exports = router;
