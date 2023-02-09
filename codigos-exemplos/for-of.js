const numeros = [1,3,5,7,9,11];

for (const numero of numeros) {
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

for (const pessoa of pessoas) {
    console.log(`meu nome é ${pessoa.nome} e minha idade é ${pessoa.idade}`);
}