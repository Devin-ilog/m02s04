class Pessoa {
    #nome;
    #idade;
    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    set idade(idade) {
        if (idade > 70) {
            console.log('Idade fora da faixa etária');
            return;
        }
        this.#idade = idade;
    }

    get idade() {
        return this.#idade;
    }
}

const p = new Pessoa('Luis', 45);
p.idade = 71;
console.log(p.idade);