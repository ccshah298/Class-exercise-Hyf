const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
//const moment = require('moment-timezone');

const createUser = async (body) => {
    await knex('users').insert({
      full_name: body.full_name,
      firebase_token:body.firebase_token, 
    });
  
    return {
      successful: true,
    };
  };
  module.exports = {
    createUser,
  };
  
