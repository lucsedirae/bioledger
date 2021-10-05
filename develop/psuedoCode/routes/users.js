//* Dependencies

//* Import User model

//* Init router

//! Begin register route
//* @route POST api/users
//* @desc Register a user
//* @access Public

// *Input validation & check for errors

//* Destructure elements from request body

//* Search db for user matching email submitted and throw error if email exists
//* Prevents duplicate accounts

//* Create user using model

//* Generate salt for encryption

//* Hash password input

//* Save user to database

//* Generate payload for response

//* Sign JWT token

//* Handle errors

//! End register route

//* Export route