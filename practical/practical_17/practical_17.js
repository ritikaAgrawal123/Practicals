const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const day = document.getElementById("day");

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function showtime()
{
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec  = today.getSeconds();
    let date = today.toDateString();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour%12 || 12; 

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;
    day.innerHTML = `${date}`;

    setTimeout(showtime,1000);
}
function addZero(n)
{
    return ((parseInt(n,10)<10 ? '0' : '')+n);
}

function setGreeting()
{
    let today = new Date();
    let hours = today.getHours();

    if (hours >=20){
        document.body.style.background = "url('../../image/night.jpg')";
        greeting.innerHTML = 'Good Night';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.color='white';
    }
    else if(hours>=16 && hours<20){
        document.body.style.background = "url('../../image/evening.jpg')";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.innerHTML = 'Good Evening';
    }
    else if(hours>=12 && hours<16){
        document.body.style.background = "url('../../image/afternoon.jpg')";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.innerHTML = 'Good Afternoon';
    }
    else{
        document.body.style.background = "url('../../image/morning.jpg')";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        greeting.innerHTML = 'Good Morning';
    }
}

function getName(){
    if(localStorage.getItem('myName')===null){
        name.innerHTML = 'Enter Name';
    }
    else{
        name.innerHTML = localStorage.getItem('myName');
    }
}

function setName(e){
    if(e.type==="keypress"){
        if(e.keyCode===13){
            localStorage.setItem('myName',e.target.innerHTML);
            name.blur();
        }
    }
    else{
        localStorage.setItem('myName',e.target.innerHTML);
    }
}

showtime();
setGreeting();
getName();