document.addEventListener("DOMContentLoaded", function () {
    let cityName="Kraków";
    let temperature=0;
    let wind=0;
    
    const searchBtn = document.querySelector(".button");
    searchBtn.addEventListener("click", function () {
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
            })
            .catch((err) => { console.log(err) });
    });

});