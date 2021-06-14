const express = require('express');

 const router = express.Router({ mergeParams: true });

 // controllers
 const quizResultsController = require('../controllers/quizResults.controller');

 /**
  * @swagger
  * /quiz-results:
  *  get:
  *    tags:
  *    - quiz_results
  *    summary: Get all quizResult
  *    description:
  *      Will return all quizResult.
  *    produces: application/json
  *    responses:
  *      200:
  *        description: Successful request
  *      5XX:
  *        description: Unexpected error.
  */
  router.get('/', (req, res, next) => {
    quizResultsController
      .getQuizResults()
      .then((result) => res.json(result))
      .catch(next);
  });
  /**
  * @swagger
  * /quiz-results/{ID}:
  *  get:
  *    tags:
  *    - quiz_results
  *    summary: Get quizResults by ID
  *    description:
  *      Will return single quizResults with a matching ID.
  *    produces: application/json
  *    parameters:
  *     - in: path
  *       name: ID
  *       schema:
  *         type: integer
  *         required: true
  *         description: The ID of the quizResults to get
  *
  *    responses:
  *      200:
  *        description: Successful request
  *      5XX:
  *        description: Unexpected error.
  */
   router.get('/:id', (req, res, next) => {
    quizResultsController
      .getQuizResultsById(req.params.id)
      .then((result) => res.json(result))
      .catch(next);
  });
 
  module.exports = router;