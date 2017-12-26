module.exports = {
  PlaybackStarted() {
    this.emit(':responseReady');
  },
  PlaybackFinished() {
    this.emit(':responseReady');
  },
  PlaybackStopped() {
    this.emit(':responseReady');
  },
  PlaybackNearlyFinished() {
    this.emit(':responseReady');
  },
  PlaybackFailed() {
    this.emit(':responseReady');
  },
};
