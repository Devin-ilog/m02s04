1. Criar classe que gere uma div com um texto
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
```

2. Crie um div com um texto qualquer usando a classe recém criada e adicione ela ao body da sua página
3. Crie uma regra css para adicionar
   1. width: 80%
   2. height: 50px
   3. cor de fundo ( a sua escolha)

```css
.um-estilo-bacana {
  width: 80%;
  height: 50px;
  background-color: gray;
}
```
4. Crie uma classe div com fundo que seja filha da classe DivComTexto que tenha um metodo que adicione o estilo css recém criado e adicione ela ao body da sua página

```js
class DivComFundo extends DivComTexto {
  constructor(texto) {
    super(texto);
  }

  addEstilo() {
    this._div.classList.add('um-estilo-bacana');
  }
}
```
5. Crie uma nova regra css que tenha os mesmos valores de largura e altura, mas tenha uma cor diferente e tenha o cursor: pointer. Também deverá alterar a cor do fundo quando o mouser passar por ele.

```css
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

6. Crie uma nova classe que herde de DivComFundo e que sobrescreva o método addEstilo e adicione ela ao body da sua página

```js
class DivBotao extends DivComFundo {
  constructor(texto) {
    super(texto);
  }

  addEstilo() {
    this._div.classList.add('estilo-botao');
  }
}
```

  
