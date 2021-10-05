//* Dependencies

//* Import User model

//* Init router

//! Begin get logged in user route
//* @route GET api/auth
//* @desc Get logged in user
//* @access Private

//* Router get request to find user by ID 
//! End get logged in user route

//! Begin authenticate user and get token route
//* @route     POST api/auth
//* @desc      Auth user & get token
//* @access    Public

//* Input validation and check for errors

//* Destructure elements from body request

//* Find user by email - try/catch

//* If that email doesn't have a userID associated, return invalid credentials error

//* Compare req password with db password using bcrypt

//* Define response payload & sign JWT token
//! End authenticate user and get token route

//* Export route