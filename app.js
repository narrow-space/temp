const searchcity = () => {
    const inputfield = document.getElementById('search-field');
    const inputfieldText = inputfield.value;
    inputfield.value = '';
    
    
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputfieldText}&appid=a65ed7e636f5e70fa0e0add0f4da0ec1`

    console.log(url);
    fetch(url)


    .then(res=>res.json())
    .then(data=>displaytemp(data))
    


}

searchcity()


const displaytemp=temparature=>{
    console.log(temparature.main.humidity);
    console.log(temparature.weather[0].description);
    
    const tempdiv=document.getElementById('temp1')
    tempdiv.classList.add('temp')
   const p=document.createElement('p')
   const h1=document.createElement('h1')
   const h2=document.createElement('h2')
   const h3=document.createElement('h3')
   p.innerText=`Name:${temparature.name}`
 
   const sum=`${temparature.main.temp-273.15}`
   const sum1=parseInt(sum)
   
   h1.innerText=`Temp:${sum1}°C`
   h2.innerText=`Humidity:${temparature.main.humidity}`
   h3.innerText=`Description:${temparature.weather[0].description}`
   
   tempdiv.textContent=''
   tempdiv.appendChild(p)
   tempdiv.appendChild(h1)
   tempdiv.appendChild(h2)
   tempdiv.appendChild(h3)
   
   
  
   
  

      
       
    
       
   
   


   
}