// ============================================================
// Exercício 1 — Primeiras seleções com getElementById e querySelector
// Objetivo: selecionar título, status, input, botão e todos os
// itens da lista, usando pelo menos duas APIs diferentes, e
// confirmar no console que nenhuma seleção retornou null.
// ============================================================

// --- 1) Selecionando pelo id, com getElementById ---
// getElementById recebe SOMENTE o valor do atributo id, sem "#".
const titulo = document.getElementById("titulo");
const status = document.getElementById("status");

// --- 2) Selecionando pelo id, com querySelector ---
// querySelector aceita qualquer seletor CSS. Para id, usamos "#".
// Repare: para o MESMO elemento, existem duas formas corretas de chegar até ele.
const input = document.querySelector("#nova-tarefa");
const botaoAdicionar = document.querySelector("#adicionar");

// --- 3) Selecionando o primeiro elemento de uma classe ---
// querySelector com "." retorna apenas o PRIMEIRO elemento .item da página.
const primeiroItem = document.querySelector(".item");

// --- 4) Selecionando todos os elementos de uma classe ---
// querySelectorAll retorna uma NodeList com TODOS os elementos .item.
const todosOsItens = document.querySelectorAll(".item");

// --- 5) Conferindo cada seleção no console ---
// Se qualquer uma destas linhas imprimir "null", o seletor está errado
// (id digitado errado, "#" onde não devia, ou elemento inexistente).
console.log("titulo:", titulo);
console.log("status:", status);
console.log("input:", input);
console.log("botaoAdicionar:", botaoAdicionar);
console.log("primeiroItem:", primeiroItem);
console.log("quantidade de itens encontrados:", todosOsItens.length);

// --- 6) Percorrendo a NodeList com forEach ---
// forEach passa, a cada volta, o elemento atual e o seu índice (posição).
todosOsItens.forEach(function (item, indice) {
  // textContent lê o texto puro do elemento (mais sobre isso no Encontro 2).
  console.log("item " + indice + ":", item.textContent);
});

// --- 7) Atualizando o status para confirmar que o script rodou ---
// Isso prova visualmente, na tela, que a seleção funcionou.
status.textContent = "Painel carregado com " + todosOsItens.length + " tarefa(s).";

// ============================================================
// Critério de conclusão deste exercício:
// - Todas as variáveis acima aparecem no console SEM "null".
// - O texto de #status mudou na tela para confirmar o carregamento.
// ============================================================
