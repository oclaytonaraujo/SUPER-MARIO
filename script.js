const mario = document.querySelector('.mario')
const score = document.querySelector('.score')

const pulo = () => {
   mario.classList.add('pulo') 
   setTimeout(()=>{
      mario.classList.remove('pulo')
   }, 600)
}

document.addEventListener('mousedown', pulo)

   let count = 0
   setInterval(() => {
       count++
      score.innerHTML = `SCORE ${count}`
   }, 200)
