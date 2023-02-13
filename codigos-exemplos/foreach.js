const numeros = [1,3,5,7,9,11];

numeros.forEach(function(numero, index, array) {
    console.log(`O elemento é ${numero} na posição ${index} do array ${array}`);
})

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

pessoas.forEach(function(pessoa) {
    console.log(`meu nome é ${pessoa.nome} e minha idade é ${pessoa.idade}`);
});