module.exports = {
  PlaybackStarted() {
    console.log('PlaybackStarted');
    this.emit(':responseReady');
  },
  PlaybackFinished() {
    console.log('PlaybackFinished');
    this.emit(':responseReady');
  },
  PlaybackStopped() {
    console.log('PlaybackStopped');
    this.emit(':responseReady');
  },
  PlaybackNearlyFinished() {
    console.log('PlaybackNearlyFinished');
    this.emit(':responseReady');
  },
  PlaybackFailed() {
    console.log('AudioPlayer.PlaybackFailed');
    this.emit(':responseReady');
  },
};
