// ============================================================
// Desafio de fechamento do Encontro 1 (slides 22 e 23)
// Adaptação do exercício "Bikcraft": selecionar e exibir no
// console o nome, o preço e a imagem das bicicletas, SEM alterar
// nada visualmente na página. O objetivo aqui é só "selecionar e
// ler" — "alterar" fica para o Encontro 2 (17/09).
// ============================================================

const status = document.getElementById("status");

// --- console.log 1: nome e preço de TODAS as bicicletas ---
// Selecionamos todos os nomes e todos os preços separadamente,
// e depois casamos cada um pelo índice (mesma posição na lista).
const nomes = document.querySelectorAll(".nome");
const precos = document.querySelectorAll(".preco");

console.log("1) Nome e preço de todas as bicicletas:");
nomes.forEach(function (nomeElemento, indice) {
  // precos[indice] pega o preço na mesma posição do nome atual.
  console.log("-", nomeElemento.textContent, "->", precos[indice].textContent);
});

// --- console.log 2: nome da Bicicleta 1 ---
// querySelector(".nome") sozinho já retorna o PRIMEIRO elemento
// .nome da página — ou seja, o nome da primeira bicicleta.
const nomeBicicleta1 = document.querySelector(".nome");
console.log("2) Nome da Bicicleta 1:", nomeBicicleta1.textContent);

// --- console.log 3: preço da Bicicleta 1 ---
const precoBicicleta1 = document.querySelector(".preco");
console.log("3) Preço da Bicicleta 1:", precoBicicleta1.textContent);

// --- console.log 4: imagem da Bicicleta 1 ---
// ".bicicleta img" é um seletor CSS combinado: "a primeira <img>
// que está dentro do primeiro elemento .bicicleta".
const imagemBicicleta1 = document.querySelector(".bicicleta img");
console.log("4) Imagem da Bicicleta 1 (src):", imagemBicicleta1.src);
console.log("4) Imagem da Bicicleta 1 (alt):", imagemBicicleta1.alt);

// --- Resumo na tela, sem alterar os cards ---
// Só atualizamos o parágrafo de status — os cards continuam intactos.
status.textContent =
  "Console preenchido com " + nomes.length + " bicicleta(s). Confira o DevTools (F12).";

// ============================================================
// Resultado esperado: selecionar e exibir no console os nomes,
// preços e endereço de imagem solicitados, sem alterar
// visualmente os cards do catálogo.
// ============================================================
