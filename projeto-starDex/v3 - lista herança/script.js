class DivComTexto {
  #texto;
  #div;

  constructor(texto) {
    this.#texto = texto;
    this.#div = null;
  }

  _getDiv() {
    if (!this.#div) {
      this.#div = document.createElement('div');
      this.#div.innerText = this.#texto;
    }

    return this.#div;
  }

  criarDivNoElemento(elemento) {
    const div = this._getDiv();
    document.querySelector(elemento).appendChild(div);
  }

  addEstilo(estilo) {
    const div = this._getDiv();
    div.classList.add(estilo);
  }
}

class DivClicavel extends DivComTexto {
  #texto;
  #div;

  constructor(texto) {
    super(texto);
    this.#texto = texto;
    this.#div = null;
  }

  _getDiv() {
    if (!this.#div) {
      this.#div = super._getDiv();
      const texto = this.#texto;
      this.#div.onclick = function() {
        alert(texto);
      }
    }

    return this.#div;
  }
}

class ItemDoMenu extends DivClicavel {


  constructor(texto) {
    super(texto);
  }

  criar() {
    this.addEstilo('opcao');
    this.criarDivNoElemento('.meu-main');
  }
}

const personagens = [
  {
    nome: 'opção 1',
  },
  {
    nome: 'opção 2',
  },
  {
    nome: 'opção 3',
  }
];

const header = new DivComTexto('StarDex');
header.criarDivNoElemento('.meu-header');
header.addEstilo('um-header-legal');

const opcao1 = new ItemDoMenu(personagens[0].nome);
opcao1.criar();

const opcao2 = new ItemDoMenu(personagens[1].nome);
opcao2.criar();

const opcao3 = new ItemDoMenu(personagens[2].nome);
opcao3.criar();

new DivComTexto('Footer').criarDivNoElemento('.meu-footer');
