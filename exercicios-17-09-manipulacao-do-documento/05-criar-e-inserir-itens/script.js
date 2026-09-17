// ============================================================
// Exercício 5 — createElement + appendChild (Bloco 7 da aula)
// Objetivo: praticar a sequência CRIAR -> CONFIGURAR -> INSERIR,
// primeiro com um único item, depois criando vários a partir de
// um array com um loop forEach.
//
// Elementos do index.html usados aqui:
//   <p id="status">A lista começa vazia.</p>
//   <button id="btn-criar-um">Criar 1 item</button>
//   <button id="btn-criar-varios">Criar itens a partir de um array</button>
//   <ul id="lista"></ul>   <- começa VAZIA, sem nenhum <li> dentro
// ============================================================

const status = document.getElementById("status");
const lista = document.getElementById("lista"); // <ul id="lista"> do HTML, hoje sem filhos
const botaoCriarUm = document.getElementById("btn-criar-um");
const botaoCriarVarios = document.getElementById("btn-criar-varios");

// Esta variável só existe para dar um número diferente a cada item
// criado pelo botão "Criar 1 item" (Item nº 1, nº 2, nº 3...).
// Fica FORA do listener pela mesma razão do Exercício 2 (contador de
// cliques): se "let contadorDeItens = 0" estivesse DENTRO da função,
// ela seria recriada a cada clique e voltaria a 0 toda vez.
let contadorDeItens = 0;


// ------------------------------------------------------------
// Parte 1: criando e inserindo UM item por vez
// ------------------------------------------------------------
botaoCriarUm.addEventListener("click", function () {
  contadorDeItens = contadorDeItens + 1;

  // 1) CRIAR — document.createElement("li") cria um elemento <li>
  // NA MEMÓRIA do navegador. Neste exato momento ele ainda NÃO
  // existe dentro do <ul id="lista"> do HTML, e por isso ainda não
  // aparece na tela. É só um objeto JavaScript "solto", sem lugar
  // fixo na página.
  const novoItem = document.createElement("li");

  // 2) CONFIGURAR — só faz sentido definir texto e classe DEPOIS de
  // criar (precisamos do elemento para configurá-lo) e ANTES de
  // inserir (assim ele já entra pronto na página, sem "piscar" vazio
  // e só depois ganhar o texto).
  novoItem.textContent = "Item criado nº " + contadorDeItens;
  // classList.add("item") dá a esse <li> a mesma classe CSS "item"
  // usada nos <li> estáticos de outros exercícios — no style.css,
  // ".item" só define um espaçamento (padding) simples.
  novoItem.classList.add("item");

  // 3) INSERIR — appendChild coloca o elemento como ÚLTIMO FILHO do
  // <ul id="lista"> do HTML. É só a partir desta linha que o item
  // passa a existir de fato dentro da árvore do DOM da página, e
  // por isso só agora ele aparece visualmente na tela.
  lista.appendChild(novoItem);

  status.textContent = "Item nº " + contadorDeItens + " criado e inserido.";
});


// ------------------------------------------------------------
// Parte 2: criando VÁRIOS itens a partir de um array, com forEach
// ------------------------------------------------------------
botaoCriarVarios.addEventListener("click", function () {
  // O array é criado DENTRO do listener porque cada clique deve
  // gerar a mesma lista de frutas do zero — diferente do contador
  // da Parte 1, aqui não precisamos guardar nenhum estado entre um
  // clique e outro.
  const frutas = ["Banana", "Maçã", "Uva"];

  // forEach roda a função de callback UMA VEZ para cada posição do
  // array, na ORDEM em que os itens aparecem nele. O parâmetro
  // "fruta" recebe, em cada execução, um valor diferente:
  //   1ª execução: fruta = "Banana"
  //   2ª execução: fruta = "Maçã"
  //   3ª execução: fruta = "Uva"
  // Ou seja: o bloco de código abaixo roda 3 vezes seguidas.
  frutas.forEach(function (fruta) {
    // Dentro do loop repetimos a MESMA sequência de sempre — criar,
    // configurar, inserir — só que agora usando "fruta" como texto.
    const item = document.createElement("li");   // 1) criar
    item.textContent = fruta;                     // 2) configurar
    item.classList.add("item");
    lista.appendChild(item);                       // 3) inserir
    // Cada appendChild aqui adiciona um novo <li> ao FINAL da <ul>,
    // então a ordem na tela (Banana, depois Maçã, depois Uva)
    // acompanha exatamente a ordem do array "frutas".
  });

  status.textContent = "Foram adicionados " + frutas.length + " itens a partir do array.";
  // frutas.length é o TAMANHO do array (quantos itens ele tem: 3).
});

// ============================================================
// Critério de conclusão deste exercício:
// - Cada clique em "Criar 1 item" adiciona um novo <li> ao final da lista.
// - O clique em "Criar itens a partir de um array" adiciona os
//   três itens do array de uma vez, na ordem em que aparecem nele.
// - Você sabe explicar por que a ordem criar -> configurar -> inserir importa.
// - Você sabe dizer, no HTML, que <ul id="lista"> começa vazia, e
//   que são exatamente as linhas com appendChild que a preenchem.
// ============================================================
