let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;
var h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game started");
        levelup();
    
    }
    
    
    
})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);

}
function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
    let ranIndx=Math.floor(Math.random() *3);
    let ranColor=btns[ranIndx];
    let randBtn=document.querySelector(`.${ranColor}`);

    btnflash(randBtn);

}
function btnPress(){
    let btn=this;
    btnflash(btn);
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
