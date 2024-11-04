   function displaydate(){
     let days=["Sun","Mon","Tue","Wed","Thu","Fri"]
     let day = days[date.getDay()];
     let minutes = date.getMinutes();
     let date = date.getDate();
     let year = date.getYear();
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let months = month[date.getMonths()];

   if (minute < 10) {
        minutes= `0${minutes}`
   }
   

    return `${day} ${date}:${months} ${year}`;
}

function displaytemp(response){
    let date=response.data.
    let temp=Math.round(response.data.temperature.current);
    let condition =response.data.condition.description;
    let icon=`<img src={response.data.condition.icon_url} class="main-icon"/>;`
    let showCondition=document.querySelector(".condition");
    showCondition.innerHTML = condition;
    let showTemp=document.querySelector(".temperature");
    
    showTemp.innerHTML=temp;
console.log(response.data);
}




    let apiurl = `https://api.shecodes.io/weather/v1/current?query={lisbon}&key=3adfat7038a3b8f55f4do5846b4c6a7d&units=metric`;
    axios.get(apiurl).then(displaytemp);


function form(event) {
    event.preventDefault();
    let searchInput=document.querySelector(".input");

}