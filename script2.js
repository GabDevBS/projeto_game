const canvas = document.getElementById('jogo2D');
const ctx = canvas.getContext('2d');
function colisao() {
    if (
        personagem.x < obstaculo.x + obstaculo.largura &&
        personagem.x + personagem.width > obstaculo.x &&
        personagem.y < obstaculo.y + obstaculo.altura &&
        personagem.y + personagem.height > obstaculo.y
    ) {
        alert("Game Over!")
        cancelAnimationFrame(loop)
    }
}
document.addEventListener('keydown', (e) => {
    if (e.code == 'Space' && personagem.jump == false) {
        personagem.saltar()
    }
})



class Entidade {
    #gravidade
    constructor(posX, posY, largura, altura) {
        this.posX = posX
        this.posY = posY
        this.largura = largura
        this.altura = altura
        this.#gravidade = 0.5
    }
    get gravidade() {
        return this.#gravidade
    }
    desenhar(cor) {
        ctx.fillstyle = cor
        ctx.fillRect(this.posX, this.posY, this.largura, this.altura)

    }


}

class Personagem extends Entidade {
    #velocidadeY
    #jump
    constructor(posX, posY, largura, altura) {
        super(posX, posY, largura, altura)
        this.#jump = false
        this.#velocidadeY = 0
    }
    saltar() {
        console.log("Press the Space Bar")
        personagem.#velocidadeY = 20
        personagem.#jump = true
    }
    get jump() {
        return this.#jump
    }
    atualizarPersonagem() {
        if (this.#jump == true) {
            this.posY -= this.#velocidadeY;
            this.#velocidadeY -= this.gravidade
            if (this.posY >= canvas.height - 50) {
                this.#velocidadeY = 0
                this.#jump = false
                this.posY = canvas.height - 50
            }
        }
    }
}





class Obstaculo extends Entidade {
    constructor(posX, posY, largura, altura, velocidadeX) {
        super(posX, posY, largura, altura)
    }
}

const personagem = new Personagem(
    100,
    canvas.height - 50,
    50,
    50,
    false,
    0
)

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    personagem.desenhar('black')
    personagem.atualizarPersonagem()
    requestAnimationFrame(loop)
}
loop()