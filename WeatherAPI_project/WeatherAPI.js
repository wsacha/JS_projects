document.addEventListener("DOMContentLoaded", function () {
    let cityName="Kraków";
    let temperature=0;
    let wind=0;
    const showTemperature=document.querySelector(".temp-value");
    const showWind=document.querySelector(".wind-value");
    const inputValue= document.querySelector(".wrapper__input");
    const locationName=document.querySelector(".wrapper__location");
    const searchBtn = document.querySelector(".button");
    searchBtn.addEventListener("click", function (e) {
        e.preventDefault;
        if(inputValue.value.length == 0)
        {
            alert("Enter Location first!")
            return;
        }
        else{
            cityName=inputValue.value;
        }
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=40d1b33ed9cf5a6893c3b7b043a4a418`)
            .then((result) => {
                if (result.ok) {
                    return result.json();
                }
                else {
                    throw new Error('Something went wrong');
                }
            })
            .then((res) => {
                console.log(res);
                inputValue.value="";
                temperature = res.main.temp;
                wind=res.wind.speed;
                locationName.innerText=`Location: ${res.name}`;
                showTemperature.innerText=`Temperature: ${temperature}°C`;
                showWind.innerText=`Wind: ${wind} m/s`;

            })
            .catch((err) => { 
                alert("location not found!")
                console.log(err) });
    });

});