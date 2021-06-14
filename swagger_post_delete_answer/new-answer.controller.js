const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const createNewAnswer = async (body) => {
    await knex('answers').insert({
        answer: body.answer,
        ux_points: body.ux_points,
        fullstack_points: body.fullstack_points,
        dataanalyst_points: body.dataanalyst_points,
        fk_question_id: body.fk_question_id
    });
  
    return {
      successful: true,
    };
  };
  module.exports = {
    createNewAnswer,
  };