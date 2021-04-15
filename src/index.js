import './js/markup.js';
import './styles.css';
import CountdownTimer from './js/classTimer.js';


const refs = {
    daysField: document.querySelector(`[data-value="days"]`),
    hoursField: document.querySelector(`[data-value="hours"]`),
    minsField: document.querySelector(`[data-value="mins"]`),
    secsField: document.querySelector(`[data-value="secs"]`),
}

function updateClockface({ days, hours, mins, secs }) {
  refs.daysField.textContent = days;  
  refs.hoursField.textContent = hours;
  refs.minsField.textContent = mins;
  refs.secsField.textContent = secs;
  }
const timer = new CountdownTimer({
  selector: '#timer-1',
   targetDate: new Date('May 10, 2021'),
   onTick: updateClockface
});


const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}
 
const dateTitle = document.querySelector('.date');
dateTitle.textContent = timer.targetDate.toLocaleString('Ru-ru', options)