class Clock {

  constructor() {
    this.hourHand = document.querySelector('.hour-hand');
    this.minuteHand = document.querySelector('.minute-hand');
    this.secondHand = document.querySelector('.second-hand');
    this.pauseButton = document.querySelector('#pause');
    this.resumeButton = document.querySelector('#resume');
  }
}

let clock = new Clock();