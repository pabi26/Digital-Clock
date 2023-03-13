function updateTime() {
    var now = new Date();
  
    // get hours, minutes, and seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // convert to standard time format
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var standardTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  
    // convert to military time format
    hours = now.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    var militaryTime = hours + ':' + minutes + ':' + seconds;
  
    // update the clock display
    document.getElementById('clock').innerHTML = standardTime + '<br>' + militaryTime;
  
    // update every second
    setTimeout(updateTime, 1000);
  }
  