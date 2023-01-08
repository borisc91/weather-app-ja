
   
    const input = document.querySelector('input');
    
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2')
    const h3 = document.querySelectorAll('h3')
    let img = document.createElement('img')
    
    const getVreme = async (grad) => {
        try{  
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=863af96a12bcc9d3407709a3f1bcb3a4&units=metric`)
        
        let rezultat = {}
        rezultat.humidity = res.data.main.humidity
        rezultat.weather = res.data.weather[0].description
        rezultat.temp = res.data.main.temp
        rezultat.windSpeed = res.data.wind.speed
        rezultat.country = res.data.sys.country
        rezultat.image = res.data.weather[0].icon
        
        return rezultat;
        
        }catch(e){
            console.log("ERROR!!!!", e)
        }
    };
    
    const test = async () => {
        try{
        const vreme = await getVreme(input.value);
        h2.innerHTML = `${vreme.temp} &#8451;`
        h1.innerText = `Weather in ${input.value}`
        h3[0].innerText = `Weather: ${vreme.weather.charAt(0).toUpperCase() + vreme.weather.slice(1)}`
        h3[1].innerText = `Humidity: ${vreme.humidity} %`
        h3[2].innerText = `Wind speed: ${vreme.windSpeed} m/s`
        h3[3].innerText = `Country: ${vreme.country}`
        
        img.src=`https://openweathermap.org/img/w/${vreme.image}.png`
        h3[0].insertAdjacentElement('afterend', img);
        
        input.value = '';
        }catch{
           alert('Niste uneli odgovarajuce podatke') 
        }
        
    }
    
    let button = document.querySelector('button');
    button.addEventListener('click', test);


