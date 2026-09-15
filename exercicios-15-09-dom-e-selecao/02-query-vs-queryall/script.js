// ============================================================
// Exercício 2 — Comparando querySelector com querySelectorAll
// Objetivo: entender, na prática, que querySelector traz só o
// PRIMEIRO elemento compatível, enquanto querySelectorAll traz
// TODOS eles em uma NodeList.
// ============================================================

const status = document.getElementById("status");

// --- 1) querySelector(".item") -> retorna UM único elemento ---
// Mesmo existindo quatro <li class="item">, só o primeiro volta aqui.
const primeiroItem = document.querySelector(".item");
console.log("querySelector('.item') retornou apenas 1 elemento:");
console.log(primeiroItem);
console.log("texto do primeiro item:", primeiroItem.textContent);

// --- 2) querySelectorAll(".item") -> retorna uma NodeList ---
// Contém TODOS os elementos .item da página, na ordem em que aparecem.
const todosOsItens = document.querySelectorAll(".item");
console.log("querySelectorAll('.item') retornou uma NodeList com length:", todosOsItens.length);
console.log(todosOsItens);

// --- 3) Uma NodeList aceita forEach, igual um array ---
todosOsItens.forEach(function (item, indice) {
  console.log("Item " + (indice + 1) + " de " + todosOsItens.length + ":", item.textContent);
});

// --- 4) O que acontece quando NADA é encontrado? ---
// Esta é a pegadinha mais comum entre os dois métodos:
const buscaSemResultado = document.querySelector(".nao-existe");
const buscaTodosSemResultado = document.querySelectorAll(".nao-existe");

console.log("querySelector de algo que não existe:", buscaSemResultado);
// -> imprime null

console.log("querySelectorAll de algo que não existe:", buscaTodosSemResultado);
// -> imprime uma NodeList VAZIA ([]), e NÃO null!
console.log("length da NodeList vazia:", buscaTodosSemResultado.length); // 0

// --- 5) Atualizando a tela com o resumo da comparação ---
status.textContent =
  "querySelector trouxe 1 item (\"" + primeiroItem.textContent + "\"); " +
  "querySelectorAll trouxe " + todosOsItens.length + " itens.";

// ============================================================
// Critério de conclusão deste exercício:
// - Você consegue explicar, sem olhar o código, por que
//   querySelector(".nao-existe") é null, mas
//   querySelectorAll(".nao-existe") é uma NodeList vazia (não é null).
// ============================================================
