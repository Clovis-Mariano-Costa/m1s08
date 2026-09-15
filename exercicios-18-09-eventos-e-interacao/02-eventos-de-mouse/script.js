// ============================================================
// Exercício 2 — Eventos de mouse: click, dblclick, mouseover, mouseout
// Objetivo: reconhecer cada evento de mouse na prática e construir
// um contador de cliques. ATENÇÃO: o nome correto do clique duplo
// é "dblclick" (os slides originais desta semana grafam "dbclick",
// por engano — aqui já está corrigido).
// ============================================================

const botao = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");
const caixaMouse = document.getElementById("caixa-mouse");

// --- Contador de cliques (slide 33) ---
// A variável "contador" precisa ficar FORA do listener, senão ela
// seria recriada (voltando a 0) toda vez que a função rodasse.
let contador = 0;

botao.addEventListener("click", function () {
  contador = contador + 1;
  mensagem.textContent = "Cliques: " + contador;
});


// --- Clique simples na caixa ---
caixaMouse.addEventListener("click", function () {
  console.log("Clicou!");
  caixaMouse.classList.toggle("clicada");
});

// --- Clique duplo na caixa — grafia correta: dblclick ---
caixaMouse.addEventListener("dblclick", function () {
  console.log("Clicou duas vezes!");
  caixaMouse.textContent = "Você deu um duplo clique!";
});

// --- Mouse entrou na caixa ---
caixaMouse.addEventListener("mouseover", function () {
  console.log("Mouse entrou!");
  caixaMouse.classList.add("mouse-em-cima");
});

// --- Mouse saiu da caixa ---
caixaMouse.addEventListener("mouseout", function () {
  console.log("Mouse saiu!");
  caixaMouse.classList.remove("mouse-em-cima");
});

// ============================================================
// Critério de conclusão deste exercício:
// - O botão soma 1 a cada clique e mostra "Cliques: N" na tela.
// - A caixa muda de cor quando o mouse passa por cima e quando sai.
// - Um duplo clique na caixa troca o texto dela.
// - Você sabe escrever "dblclick" corretamente, de cabeça.
// ============================================================
