const playGrid = document.querySelector("#board")
const rollDie = document.querySelector("#die__roll")
const rollDisplay = document.querySelector("#dice__display")
const popupMessage = document.querySelector("#popup__message")


//Creates the 100 divs that make up the game board
const createGrid = () => {
   let divs = ""
   for (i=0; i<100; i++) {
      divs = divs + `<div id="grid__${i}">${i+1}</div>`
   }
   return divs   
}

playGrid.innerHTML = createGrid();


//default number for the die roll
let player= Math.floor(Math.random()*2);

let totalRoll = [0,0];
let previousTotalRoll=[0,0];

//sets player position to the start
const startPosition = ()=>{
   const g = document.getElementById("grid__0")
   g.classList.add("player1")
   g.classList.add("player2")
}

startPosition()

const dieRollMaster = ()=>{
   rollDie.setAttribute('disabled', true);
   previousTotalRoll[player]=totalRoll[player]
   let dieResult = Math.ceil(Math.random()*6)
   rollPicture(dieResult)
   totalRoll[player]=totalRoll[player]+dieResult
   if (totalRoll[player]>=99){
      totalRoll[player]=99
      for (i=0;i<totalRoll[player]-previousTotalRoll[player];i++){
         betweenPosition(previousTotalRoll[player]+i,i)
      }
      setTimeout(()=>{youWin()},(totalRoll[player]-previousTotalRoll[player])*300)
   }else{
      for (i=0;i<totalRoll[player]-previousTotalRoll[player];i++){
         betweenPosition(previousTotalRoll[player]+i,i)
      }
      setTimeout(()=>{ladderCheck(totalRoll[player],player)}, dieResult*300)
      setTimeout(()=>{snakeCheck(totalRoll[player],player)}, dieResult*300)
   }  
   //renables button after movement of player has finished
   setTimeout(()=>{rollDie.removeAttribute('disabled')}, dieResult*300)
   //if statement to swap player for next run
   if (player===0){
      setTimeout(()=>{player+=1},dieResult*300)
   }else if (player===1){
      setTimeout(()=>{player-=1}, dieResult*300)
   }
}

// die function that rolls the die and moves the player
rollDie.addEventListener("click",()=> {
   dieRollMaster(player);
})
   


//Edits image that appears for the die roll
let oldDieRoll=-1;
let dieImage=document.createElement('img')

const dieDelete= () => {
   document.querySelector("#dice__display").removeChild(dieImage)
}

const dieInsert = (number) =>{
   dieImage = document.createElement('img')
   dieImage.src = `./pictures/die${number}.PNG`
   document.querySelector("#dice__display").appendChild(dieImage)
}

const rollPicture = (dieNumber) =>{
   if (oldDieRoll>0) {
      dieDelete()
      dieInsert(dieNumber)
   }else{
      dieInsert(dieNumber)
      return oldDieRoll=dieNumber
   }
}

//You win message
const youWin = ()=> {
   popupMessage.innerHTML = `Player ${player+1} Wins!`
}

//========================
//changing player position
//========================

const newPosition = (newNum)=>{
   const playerNew = document.getElementById(`grid__${newNum}`)
   playerNew.classList.add(`player${player+1}`)
}

const oldPosition = (oldNum)=>{
   const playerOld = document.getElementById(`grid__${oldNum}`)
   playerOld.classList.remove(`player${player+1}`)
}

const movePlayerPosition = (oldNum,newNum) =>{
   oldPosition(oldNum)
   newPosition(newNum)
}

const betweenPosition = (num,i) => {
   setTimeout(()=>{movePlayerPosition(num,num+1)}, i*300)
}


//==========================
//==Snakes & ladders Check==
//==========================

const ladderCheck = (position,player) => {
   if (position===3){
      totalRoll[player]=24,
   movePlayerPosition(3,24)
   }else if (position===12){
      totalRoll[player]=74,
   movePlayerPosition(12,74)
   }else if (position===20){
      totalRoll[player]=39,
   movePlayerPosition(20,39)
   }else if (position===42){
      totalRoll[player]=83,
   movePlayerPosition(42,83)
   }else if (position===48){
      totalRoll[player]=64,
   movePlayerPosition(48,64)
   }else if (position===71){
      totalRoll[player]=89,
   movePlayerPosition(71,89)
   }
}

const snakeCheck = (position,player) => {
   if (position===17){
      totalRoll[player]=1,
   movePlayerPosition(17,1)
   }else if (position===43){
      totalRoll[player]=23,
   movePlayerPosition(43,23)
   }else if (position===49){
      totalRoll[player]=13,
   movePlayerPosition(49,13)
   }else if (position===52){
      totalRoll[player]=34,
   movePlayerPosition(52,34)
   }else if (position===87){
      totalRoll[player]=75,
   movePlayerPosition(87,75)
   }else if (position===98){
      totalRoll[player]=62,
   movePlayerPosition(98,62)
   }
}