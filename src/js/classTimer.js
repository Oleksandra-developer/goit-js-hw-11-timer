export default class CountdownTimer {
  constructor({ onTick, selector, targetDate }) {
    this.onTick = onTick;
    this.selector = selector;
    this.targetDate = targetDate;
    
    this.intervalId = null;
  }
 timerValueCounter = () => {

     const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;     
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);   
  this.onTick({ days, hours, mins, secs })
    }
    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));    
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));       
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));                  
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));                              
        return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  intervalId = setInterval(this.timerValueCounter, 1000);
}
