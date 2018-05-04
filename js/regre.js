const getRemainTime = deadline => {
  let now = new Date(),
  remainTime = (new Date(deadline) - now + 1000) / 1000,
  remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
  remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
  remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
  remainDays = Math.floor(remainTime / (3600 * 24)),
  remainWeek = Math.floor(remainTime / (3600 * 24) / 7);

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainWeek
  }

};

const countdown = (deadline, elem, finalMessage) => {

const el = document.getElementById(elem);

const timerUpdate = setInterval( () => {
 let t = getRemainTime(deadline);
 el.innerHTML = `<span>${t.remainWeek} Week</span><span>${t.remainDays} Day</span><span>${t.remainHours} Hrs</span><span>${t.remainMinutes}Min</span><span>${t.remainSeconds} Sec</span>`;

 if(t.remainTime <= 1){
  clearInterval(timerUpdate);
  el.innerHTML = finalMessage;
 }
}, 1000)
};

countdown('Apr 20 2018 00:00:28 GMT-0400', 'clock', '');