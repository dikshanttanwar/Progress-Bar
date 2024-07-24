let progress = document.querySelector("#progress")
let body = document.querySelector("body")
let count=0;

window.addEventListener("scroll",function(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    // console.log(scrolled)
    progress.style.width = `${scrolled}%`
})
