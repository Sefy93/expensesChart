let url = "http://127.0.0.1:5500/src/js/data.json";

fetch(url).then((res)=> res.json()).then((data)=>{
    console.log(data)
})


let days = [".sun" ,".mon" , ".tue" , ".wed" , ".thu" , ".fri" , ".sat"]

function currentDay(){
    let dateToday = new Date()
    let day = dateToday.getDay()
    let dayToday = document.querySelector(days[day])
    dayToday.style.backgroundColor = "#76b5bc";
}


currentDay()

