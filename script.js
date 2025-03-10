const canvas = document.getElementById('jogo2D');
const ctx = canvas.getContext('2d');
const gravidade = 1

document.addEventListener('keydown', (e) => {
    if(e.code == 'Space' && personagem.pulo == false) {
        console.log("Press the Space Bar")
        personagem.velocidadeY = 20
        personagem.pulo = true
    }
})

const personagem = {
    x: 100,
    y:canvas.height - 50,
    height: 50,
    width: 50,
    pulo: false,
    velocidadeY: 0
}

function desenharPersonagem(){
    ctx.fillStyle = 'blue'
    ctx.fillRect(personagem.x,personagem.y,personagem.height,personagem.width);
}

function pularpersonagem(){
    if(!personagem.pulo) return
        
    personagem.y -= personagem.velocidadeY
    personagem.velocidadeY -= gravidade
    if(personagem.y < canvas.height - 50) return;
    
    personagem.velocidadeY = 0
    personagem.pulo = false
    personagem.y = canvas.height-50
}

function atualizarPersonagem(){
    if(personagem.pulo == true){
        personagem.y -= personagem.velocidadeY;
        personagem.velocidadeY -= gravidade
        if(personagem.y >= canvas.height-50){
            personagem.velocidadeY = 0
            personagem.pulo = false
            personagem.y = canvas.height-50
        }
    }
}

function desenharParede(){
    ctx.fillStyle = 'red'
    ctx.fillRect(obstaculo.x, obstaculo.y, obstaculo.largura, obstaculo.altura)
}
const obstaculo = {
    x:canvas.width - 50,
    y: canvas.height - 100,
    largura: 50,
    altura: 100,
    velocidadex: 5
}
function atualizarObstaculo(){
    obstaculo.x -= obstaculo.velocidadex
    if(obstaculo.x <= 0){
        obstaculo.x = canvas.width - 50
        obstaculo.velocidadex += 1
        let newaltura = (Math.random() * 50) + 100;
        obstaculo.altura = newaltura
        obstaculo.y = canvas.height - newaltura
}
}

function colisao(){
    if(
        personagem.x < obstaculo.x + obstaculo.largura &&
        personagem.x + personagem.width > obstaculo.x &&
        personagem.y < obstaculo.y + obstaculo.altura &&
        personagem.y + personagem.height > obstaculo.y
    ){
        alert("Game Over!")
        cancelAnimationFrame(loop)
    }
}

function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    desenharPersonagem()
    atualizarPersonagem()
    desenharParede()
    requestAnimationFrame(loop)
    atualizarObstaculo()
    colisao()
}

loop()