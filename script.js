// counter.js

class Counter {
    constructor() {
      this.counterValue = 0;
      this.isCounterRunning = false;
      this.counterInterval = null;
  
      this.counterElement = document.getElementById('counter');
      this.startBtn = document.getElementById('startBtn');
      this.incrementBtn = document.getElementById('incrementBtn');
      this.decrementBtn = document.getElementById('decrementBtn');
  
      this.startBtn.addEventListener('click', this.toggleCounter.bind(this));
      this.incrementBtn.addEventListener('click', this.incrementCounter.bind(this));
      this.decrementBtn.addEventListener('click', this.decrementCounter.bind(this));
    }
  
    toggleCounter() {
      if (this.isCounterRunning) {
        clearInterval(this.counterInterval);
        this.isCounterRunning = false;
        this.startBtn.textContent = 'Start';
      } else {
        this.counterInterval = setInterval(() => {
          this.counterValue++;
          this.counterElement.textContent = this.counterValue;
        }, 1000);
        this.isCounterRunning = true;
        this.startBtn.textContent = 'Stop';
      }
    }
  
    incrementCounter() {
      this.counterValue++;
      this.counterElement.textContent = this.counterValue;
    }
  
    decrementCounter() {
      this.counterValue--;
      this.counterElement.textContent = this.counterValue;
    }
  }
  
  const counter = new Counter();
  