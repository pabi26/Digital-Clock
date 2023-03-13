const toggleSwitch = document.getElementById('toggle')

function updateDate() {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1; 
    let year = now.getFullYear();

    let date = document.getElementById('date');
    date.textContent = month + '/' + day + "/" + year;
}
updateDate()



function updateStandardTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let standardTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  
    
    // update the clock display
    document.getElementById('standardTime').innerHTML = standardTime;
  
    setTimeout(updateStandardTime, 1000);
  }
  updateStandardTime()
 


  function updateMilitaryTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  

    hours = now.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let militaryTime = hours + ':' + minutes + ':' + seconds;
  
    document.getElementById('militaryTime').innerHTML = militaryTime;
  
    
    setTimeout(updateMilitaryTime, 1000);
  }
  
  updateMilitaryTime()


toggleSwitch.addEventListener('click', function(){
    if (event.target.checked){
        console.log('clicked')
        updateMilitaryTime()
    } else if (event.target.checked === false){
        console.log('not clicked')
        updateStandardTime()
    }
})