module.exports = {
  ['System.ExceptionEncountered']() {
    console.error('System.ExceptionEncountered, this.event: ', this.event);
    console.error('System.ExceptionEncountered, this.context: ', this.context);
  }
}
