
// start skills
let section = document.querySelector(".our-skill");
let progressSpan = document.querySelectorAll(".the-progress span");



// start Events
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let date = new Date("dec 31 2026 23:59:59").getTime();
let counter = setInterval(()=>{
    let firstDate = new Date().getTime();
    let betweenDate = date - firstDate ;
    let day = Math.floor(betweenDate / (1000 * 60 * 60 * 24));
    days.innerHTML = day < 10 ?`0${day}`: day;
    let hour = Math.floor(betweenDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    hours.innerHTML = hour < 10 ?`0${hour}`: hour;
    let minute = Math.floor(betweenDate % (1000 * 60 * 60 ) / (1000 * 60));
    minutes.innerHTML = minute < 10 ?`0${minute}`: minute;
    let second = Math.floor(betweenDate % (1000 * 60 ) / 1000);
    seconds.innerHTML = second < 10 ?`0${second}`: second;
    if(betweenDate < 0){
        clearInterval(counter);
    }
},1000);
//  Start stats
let sectionStats = document.querySelector(".stats");
let statsSpan = document.querySelectorAll(".stats .box span.number");
let started = false;
function counterStat(el) {
    let goalStat = el.dataset.goal;
    let countIntervalStat = setInterval(()=>{
        el.textContent++
        if (el.textContent == goalStat) {
            clearInterval(countIntervalStat)
        }
    },2000 / goalStat)
}



//window
window.onscroll = function(){
    if (window.scrollY >= section.offsetTop - 300) {
        progressSpan.forEach((span)=>{
            span.style.width = span.dataset.width;
        });
    };
    if(window.scrollY >= sectionStats.offsetTop - 250){
        if (!started) {
            
            statsSpan.forEach((span)=>{
                counterStat(span)
            });
        }
        started = true;
    };
};