let lat;
let long;
const apiKey = "5cf0571dcfaebde03758fa02e126fc85";
function startApp(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;

                console.log("lat:",lat,"long:",long);

                getWeatherData();
            }
        );
            
    }
}

function getWeatherData(){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    console.log(url);
    fetch(url).then(function(response){
        response.json().then(function(data){
            updateWeatherData(data);
        });
    });
}

function updateWeatherData(data){
    const temp = data.main.temp;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const cloudsPercentage = data.clouds.all;
    const city = data.name;
    const sunRise = new Date(data.sys.sunrise * 1000); //in js timestamp is respresentd by miliseconds 
    const sunSet = new Date(data.sys.sunset * 1000);

    document.getElementById("temp").innerHTML = temp;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("pressure").innerHTML = pressure
    document.getElementById("windSpeed").innerHTML = windSpeed;
    document.getElementById("cloudsPerc").innerHTML = cloudsPercentage;
    document.getElementById("sunRise").innerHTML = addZero(sunRise.getHours()) + ":" + addZero(sunRise.getMinutes());
    document.getElementById("sunSet").innerHTML = addZero(sunSet.getHours()) + ":" + addZero(sunSet.getMinutes());
    let imgUrl = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    document.getElementById("currentWeatherImg").setAttribute("src",imgUrl);
    const locationLink = document.getElementById("locationLink");
    locationLink.innerHTML = city;
    locationLink.href = `https://openstreetmap.org/#map=9/${lat}/${long}`;
}


function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
