function stop() {
  this.response.audioPlayer('stop');
  this.emit(':responseReady');
}

module.exports = {
  ['AMAZON.PauseIntent']: stop,
  PauseIntent: stop,
  ['AMAZON.CancelIntent']: stop,
  CancelIntent: stop,
  ['AMAZON.StopIntent']: stop,
  StopIntent: stop,
};
