let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



const getCompChoice = () =>{
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    
    return choices[randomNumber];
}

const convertToWord =(letter) =>{
   if(letter === "r") return "Rock";
   if(letter === "p") return "Paper";
   return "Scissors";
}

const win = (userChoice, computerChoice) => {
     userScore +=1;
     userScore_span.innerHTML = userScore;
     result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ".  You win!!";
     document.getElementById(userChoice).classList.add('green');
     setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('green');
     },1000);
}

const lose = (userChoice, computerChoice) => {
    compScore +=1;
    compScore_span.innerHTML= compScore;
    result_div.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ".  Try again";
    document.getElementById(userChoice).classList.add('red');
     setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('red');
     },1000);
}

const draw = (userChoice, computerChoice) => {
    result_div.innerHTML = convertToWord(userChoice) + " draws with " + convertToWord(computerChoice) + ".  Try again";
    document.getElementById(userChoice).classList.add('grey');
     setTimeout(()=>{
        document.getElementById(userChoice).classList.remove('grey');
     },1000); 
}

const game =(userChoice)=>{
    const computerChoice = getCompChoice();
     
     switch(userChoice + computerChoice){
         case "rs":
         case "pr":
         case "sp":
             win(userChoice, computerChoice);
            
         break;
        case "rp":
        case "ps":
        case "sr":
           lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
           draw(userChoice, computerChoice);
            break;      

     } 

     
}

const main = () => {
rock_div.addEventListener('click',()=> game('r'));


paper_div.addEventListener('click',()=>game('p'));


scissors_div.addEventListener('click',()=>game('s'));
}

main();