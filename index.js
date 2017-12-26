require('dotenv').config();

const Alexa = require('alexa-sdk');
const handlers = require('./handlers');

const createLogger = (cb) => {
  return (error, result) => {
    if (error) {
      console.error(error);
    }
    if (result) {
      const msg = typeof result !== 'string' ? JSON.stringify(result) : result;
      console.log('result ', msg);
    }
    cb(error, result);
  }
}

exports.handler = (event, context, cb) => {
  const alexa = Alexa.handler(event, context, cb);
  alexa.appId = process.env.APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
