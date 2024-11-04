//function displaydate(){
   // let days=["Sun","Mon","Tue","Wed","Thu","Fri"]
   // let day = days[date.getDay()];
   // let minutes = date.getMinutes();
   // let date = date.getDate();
    //let year = date.getYear();
   // let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   // let months = month[date.getMonths()];

   // if (minute < 10) {
        minutes= `0${minutes}`
  //  }
   

   //  return `${day} ${date}:${months} ${year}`;
//}

let d = new Date();
d.toDateString();
let day=document.querySelector(".main-day");
day.innerHTML=d



function searchCity(city) {
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=3adfat7038a3b8f55f4do5846b4c6a7d&units=metric`;
    axios.get(apiurl).then(searchEngine);
}

function form(event) {
    event.preventDefault();
    let searchInput=document.querySelector(".input");
    searchCity(searchInput.value)
}