let gameseq =[];
let userseq=[];

let color = ["yellow","red","blue","green"];
let h3 = document.querySelector("h3");
let started = false;
let level = 0;
document.addEventListener("keypress",function (){
    if (started==false) {
        console.log("game started");
        started=true;
        levelup();
    }
});
function levelup(){
    userseq = []; 
    level++;
    h3.innerText=`level ${level}`;
    //random
    let randomidx = Math.floor(Math.random()*4);
    console.log(randomidx);
    let randColor = color[randomidx];
    let randbtn = document.querySelector(`.${randColor}`);
    
    //console.log(randbtn);
    gameseq.push(randColor);
    //console.log(gameseq); 
    btnflash(randbtn);   
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
function btnUserFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}
function checkAns(idx){
    //console.log("curr level ",level);
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        
        }
    }
    else{app.js
        h3.innerHTML=`Game over! your score was <b>${level} <b> <br> press any key to start `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function btnPress() {
    //console.log(this);
    btnUserFlash(this);
    
    userColor = this.getAttribute("id");
    userseq.push(userColor);
    //console.log(userseq);
    checkAns(userseq.length-1);
}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    level =0;
    gameseq=[];
    userseq=[];
}