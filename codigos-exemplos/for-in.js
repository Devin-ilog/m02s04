const numeros = [1,3,5,7,9,11];

for (const numero in numeros) {
    console.log(numero);
}

const pessoas = [
    {
        nome: 'luis',
        idade: 45,
    },
    {
        nome: 'Karina',
        idade: 43,
    },
    {
        nome: 'Pedro',
        idade: 12,
    },
    {
        nome: 'João',
        idade: 6,
    }
];

for (const pessoa in pessoas) {
    console.log(`meu nome é ${pessoa.nome} e minha idade é ${pessoa.idade}`);
}

const umObjeto = {
    nome: 'luis',
    idade: 45,
    profissao: 'Analista de sistemas'
}

for (const key in umObjeto) {
    console.log(`na propriedade ${key} o valor é ${umObjeto[key]}`);
}