let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;
var h2=document.querySelector("h2");
var  h3=document.querySelector("h3")
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
    },500);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);

}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranIndx=Math.floor(Math.random() *3);
    let ranColor=btns[ranIndx];
    let randBtn=document.querySelector(`.${ranColor}`);

    btnflash(randBtn);

    gameSeq.push(ranColor);
    
    

}

function check(indx){
    
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            
            levelup();
        }
        
    }
    else{
        h2.innerText=`Game Over! Press any key to start.`;
        display();
        reset();
    }

    
}
function btnPress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    check(userSeq.length-1);
    


}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}
function display(){
    h3.innerText=`Your final Score is ${level}`
    
}
