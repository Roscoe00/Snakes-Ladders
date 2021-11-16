const playGrid = document.querySelector("#board")
const createGrid = () => {
   let divs = ""
   for (i=0; i<100; i++) {
      divs = divs + `<div id="grid__${i}"></div>`
   }
   return divs   
}

playGrid.innerHTML = createGrid();

