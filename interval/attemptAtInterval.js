const playGrid = document.querySelector("#board")
const rollDie = document.querySelector("#die__roll")
const rollDisplay = document.querySelector("#dice__display")

const createGrid = () => {
   let divs = ""
   for (i=0; i<100; i++) {
      divs = divs + `<div id="grid__${i}"></div>`
   }
   return divs   
}

playGrid.innerHTML = createGrid();

let totalRoll = 0;
let previousTotalRoll=0;


rollDie.addEventListener("click",()=> {
   previousTotalRoll=totalRoll
   // oldPosition(previousTotalRoll)
   const dieResult = Math.ceil(Math.random()*6)
   rollDisplay.innerHTML = `${dieResult}`
   totalRoll=totalRoll+dieResult
   const betweenPostion = ()=>{
      for (i=0;i<totalRoll-previousTotalRoll;i++){
        
            console.log(`oneRun${[i]}`)
            
            let timeTillExecute = (i+1)*1000
            console.log(timeTillExecute)
            setTimeout(movePlayerPosition(previousTotalRoll+i,previousTotalRoll+i+1),timeTillExecute)
         }
      }
      betweenPostion()
   // newPosition(totalRoll)
   // betweenPostion()
})


const startPosition = ()=>{
   const g = document.getElementById("grid__0")
   g.classList.add("player1")
}
startPosition()

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
// const betweenPostion = ()=>{
//    for (i=0;i<3;i++){
//       oldPosition(0)
//       console.log("oneRun")
//       newPosition(0)
//    }
// }
// for (let i -0; i<playGrid.clientHeight; i++){
//    rollDie.addEventListener("click",()=> {
//       const dieResult = Math.ceil(Math.random()*6)
//       rollDisplay.innerHTML = `${dieResult}`

//    })
// }