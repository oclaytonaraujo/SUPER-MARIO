const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')
const score = document.querySelector('.score')
let count = 0

//faz o personagem pular
const pulo = () => {
   mario.classList.add('pulo') 
   setTimeout(()=>{
      mario.classList.remove('pulo')
   }, 600)
}
document.addEventListener('mousedown', pulo)

//verifica se o personagem não colidiu com o obstáculo
const loop = setInterval(() => {
   const posicaotubo = tubo.offsetLeft;
   const alturamario = +window.getComputedStyle(mario).bottom.replace('px', '');

   if(posicaotubo <= 120 && posicaotubo > 40 && alturamario < 60){
      
      tubo.style.animation = 'none'
      tubo.style.left = `${posicaotubo}px`
      mario.style.animation = 'none'
      mario.style.bottom = `${alturamario}px`
      mario.src = 'imagens/mario-endgame.png'
      clearInterval(loop)
      clearInterval(contscore)
     }

}, 10)

//muda o score conforme o personagem não colide com o obstáculo
   const contscore = setInterval(() => {
      count++
      score.innerHTML = `SCORE ${count}`
   }, 200)



   