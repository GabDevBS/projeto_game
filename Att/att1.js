class Veiculo {
    #velocidade // protege. agora a velocidade está protegida
    constructor(tipo, marca, cor, velocidade, passageiros) {
        this.tipo = tipo;
        this.marca = marca;
        this.cor = cor;
        this.#velocidade = velocidade;
        this.passageiros = passageiros;
    }

    get velocidade() {
        return this.#velocidade;
    }

    // Set para modificar a velocidade
    set velocidade(novaVelocidade) {
        if (novaVelocidade >= 0) {
            this.#velocidade = novaVelocidade;
        } else {
            console.log("parado");
        }
    }
    acelerar() {
        this.velocidade += 10;
    }

    freiar() {
        if (this.velocidade > 0) {
            this.velocidade -= 5;
        } else {
            console.log("Veículo parado");
        }
    }
    
}

class Aviao extends Veiculo {
    constructor(tipo, marca, cor, velocidade, passageiros, companhia) {
        super(tipo, marca, cor, velocidade, passageiros);
        this.companhia = companhia;
    }
    acelerar() {
        this.velocidade += 20; // em m/s
    }
    
}

class Jato extends Veiculo {
    constructor(tipo, marca,cor, velocidade,passageiros, paraquedas) {
        super(tipo, marca, cor, velocidade, passageiros);
        this.paraquedas = paraquedas;
    }
    acelerar() {
        this.velocidade += 0.2; // em mach
    }
    freiar() {
        if (this.velocidade > 0) {
            this.velocidade -= 0.5; // em mares
        } else {
            console.log("Jato parado");
        }
    }
}

class Barco extends Veiculo {
    constructor(tipo, marca,cor, velocidade,passageiros, ancorado){
        super(tipo, marca, cor, velocidade, passageiros);
        this.ancorado = ancorado;
    }
    acelerar (){
        this.velocidade += 5; // em noz
    }

    freiar (){
        if (this.velocidade > 0) {
            this.velocidade -= 2; // em mach
        } else {
            console.log("Barco ancorado");
        }
        

    }

}
const carro = new Veiculo(
    "carro",
    "camaro",
    "amarelo",
    8,  // velocidade inicial
    5   // passageiros
);
carro.acelerar();
carro.acelerar();
carro.freiar();

console.log(carro);

const moto = new Veiculo(
    'moto',
    'moto_aleatória',
    'preto',
    9,  // velocidade inicial
    2   // passageiros
);
moto.acelerar();

console.log(moto);



const jato = new Jato(
    "jato",
    "jato_aleatório",
    "azul",
    8,  // velocidade inicial
    100, // passageiros
    99  // paraquedas
)

jato.acelerar();
jato.acelerar();
jato.freiar();

console.log(jato);

const barco = new Barco(
    "barco",
    "barco_aleatório",
    "vermelho",
    4,  // velocidade inicial
    100, // passageiros
    false  // ancorado
 
)

barco.acelerar();
barco.freiar();

console.log(barco);




const aviao = new Aviao(
    "avião",
    "Boeing",
    "branco",
    9,  // velocidade inicial
    200, // passageiros
    "Latam"
);

aviao.acelerar();
aviao.freiar();

console.log(aviao);