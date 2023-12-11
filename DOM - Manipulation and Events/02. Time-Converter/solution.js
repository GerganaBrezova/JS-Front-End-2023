function attachEventsListeners() {
    let days = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');

    let hours = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');

    let minutes = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');

    let seconds = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    });

    hoursBtn.addEventListener('click', () => {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    });

    minutesBtn.addEventListener('click', () => {
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
        seconds.value = minutes.value * 60;
    });

    secondsBtn.addEventListener('click', () => {
        minutes.value = seconds.value / 60;
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
    });

}