// ============================================================
// Exercício 3 — createElement + appendChild
// Objetivo: praticar a sequência CRIAR -> CONFIGURAR -> INSERIR,
// primeiro com um único item, depois criando vários a partir de
// um array com um loop forEach.
// ============================================================

const status = document.getElementById("status");
const lista = document.getElementById("lista");
const botaoCriarUm = document.getElementById("btn-criar-um");
const botaoCriarVarios = document.getElementById("btn-criar-varios");

// Contador só para dar nomes diferentes aos itens criados um a um.
let contadorDeItens = 0;


// ------------------------------------------------------------
// Parte 1: criando e inserindo UM item por vez
// ------------------------------------------------------------
botaoCriarUm.addEventListener("click", function () {
  contadorDeItens = contadorDeItens + 1;

  // 1) CRIAR — o elemento existe na memória, mas ainda não está na página.
  const novoItem = document.createElement("li");

  // 2) CONFIGURAR — definimos o texto e a classe ANTES de inserir.
  novoItem.textContent = "Item criado nº " + contadorDeItens;
  novoItem.classList.add("item");

  // 3) INSERIR — só agora o item aparece na tela, como último filho da <ul>.
  lista.appendChild(novoItem);

  status.textContent = "Item nº " + contadorDeItens + " criado e inserido.";
});


// ------------------------------------------------------------
// Parte 2: criando VÁRIOS itens a partir de um array, com forEach
// ------------------------------------------------------------
botaoCriarVarios.addEventListener("click", function () {
  const frutas = ["Banana", "Maçã", "Uva"];

  // forEach passa cada valor do array, um de cada vez, para a função.
  frutas.forEach(function (fruta) {
    // A mesma sequência de sempre, dentro do loop:
    const item = document.createElement("li");   // 1) criar
    item.textContent = fruta;                     // 2) configurar
    item.classList.add("item");
    lista.appendChild(item);                       // 3) inserir
  });

  status.textContent = "Foram adicionados " + frutas.length + " itens a partir do array.";
});

// ============================================================
// Critério de conclusão deste exercício:
// - Cada clique em "Criar 1 item" adiciona um novo <li> ao final da lista.
// - O clique em "Criar itens a partir de um array" adiciona os
//   três itens do array de uma vez, na ordem em que aparecem nele.
// - Você sabe explicar por que a ordem criar -> configurar -> inserir importa.
// ============================================================
