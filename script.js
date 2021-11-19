const playGrid = document.querySelector("#board")
const rollDie = document.querySelector("#die__roll")
const rollDisplay = document.querySelector("#dice__display")
const popupMessage = document.querySelector("#popup__message")

const createGrid = () => {
   let divs = ""
   for (i=0; i<100; i++) {
      divs = divs + `<div id="grid__${i}">${i+1}</div>`
   }
   return divs   
}

playGrid.innerHTML = createGrid();

let totalRoll = 0;
let previousTotalRoll=0;

rollDie.addEventListener("click",()=> {
   previousTotalRoll=totalRoll
   const dieResult = Math.ceil(Math.random()*6)
   rollPicture(dieResult)
   totalRoll=totalRoll+dieResult
   if (totalRoll>99){
      totalRoll=99
      for (i=0;i<totalRoll-previousTotalRoll;i++){
         betweenPosition(previousTotalRoll+i,i)
         console.log(previousTotalRoll+i)
         console.log(totalRoll)
      }
      setTimeout(()=>{youWin()},(totalRoll-previousTotalRoll)*500)
   }else{
      for (i=0;i<totalRoll-previousTotalRoll;i++){
         betweenPosition(previousTotalRoll+i,i)
         console.log(previousTotalRoll+i)
         console.log(totalRoll)
      }
      setTimeout(()=>{ladderCheck(totalRoll)}, dieResult*500)
      setTimeout(()=>{snakeCheck(totalRoll)}, dieResult*500)
   }  
})


let oldDieRoll=-1;
let dieImage=document.createElement('img')
const rollPicture = (dieNumber) =>{
   if (oldDieRoll>0) {
      document.querySelector("#dice__display").removeChild(dieImage)
      dieImage = document.createElement('img')
      dieImage.src = `./pictures/die${dieNumber}.PNG`
      document.querySelector("#dice__display").appendChild(dieImage)
   }else{
      dieImage = document.createElement('img')
      dieImage.src = `./pictures/die${dieNumber}.PNG`
      document.querySelector("#dice__display").appendChild(dieImage)
      return oldDieRoll=`${dieNumber}`
   }
}

const startPosition = ()=>{
   const g = document.getElementById("grid__0")
   g.classList.add("player1")
}

startPosition()

const youWin = ()=> {
   popupMessage.innerHTML = "YOU WIN!"
}

const newPosition = (newNum)=>{
   const playerNew = document.getElementById(`grid__${newNum}`)
   playerNew.classList.add("player1")
}
const oldPosition = (oldNum)=>{
   const playerOld = document.getElementById(`grid__${oldNum}`)
   playerOld.classList.remove("player1")
}
const movePlayerPosition = (oldNum,newNum) =>{
   oldPosition(oldNum)
   newPosition(newNum)
}
const betweenPosition = (num,i) => {
   setTimeout(()=>{movePlayerPosition(num,num+1)}, i*500)
}

const ladderCheck = (position) => {
   if (position===3){
   totalRoll=24,
   movePlayerPosition(3,24)
   }else if (position===12){
      totalRoll=74,
   movePlayerPosition(12,74)
   }else if (position===20){
      totalRoll=39,
   movePlayerPosition(20,39)
   }else if (position===42){
      totalRoll=83,
   movePlayerPosition(42,83)
   }else if (position===48){
      totalRoll=64,
   movePlayerPosition(48,64)
   }else if (position===71){
      totalRoll=89,
   movePlayerPosition(71,89)
   }
}
const snakeCheck = (position) => {
   if (position===17){
   totalRoll=1,
   movePlayerPosition(17,1)
   }else if (position===43){
      totalRoll=23,
   movePlayerPosition(43,23)
   }else if (position===49){
      totalRoll=13,
   movePlayerPosition(49,13)
   }else if (position===52){
      totalRoll=34,
   movePlayerPosition(52,34)
   }else if (position===87){
      totalRoll=75,
   movePlayerPosition(87,75)
   }else if (position===98){
      totalRoll=62,
   movePlayerPosition(98,62)
   }
}