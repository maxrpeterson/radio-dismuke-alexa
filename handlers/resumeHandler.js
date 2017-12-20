module.exports = function() {
  const speechOutput = 'Playing Radio Dismuke';
  const behavior = 'PlayBehavior.REPLACE_ALL';
  const url = 'http://early1900s.org/radiodismuke/radiodismuke.pls';
  const token = 'radioDismuke';
  const expectedPreviousToken = 'expectedPreviousStream';
  const offsetInMilliseconds = 0;
  this.response
    .speak(speechOutput)
    .audioPlayer(behavior, url, token, expectedPreviousToken, offsetInMilliseconds);
  this.emit(':responseReady');
};
