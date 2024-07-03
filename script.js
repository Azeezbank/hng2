function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utcTime');
    const currentDayElement = document.getElementById('currentDay');
    
    const now = new Date();
    const utcHours = now.getUTCHours().toString().padStart(2, '0');
    const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
    const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[now.getUTCDay()];
    
    utcTimeElement.textContent = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;
    currentDayElement.textContent = currentDay;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
