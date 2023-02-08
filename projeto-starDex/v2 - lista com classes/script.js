class DivTexto {
  constructor({ texto }) {
    this._texto = texto;
    this._div = null;
  }

  getDiv() {
    if (!this._div) {
      this._div = document.createElement('div');
      this._div.innerText = this._texto;
    }

    return this._div;
  }

  adicionarAoElmento(elementoPai) {
    const div = this.getDiv();
    document.querySelector(elementoPai).appendChild(div);
  }

  adicionarEstilo(estilo) {
    const div = this.getDiv();
    div.classList.add(estilo);
  }
}

let opcoes = [
  {
    nome: 'opção 1',
  },
  {
    nome: 'opção 2',
  },
  {
    nome: 'opção 3',
  },
];

const header = new DivTexto({ texto: 'StarDex' });
header.adicionarAoElmento('.meu-header');
header.adicionarEstilo('um-header-legal');


const opcao1 = new DivTexto({ texto: opcoes[0].nome });
opcao1.adicionarEstilo('opcao');
opcao1.getDiv().onclick = function() {
  alert('opção 1');
}
opcao1.adicionarAoElmento('.meu-main');

const opcao2 = new DivTexto({ texto: opcoes[1].nome });
opcao2.getDiv().onclick = function() {
  alert('opção 2');
}
opcao2.adicionarAoElmento('.meu-main');
opcao2.adicionarEstilo('opcao');

const opcao3 = new DivTexto({ texto: opcoes[2].nome });
opcao3.adicionarEstilo('opcao');
opcao3.getDiv().onclick = function() {
  alert('opção 3');
}
opcao3.adicionarAoElmento('.meu-main');

