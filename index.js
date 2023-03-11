function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth() + 1; // add 1 to get the correct month
    let year = now.getFullYear();

    // add leading zeros to single-digit hours, minutes, and seconds
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // display the current time and date
    let clock = document.getElementById("clock");
    clock.textContent = hours + ":" + minutes + ":" + seconds;
    let date = document.getElementById('date');
    date.textContent = month + '/' + day + "/" + year;

}

// call updateTime function every second
setInterval(updateTime, 1000);