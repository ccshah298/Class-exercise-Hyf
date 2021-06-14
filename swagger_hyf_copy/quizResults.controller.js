const knex = require('../../config/db');
 const HttpError = require('../lib/utils/http-error');
 
 const getQuizResults = async () => {
   return knex('quiz_results').select('*');
 };

 const getQuizResultsById = async (id) => {
   if (!id) {
     throw new HttpError('Id should be a number', 400);
   }

   try {
     const quizResults = await knex('quiz_results')
       .select('*')
       .where({ id });
     if (quizResults.length === 0) {
       throw new Error(`incorrect entry with the id of ${id}`, 404);
     }
     return quizResults;
   } catch (error) {
     return error.message;
   }
 };

 module.exports = {
   getQuizResults,
    getQuizResultsById,
 };