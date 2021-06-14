const express = require('express');

const router = express.Router({ mergeParams: true });

const newAnswerController = require('../controllers/new-answer.controller');
/**
 * @swagger
  * /new-answer:
  *  post:
  *    tags:
  *     - answer
  *    summary: Create a answer
  *    description:
  *      Will create a answer.
  *    produces: application/json
  *    parameters:
  *      - in: body
  *        name: answer
  *        description: The answer to create.
  *        schema:
  *          type: object
  *          required:    
  *            - answer
  *            - ux_points
  *            - fullstack_points
  *            - dataanalyst_points
  *            - fk_question_id
  *          properties:
  *            answer: 
  *              type: string
  *            ux_points: 
  *              type: integer
  *            fullstack_points:
  *              type: integer
  *            dataanalyst_points:
  *              type: integer
  *            fk_question_id:
  *              type: integer
  *    responses:
  *      201:
  *        description: answer created
  *      5XX:
  *        description: Unexpected error.
  */
router.post('/', (req, res) => {
    newAnswerController
      .createNewAnswer(req.body)
      .then((result) => res.json(result))
      .catch((error) => {
        console.log(error);
  
        res.status(400).send('Bad request').end();
      });
  });
  module.exports = router;