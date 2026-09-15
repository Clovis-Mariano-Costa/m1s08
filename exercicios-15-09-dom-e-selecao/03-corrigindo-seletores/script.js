// ============================================================
// Exercício 3 — Corrigindo seletores com erro
// Objetivo: identificar e corrigir os dois erros de sintaxe mais
// comuns ao começar com seletores. Cada bloco mostra primeiro o
// código ERRADO (comentado, para não quebrar a página) e depois
// a correção, já funcionando.
// ============================================================

const status = document.getElementById("status");


// ------------------------------------------------------------
// ERRO 1: usar "#" dentro de getElementById
// ------------------------------------------------------------

// ERRADO — getElementById já sabe que está buscando por id;
// se você passar "#titulo", ele procura um id LITERALMENTE
// chamado "#titulo" (com a cerquilha no meio do nome) e não encontra nada.
// const tituloErrado = document.getElementById("#titulo");
// console.log(tituloErrado); // -> null

// CORRETO — getElementById recebe só o nome do id, sem "#".
const tituloCorreto = document.getElementById("titulo");
console.log("Correção 1 (getElementById sem #):", tituloCorreto);


// ------------------------------------------------------------
// ERRO 2: esquecer o "." ao selecionar uma classe com querySelector
// ------------------------------------------------------------

// ERRADO — sem o ponto, o navegador entende que "item" é o nome
// de uma TAG HTML (como <item>), que não existe na nossa página.
// const itemErrado = document.querySelector("item");
// console.log(itemErrado); // -> null

// CORRETO — o "." antes do nome indica que estamos buscando por classe.
const itemCorreto = document.querySelector(".item");
console.log("Correção 2 (querySelector com .item):", itemCorreto);


// ------------------------------------------------------------
// Por que isso importa? Ler propriedades de "null" quebra o script.
// ------------------------------------------------------------

// Se você tentasse fazer isto com o seletor errado, o navegador pararia
// a execução com o erro: "Cannot set properties of null".
// tituloErrado.textContent = "Isso vai quebrar!"; // <- NÃO FAÇA ISSO

// Com a referência correta, funciona normalmente:
tituloCorreto.textContent = "Seletores corrigidos!";
status.textContent = "Os dois erros foram corrigidos. Veja os comentários no script.js.";

// ============================================================
// Critério de conclusão deste exercício:
// - Você consegue explicar, com suas palavras, por que
//   document.getElementById("#titulo") retorna null.
// - Você consegue explicar por que document.querySelector("item")
//   (sem o ponto) também retorna null.
// ============================================================
