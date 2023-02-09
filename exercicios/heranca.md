1. Criar classe que gere uma div com um texto
2. Crie um div com um texto qualquer usando a classe recém criada e adicione ela ao body da sua página
3. Crie uma regra css para adicionar
   1. width: 80%
   2. height: 50px
   3. cor de fundo ( a sua escolha)
4. Crie uma classe div com fundo que seja filha da classe DivComTexto que tenha um metodo que adicione o estilo css recém criado e adicione ela ao body da sua página
5. Crie uma nova regra css que tenha os mesmos valores de largura e altura, mas tenha uma cor diferente e tenha o cursor: pointer. Também deverá alterar a cor do fundo quando o mouser passar por ele.
6. Crie uma nova classe que herde de DivComFundo e que sobrescreva o método addEstilo e adicione ela ao body da sua página

## solução
```hmtl
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body class='meu-body'>
  <script src="script.js"></script>
</body>

</html>
```

CSS
```css
html, body {
  height: 100%;
  width: 100%;
}

.um-estilo-bacana {
  width: 80%;
  height: 50px;
  background-color: gray;
}

.estilo-botao {
  width: 80%;
  height: 50px;
  background-color: lightgray;
  cursor: pointer;
}

.estilo-botao:hover { 
  background-color: darkgray;
}
```

JS
```js
class DivComTexto {
  constructor(texto) {
    this._div = document.createElement('div');
    this._div.innerText = texto;    
  }

  getDiv() {
    return this._div;
  }
}

class DivComFundo extends DivComTexto {
  constructor(texto) {
    super(texto);
  }

  addEstilo() {
    this._div.classList.add('um-estilo-bacana');
  }
}

class DivBotao extends DivComFundo {
  constructor(texto) {
    super(texto);
  }

  addEstilo() {
    this._div.classList.add('estilo-botao');
  }
}

const textoSimples = new DivComTexto('Um texto qualquer dentro da div');
document.body.appendChild(textoSimples.getDiv());

const textoComFundo = new DivComFundo('Um texto com fundo');
document.body.appendChild(textoComFundo.getDiv());
textoComFundo.addEstilo();

const textoBotao = new DivBotao('Uma div que se parece um botão');
document.body.appendChild(textoBotao.getDiv());
textoBotao.addEstilo();
```

JS com clousure
```js
function divCreator() {
  let div;

  function criarDiv(texto) {
    div = document.createElement('div');
    div.innerText = texto;
    return div;
  }

  function addEstilo(isButton) {
    if (isButton) {
      div.classList.add('estilo-botao');
    } else {
      div.classList.add('um-estilo-bacana');
    }
  }

  return {
    criarDiv,
    addEstilo,
  }
}


const textoSimples = divCreator();
const divSimples = textoSimples.criarDiv('Um texto qualquer dentro da div');
document.body.appendChild(divSimples);

const textoComFundo = divCreator();
const divComFundo = textoComFundo.criarDiv('Um texto com fundo');
document.body.appendChild(divComFundo);
textoComFundo.addEstilo();

const textoBotao = divCreator();
const divBotao = textoBotao.criarDiv('Uma div que se parece um botão');
document.body.appendChild(divBotao);
textoBotao.addEstilo(true);
```

  
