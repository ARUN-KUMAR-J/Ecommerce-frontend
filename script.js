var sidenav=document.querySelector(".sidenavbar")

function showsidenavabar(){
    sidenav.style.left="0"
}
function closesidenavbar(){
    sidenav.style.left="-60%"
}
var offerBar = document.querySelector(".offerbar")

document.getElementById("offer").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

var leftslider=document.getElementById("slider-left")
var rightslider=document.getElementById("slider-right")
var sliderimage=document.querySelector(".slider-image-container")
var slidermargin=0
console.log(leftslider)
rightslider.addEventListener("click",function(){
    slidermargin=slidermargin+100
    if(slidermargin>200){
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})
leftslider.addEventListener("click",function(){
    if(slidermargin==0){
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw"
    }
    else{
        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})
