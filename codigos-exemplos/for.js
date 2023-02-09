const numeros = [1,3,5,7,9,11];

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]); 
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

for (let index = 0; index < pessoas.length; index++) {
    console.log(`meu nome é ${pessoas[index].nome} e minha idade é ${pessoas[index].idade}`);

}