const city = document.querySelector('.city')
const data = document.querySelector('.newData')
const temp = document.querySelector('.temp')
let input = document.querySelector('.inputt')
const search = document.querySelector('.fa-search-location')
const sunnyOrCloud = document.querySelector('.sunnyOrCloud')
let name = 'yerevan'

async function getData(name){
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=374989839c1a2d8df6f0efdc2d708683`);
        weather = await res.json();
        city.innerText = `${weather.name}, ${weather.sys.country} `
        temp.innerHTML = Math.round(weather.main.temp - 273) + '&deg' 
        sunnyOrCloud.innerHTML = `<img class = 'image'src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" >`
        let now = new Date();
        data.textContent = dateBuilder(now);
    }catch{
        alert(`No results for ${name}`)
    }  
}
   
getData(name) 

function dateBuilder(d){
    let months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    let days = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13 && input.value !== ''){
        name = input.value;
        getData(name);
        input.value = ''
    }
})    
  
search.addEventListener('click', function(){
    if(input.value !== ''){
        name = input.value;
        getData(name);
        input.value = ''
    }
})


