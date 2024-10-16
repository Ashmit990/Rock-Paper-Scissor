let img1=document.querySelector(".person");
let img2=document.querySelector(".machine");
let resultBox=document.querySelector(".win-lose");
let judgement=document.querySelector(".result");
let start=document.querySelector(".start");
let results=document.querySelector(".popup")
let button=document.querySelector(".ok-btn");
let selectBtn=document.querySelector("#selecting");

let images=[
    "Paper",
    "Rock",
    "Scissor"
];

function updateImg(){
    let selectedImg = selectBtn.value;
    if(selectedImg){
        img1.src=`${selectedImg}.jpeg`;
    }
}
selectBtn.addEventListener("change",updateImg);
updateImg();

function playGame(){
    selectBtn.disabled=true;
    start.disabled=true;

    results.classList.add("hidden");
    document.querySelector(".overlay").classList.remove("visible");

    let selectedValue=document.getElementById("selecting");
    let selectedImg=selectedValue.value;
    let randomImgIndex=Math.floor(Math.random()*images.length);
    let randomImg=images[randomImgIndex];
    
    
    img2.src = `${randomImg}.jpeg`;
    if(!selectedImg){
        alert("Please select Rock, Paper, or Scissors!");
        
        selectBtn.disabled = false;
        start.disabled = false;
        return;
    }
    let aiIntervals=setInterval(() => {
        let randomImgIndex=Math.floor(Math.random()*images.length);
        img2.src = `${images[randomImgIndex]}.jpeg`;
    }, 250);

    setTimeout(() => {
        clearInterval(aiIntervals)
        let randomImgIndex = Math.floor(Math.random() * images.length);
        let randomImg = images[randomImgIndex];
        img2.src = `${randomImg}.jpeg`; ;

        if(selectedImg==randomImg){
            resultBox.innerHTML="Its a draw !"
            resultBox.style.color="rgb(250, 225, 0)";
            judgement.innerHTML="Oops"
            img1.src = `${selectedImg}.jpeg`;
           
           
    
        }else if(selectedImg=="Rock"&&randomImg=="Paper"){
            resultBox.innerHTML="You Lost !"
            resultBox.style.color="rgb(250, 37, 0)";
            judgement.innerHTML="Try Again"
            img1.src = `${selectedImg}.jpeg`;
           
           }else if(selectedImg=="Paper"&&randomImg=="Scissor"){
            resultBox.innerHTML="You Lost !"
            resultBox.style.color="rgb(250, 37, 0)";
            judgement.innerHTML="Try Again"
            img1.src = `${selectedImg}.jpeg`;
           
           
    
        }else if(selectedImg=="Scissor"&&randomImg=="Rock"){
            resultBox.innerHTML="You Lost !"
            resultBox.style.color="rgb(250, 37, 0)";
            judgement.innerHTML="Try Again"
            img1.src = `${selectedImg}.jpeg`;
            
            
    
        }else{
            resultBox.innerHTML="You Won !"
            resultBox.style.color="rgb(0, 252, 0)";
            judgement.innerHTML="Congratulations"
            img1.src = `${selectedImg}.jpeg`;
            
            
        }

        setTimeout(() => {
            results.classList.remove("hidden");
            document.querySelector(".overlay").classList.add("visible");
        }, 600);
    

    }, 2000);


    
}

start.addEventListener("click",playGame)
button.addEventListener("click",function(){
    results.classList.add("hidden");
    document.querySelector(".overlay").classList.remove("visible");
    selectBtn.disabled=false;
    start.disabled=false
})