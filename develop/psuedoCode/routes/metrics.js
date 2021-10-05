//? Pseudo coding CRUD operations even though MVP of product will not 
//? feature update or delete functionality
//? Will need to add roadblock in V2 to the client that confirms if user wants to update or delete an entry. 
//* Dependencies

//* Import User model and Metrics model

//! Begin get metrics route
//* @route     GET api/metrics
//* @desc      Get all users metrics
//* @access    Private

//* Router get request to find all metrics by user id
//! End get metrics route

//! Begin Add metric route
//* @route     POST api/contacts
//* @desc      Add new contact
//* @access    Private

//* Router post request

//* Validate if all three metrics are present in body of req

//* Destructure elements from body request (Weight, Sys, Dia)

//* Try/catch new entry using Metric schema
//! End Add metric route

//! Begin update metric route
//? Placeholder route
//* @route     PUT api/contacts/:id
//* @desc      Update contact
//* @access    Private

//! End update metric route

//! Begin delete metric route
//? Placeholder route
//* @route     DELETE api/contacts/:id
//* @desc      Delete contact
//* @access    Private

//! End delete metric route

//* Export route
module.exports = router;
