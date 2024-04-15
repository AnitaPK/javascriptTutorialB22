function displayWeather(){

let city = document.getElementById('city').value;

fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=ca018df54353f065aaed7d802825b8be`)
.then (response => response.json())
.then(data =>(
    // console.log(data)
    showWeatherDetail(data)
    ))
.catch(err=>{
    console.log(err);
})
}

result1 = document.getElementById('result');

function showWeatherDetail(data){
    console.log(data);
    result1.innerHTML =`<h3>${data.name} ${data.sys.country}</h3>
                        <p>Temperature: ${data.main.temp}<sup>o</sup>C</p>
                        <p>Clouds: ${data.weather.main}</p>
    `
    data.name;
}



// ca018df54353f065aaed7d802825b8be
// {"coord":{"lon":-0.1257,"lat":51.5085},
// "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
// "base":"stations",
// "main":{"temp":283.44,"feels_like":282.74,"temp_min":281.1,"temp_max":285.07,"pressure":1025,"humidity":85},
// "visibility":8000,
// "wind":{"speed":1.34,"deg":103,"gust":1.79},
// "clouds":{"all":40},"dt":1711011649,
// "sys":{"type":2,"id":2075535,"country":"GB","sunrise":1711000810,"sunset":1711044896},
// "timezone":0,
// "id":2643743,
// "name":"London",
// "cod":200}