var header = document.createElement('div');
header.innerText = 'StarDex';
document.querySelector('.meu-header').appendChild(header);


var opcao1 = document.createElement('div');
opcao1.innerText = 'Opcão 1';
opcao1.classList.add('opcao');
opcao1.onclick = function() {
  alert('opção 1');
}
document.querySelector('.meu-main').appendChild(opcao1);

var opcao2 = document.createElement('div');
opcao2.innerText = 'Opcão 2';
opcao2.classList.add('opcao');
opcao2.onclick = function() {
  alert('opção 2');
}
document.querySelector('.meu-main').appendChild(opcao2);

var opcao3 = document.createElement('div');
opcao3.innerText = 'Opcão 3';
opcao3.classList.add('opcao');
opcao3.onclick = function() {
  alert('opção 3');
}
document.querySelector('.meu-main').appendChild(opcao3);

