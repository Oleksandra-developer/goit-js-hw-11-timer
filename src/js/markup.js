
 
export const body = document.querySelector('body');

body.innerHTML = `<h1>До <span class="date"></span> осталось:</h1>
    <div class="timer" id="timer-1">
   <div class="field">
     <span class="value" data-value="days">11</span>
     <span class="label">Days</span>
   </div>

   <div class="field">
     <span class="value" data-value="hours">11</span>
     <span class="label">Hours</span>
   </div>

   <div class="field">
     <span class="value" data-value="mins">11</span>
     <span class="label">Minutes</span>
   </div>

   <div class="field">
     <span class="value" data-value="secs">11</span>
     <span class="label">Seconds</span>
   </div>
 </div>`
// body.insertAdjacentHTML("afterbegin", `<h1 class="title">До <span class="date">${CountdownTimer.targetDate}</span> осталось:</h1>`)