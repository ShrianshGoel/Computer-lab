var element=0;
function show(){
var el=getComputedStyle(document.querySelector(".card:nth-child("+element+")"));
var pan=document.querySelector("#img");
document.querySelector("#buy").style.opacity="1";
pan.style.background=el.getPropertyValue('--url');
pan.style.backgroundRepeat="no-repeat";
pan.style.backgroundSize="contain";
document.getElementById("title").innerHTML=document.querySelector(".card:nth-child("+element+") p").innerHTML;
document.querySelector("#buy").style.zIndex="2";

}

function search(){
for(var i=0;i<10;i++){
    var h="Nike Pegasus 10";
    if(document.getElementById("search").value===h){
        alert("works");
    }
    console.log("works");
}
}