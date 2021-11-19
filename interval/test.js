for (let i=0; i<10; i++){
   setTimeout(()=>{maths(i)},i*2000)
}

const maths =(num)=>{
   console.log(num)
}