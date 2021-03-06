const express = require('express');

const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controller');
/**
 * @swagger
  * /users:
  *  post:
  *    tags:
  *     - users
  *    summary: Create a User
  *    description:
  *      Will create a user.
  *    produces: application/json
  *    parameters:
  *      - in: body
  *        name: user
  *        description: The user to create.
  *        schema:
  *          type: object
  *          required:    
  *            - full_name
  *            - firebase_token
  *          properties:
  *            full_name: 
  *              type: string
  *            firebase_token: 
  *              type: string
  *    responses:
  *      201:
  *        description: User created
  *      5XX:
  *        description: Unexpected error.
  */
router.post('/', (req, res) => {
    usersController
      .createUser(req.body)
      .then((result) => res.json(result))
      .catch((error) => {
        console.log(error);
  
        res.status(400).send('Bad request').end();
      });
  });
  module.exports = router;