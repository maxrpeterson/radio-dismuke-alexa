function sorry() {
  this.response.speak('Sorry, that functionality is not supported.');
  this.emit(':responseReady');
}

module.exports = {
  'AMAZON.LoopOffIntent': sorry,
  'AMAZON.LoopOnIntent': sorry,
  'AMAZON.NextIntent': sorry,
  'AMAZON.PreviousIntent': sorry,
  'AMAZON.RepeatIntent': sorry,
  'AMAZON.ShuffleOffIntent': sorry,
  'AMAZON.ShuffleOnIntent': sorry,
  'AMAZON.StartOverIntent': sorry
};
