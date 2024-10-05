var offerBar = document.querySelector(".offerbar")

document.getElementById("offer").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)
var productconainer=document.getElementById("product")
var search=document.getElementById("search")
var productlist=productconainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enterdedtext=event.target.value.toUpperCase()
    for (i=0;i<productlist.length;i=i+1){
        var productname=productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enterdedtext)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }

    }
})