require('dotenv').configure();

const Alexa = require('alexa-sdk');
const handlers = require('./handlers');

module.exports.handler = (event, context, cb) => {
  const alexa = Alexa.handler(event, context, cb);
  alexa.appId = process.env.APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};