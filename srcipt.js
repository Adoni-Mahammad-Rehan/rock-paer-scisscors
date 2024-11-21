var userscore=0;
var computerscore=0;
const computer=()=>{
let options=["rock","paper","scissor"]
let computerchoice=Math.floor(Math.random()*3);
console

return options[computerchoice];
}
const draw=()=>{
let comment=document.getElementById("comment")
comment.innerText="round is tie"
}
const userwon=()=>{
userscore++;
console.log(userscore)
}
const computerwin=()=>{
computerscore++;
console.log("comp",computerscore)
}
const winner=(userwin)=>{
    let comment=document.getElementById("comment")
    if(userwin===true){
        userscore++
        console.log("user won",userscore)
        comment.innerText="User won this round"
        let userScore=document.querySelector("#playerscore")
        userScore.innerText=userscore;
    }
    else{
        computerscore++
        console.log("comp win",computerscore)
        comment.innerText="computer won this round"
        let compScore=document.querySelector("#compscore")
        compScore.innerText=computerscore;
    }

}
const playgame=(userchoice)=>{
console.log("userchoice->" ,userchoice);
let computerchoice=computer();
console.log("computerchoicechoice->" ,computerchoice);
if(userchoice===computerchoice){
    draw();
}
else{
let userwin;
if(userchoice==="rock"){
    userwin=computerchoice==="paper"?false :true;
  
}
else if(userchoice==="paper"){
    userwin=computerchoice==="scissor"?false :true;   
}
else if(userchoice==="scissor"){
    userwin=computerchoice==="rock"?false :true;   
}
winner(userwin);
}
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let ID=choice.getAttribute("id");
        console.log(ID)
        playgame(ID);
    })
})