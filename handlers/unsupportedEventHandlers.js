function sorry() {
  this.response.speach('Sorry, that functionality is not supported.');
  this.emit(':responseReady');
}

module.exports = {
  LoopOffIntent: sorry,
  LoopOnIntent: sorry,
  NextIntent: sorry,
  PreviousIntent: sorry,
  RepeatIntent: sorry,
  ShuffleOffIntent: sorry,
  ShuffleOnIntent: sorry,
  StartOverIntent: sorry
};
