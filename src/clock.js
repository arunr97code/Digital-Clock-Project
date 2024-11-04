function updateClock(){
    const d = new Date();
    let hours = d.getHours();
    const meredium = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12 || 12).toString().padStart(2, 0);
    const minutes = d.getMinutes().toString().padStart(2, 0);
    const seconds = d.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meredium}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();

setInterval(updateClock, 1000);