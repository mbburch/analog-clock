class Clock {

  constructor() {
    this.hourHand = document.querySelector('.hour-hand');
    this.minuteHand = document.querySelector('.minute-hand');
    this.secondHand = document.querySelector('.second-hand');
    this.pauseButton = document.querySelector('#pause');
    this.resumeButton = document.querySelector('#resume');
    this.pauseButton.addEventListener('click', (e) => { this.pauseClock(e); });
    this.resumeButton.addEventListener('click', (e) => { this.resumeClock(e); });

    this.runClock = setInterval(() => this.setTime(), 1000);
  }

  setTime() {
    const time = new Date();

    const seconds = time.getSeconds();
    const secDegrees = ((seconds/60) * 360) + 90;
    this.secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = time.getMinutes();
    const minDegrees = ((minutes/60) * 360) + ((seconds/60) * 6) + 90;
    this.minuteHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = time.getHours();
    const hourDegrees = ((hour/12) * 360) + ((minutes/60) * 30) + 90;
    this.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  pauseClock(e) {
    window.clearInterval(this.runClock);
  }

  resumeClock(e) {
    this.runClock = setInterval(() => this.setTime(), 1000);
  }
}

let clock = new Clock();