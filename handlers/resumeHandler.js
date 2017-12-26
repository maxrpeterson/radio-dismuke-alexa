function resume() {
  const speechOutput = `${
      Math.random() > 0.66 ? 'Oh I like that station! ' : ''
    }Playing Radio Dismuke`;
  const behavior = 'REPLACE_ALL';
  const url = 'https://early1900s.org/radiodismuke/radiodismuke.pls';
  const token = 'radioDismuke';
  const expectedPreviousToken = 'expectedPreviousStream';
  const offsetInMilliseconds = 0;
  this.response
    .speak(speechOutput)
    .audioPlayer('play', behavior, url, token, undefined, offsetInMilliseconds);
  this.emit(':responseReady');
};

module.exports = {
  ['AMAZON.ResumeIntent']: resume,
  ResumeIntent: resume,
  LaunchRequest: resume,
};
