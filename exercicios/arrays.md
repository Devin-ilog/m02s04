#Exercícios arrays
## forEach
1. Dado o array [1,3,5,7,9,11,13,15] imprima todos os elementos usando:
   1. for convencional (opcional)
   2. for of (opcional)
   3. forEach
2. Dado o array [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }] imprima para cada item "Meu nome é <item.nome> e tenho <item.idade> anos" usando:
   1. for convencional (opcional)
   2. for of (opcional)
   3. forEach
3. Dado o array \[[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]] imprima todos os elementos internos usando o forEach
4. 1. Dado o array [1,3,5,7,9,11,13,15] imprima o elemento e a posição dele no array usando o forEach

## filter

1. Dado o array [10,5,60,3,55,70,21,30] faça um array com os itens que tenham o valor maior ou igual a 21. Para isto você de fazer versões:
   1. usando o forEach (opcional)
   2. usando o filter
2. Dado o array [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }] filtre os elementos que possuam idade superior a 18. Você deve usar o filter.

## find

1. Dado o array [10,5,60,3,55,70,21,30] encontre o número 70. Você deve implentar dois algoritmos distintos usando:
   1. forEach (opcional)
   2. find
2. Crie uma função que recebe dois parâmetros. O primeiro é um array e o segundo o elemento que deseja buscar. Se encontrar deve retornar o elemento, caso não encontre deve voltar undefined.

## every

1. Dado o array [1,3,5,7,9,11,13,15] verifique se **todos** os números são impares. Faça duas implementações usando:
   1. forEach (opcional)
   2. every
2. Dado o array [1,3,5,7,9,12,13,15] verifique se **todos** os números são impares usando o every.

## some

1. Dado o array [1,3,5,7,9,11,13,15] verifique se **algum** o número é par. Faça duas implementações usando:
   1. forEach (opcional)
   2. some
2. Dado o array [1,3,5,7,9,12,13,15] verifique se **algum** o número é par usando o some.

## map

1. Dado o array [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }], faça um array que contenha apenas os valores dos nomes. Faça duas implementações usando:
   1. forEach (opcional)
   2. map
2. Dado o array [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }], faça um array que contenha para cada item a string "Meu nome é <item.nome> e tenho <item.idade> anos" usando o map.

## reduce

1. Dado o array [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }], calcule o total das idades dos itens. Faça duas implementações usando:
   1. forEach (opcional)
   2. reduce
2. Dado o array [7,9.3,6.8,8,10,3.5] calcule usando o reduce a média simples dos valores.


# Solução

## forEach
### 1
```js
const numeros = [1,3,5,7,9,11,13,15];

for (let index = 0; index < numeros.length; index++) {
    console.log('for convencional:', numeros[index]);
}

for (const numero of numeros) {
    console.log('for of:', numero);
}

numeros.forEach(function (numero) {
    console.log('forEach function:', numero);
})

//outra codificação usando arrow function
numeros.forEach(numero => console.log('forEach arrow function:', numero))
```
### 2
```js
const pessoas = [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }]

for (let index = 0; index < pessoas.length; index++) {
    console.log('for convencional:', `Meu nome é ${pessoas[index].nome} e tenho ${pessoas[index].idade} anos`);
}

for (const pessoa of pessoas) {
    console.log('for of:', `Meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`);
}

pessoas.forEach(function (pessoa) {
    console.log('forEach function:', `Meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`);
})

//outra codificação usando arrow function
pessoas.forEach(pessoa => console.log('forEach arrow function:', `Meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`))
```
### 3
```js
const gruposDeNumeros =  [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]];

gruposDeNumeros.forEach(function(grupo) {
    grupo.forEach(function (numero) {
        console.log('function:', numero)
    });
})

//outra codificação usando arrow function
gruposDeNumeros.forEach(grupo => grupo.forEach(numero => console.log('arrow function:', numero)));
```

### 4
```js
const numeros =  [1,3,5,7,9,11,13,15];

numeros.forEach(function (numero, indice) {
    console.log('function', `valor ${numero} na posição do array ${indice}`);
})

//outra codificação usando arrow function
numeros.forEach((numero, indice) => console.log('arrow function', `valor ${numero} na posição do array ${indice}`))
```

## Filter
### 1
```js
const numeros =  [10,5,60,3,55,70,21,30] ;
let numerosFiltradosnoForEach = [];

//Usando forEach
numeros.forEach(function (numero) {
    if(numero >= 21) {
        numerosFiltradosnoForEach.push(numero);
    }
})
console.log('forEach function', numerosFiltradosnoForEach);

//Usando Filter
let numerosFiltradosNoFilter = numeros.filter(function (numero) {
    return numero >= 21;
})
console.log('filter function', numerosFiltradosNoFilter);

//outra codificação usando arrow function
numerosFiltradosNoFilter = numeros.filter(numero => numero >= 21)
console.log('filter arrow function', numerosFiltradosNoFilter);
```
### 2
```js
const pessoas = [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }]

let maioresDeIdade = pessoas.filter(function (pessoa) {
    return pessoa.idade >= 18;
})
console.log('filter function', maioresDeIdade);

//outra codificação usando arrow function
maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log('filter arrow function', maioresDeIdade);
```

## Find
### 1
```js
const numeros = [10,5,60,3,55,70,21,30]
let numeroEncontrado;

//Usando forEach
numeros.forEach(function (numero) {
    if (!numeroEncontrado && numero === 70) {
        numeroEncontrado = numero;
    }
})
console.log('forEach function', numeroEncontrado);

//Usando Find
numeroEncontrado = numeros.find(function (numero) {
    return numero === 70
})
console.log('find function', numeroEncontrado);

//outra implementação usando arrow function
numeroEncontrado = numeros.find(numero => numero === 70)
console.log('find arrow function', numeroEncontrado);
```
### 2
```js
const numeros = [10,5,60,3,55,70,21,30]
const procuraElemento = function(array, elemento) {
    return array.find(function (e){
        return e === elemento;
    })
}

let encontrado = procuraElemento(numeros, 50);
console.log('find function', encontrado)

encontrado = procuraElemento(numeros, 60);
console.log('find function', encontrado)

//outra implementação usando arrow function
const procuraElementoArrow = function(array, elemento) {
    return array.find(e => e === elemento)
}

encontrado = procuraElementoArrow(numeros, 50);
console.log('find arrow function', encontrado)

encontrado = procuraElementoArrow(numeros, 60);
console.log('find arrow function', encontrado)
```

## Every
### 1
```js
const numeros = [1,3,5,7,9,11,13,15]

//usando o forEach
let todosSaoImpares = true;

numeros.forEach(function (numero) {
    if (!todosSaoImpares) {
        return;
    }

    if (numero % 2 === 0) {
        todosSaoImpares = false;
    }
})
console.log('every forEach', todosSaoImpares);

//Usando every
todosSaoImpares = numeros.every(function (numero) {
    return numero % 2 !== 0;
})

console.log('every function', todosSaoImpares);

//outra implementação usando arrow function
todosSaoImpares = numeros.every(numero=> numero % 2 !== 0)

console.log('every arrow function', todosSaoImpares);
```

### 2
```js
const numeros = [1,3,5,7,9,12,13,15] 
let todosSaoImpares = numeros.every(function (numero) {
    return numero % 2 !== 0;
})

console.log('every function', todosSaoImpares);

//outra implementação usando arrow function
todosSaoImpares = numeros.every(numero=> numero % 2 !== 0)

console.log('every arrow function', todosSaoImpares);
```

## Some
### 1
```js
const numeros = [1,3,5,7,9,11,13,15]

let haNumeroPar = false;

numeros.forEach(function (numero) {
    if (haNumeroPar) {
        return
    }

    if (numero % 2 === 0) {
        haNumeroPar = true;
    }
})

console.log('Some forEach', haNumeroPar);

haNumeroPar = numeros.some(function (numero) {
    return numero % 2 === 0
})

console.log('Some some function', haNumeroPar);

//outra implementação usando arrow function
haNumeroPar = numeros.some(numero => numero % 2 === 0)

console.log('Some some arrow function', haNumeroPar);
```

### 2
```js
const numeros = [1,3,5,7,9,12,13,15]

let haNumeroPar = numeros.some(function (numero) {
    return numero % 2 === 0
})

console.log('Some some function', haNumeroPar);

//outra implementação usando arrow function
haNumeroPar = numeros.some(numero => numero % 2 === 0)

console.log('Some some arrow function', haNumeroPar);
```

## Map
### 1
```js
const pessoas = [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }]
let nomes = [];

pessoas.forEach(function (pessoa) {
    nomes.push(pessoa.nome);
})

console.log('Map forEach', nomes);

nomes = pessoas.map(function (pessoa) {
    return pessoa.nome;
})

console.log('Map map function', nomes);

//outra implementação usando arrow function
nomes = pessoas.map(pessoa => pessoa.nome)

console.log('Map map arrow function', nomes);
```

### 2
```js
const pessoas = [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }]
let frases = pessoas.map(function (pessoa) {
    return `Meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`
})

console.log('Map map function', frases);

//outra implementação usando arrow function
frases = pessoas.map(pessoa => `Meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`)
console.log('Map map arrow function', frases);
```

## Reduce
### 1
```js
const pessoas = [{ nome: 'Luis', idade: 45 }, { nome: 'Karina', idade: 43 }, { nome: 'Pedro', idade: 12 }, { nome: 'João', idade: 6 }]
let totalIdade = 0;

pessoas.forEach(function (pessoa) {
    totalIdade += pessoa.idade
})

console.log('Reduce forEach', totalIdade)

totalIdade = 0;

totalIdade = pessoas.reduce(function (contador, pessoa) {
    return contador += pessoa.idade
}, 0)

console.log('Reduce reduce function', totalIdade)

//outra codificação usando arrow function
totalIdade = 0;
totalIdade = pessoas.reduce((contador, pessoa) => contador += pessoa.idade, 0)
console.log('Reduce reduce arrow function', totalIdade)
```

### 2
```js
const notas = [7,9.3,6.8,8,10,3.5]
let media =  notas.reduce(function (contador, nota) {
    return contador += nota
}, 0) / notas.length
console.log('Reduce reduce function', media)

//outra codificação usando arrow function
media =  notas.reduce((contador, nota) => contador += nota, 0) / notas.length
console.log('Reduce reduce arrow function', media)
```