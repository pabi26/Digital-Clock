const toggleSwitch = document.getElementById('toggle')
const weather = document.getElementById('weather')

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
        document.getElementById('militaryTime').style.display = 'block'
        document.getElementById('standardTime').style.display = 'none'
        document.getElementById('clock').style.color = 'green'
        
    } else if (event.target.checked === false){
        console.log('not clicked')
        document.getElementById('militaryTime').style.display = 'none'
        document.getElementById('standardTime').style.display = 'block'
        document.getElementById('clock').style.color = 'red'
        
    }
})

weather.addEventListener('click', function() {
    document.getElementById('weather-pop').style.display = 'block'
})

document.getElementById('close-weather').addEventListener('click', function(){
    document.getElementById('weather-pop').style.display = 'none'
})

async function getWeather(city) {
    const apiKey = "342156faaf3a105ea1ff8c76d5dd441c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      const temp = data.main.temp;
      const description = data.weather[0].description;
      return `The weather in ${city} is currently ${temp}°C with ${description}.`;
    } catch (error) {
      console.error(error);
      return "Sorry, we could not retrieve the weather at this time.";
    }
  }
  

  getWeather("Toronto")
  .then(result => console.log(result))
  .catch(error => console.error(error));