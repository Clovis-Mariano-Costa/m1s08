// ============================================================
// Exercício 5 — Praticando querySelector a fundo
// Objetivo: usar querySelector/querySelectorAll com os seletores
// CSS mais comuns (tag, id, classe, atributo, combinadores e
// pseudo-classes), sempre explicando o que cada um devolve.
// ============================================================

const status = document.getElementById("status");


// --- 1) Seletor de TAG ---
// document.querySelector("h1") busca a primeira tag <h1> da página.
// Não usamos "." nem "#" porque estamos buscando pelo NOME da tag.
const titulo = document.querySelector("h1");
console.log("1) Seletor de tag (h1):", titulo);


// --- 2) Seletor de ID ---
// O "#" antes do nome diz ao querySelector: "procure pelo atributo id".
// Funciona como getElementById, só que com sintaxe de CSS.
const busca = document.querySelector("#busca");
console.log("2) Seletor de id (#busca):", busca);


// --- 3) Seletor de CLASSE (retorna só o primeiro) ---
// Existem três elementos com a classe "aluno" no HTML, mas
// querySelector para na primeira ocorrência que encontrar.
const primeiroAluno = document.querySelector(".aluno");
console.log("3) Seletor de classe (.aluno), só o primeiro:", primeiroAluno);


// --- 4) querySelectorAll para pegar TODOS os elementos da classe ---
// Quando precisamos de todos os elementos, e não só do primeiro,
// trocamos querySelector por querySelectorAll — o retorno é uma NodeList.
const todosOsAlunos = document.querySelectorAll(".aluno");
console.log("4) Seletor de classe (.aluno), todos:", todosOsAlunos.length, "encontrados");
todosOsAlunos.forEach(function (aluno, indice) {
  // Dentro de cada .aluno, buscamos o .nome e a .nota com querySelector
  // "local": chamado a partir do próprio elemento "aluno", não de document.
  // Isso limita a busca a SOMENTE os descendentes daquele elemento.
  const nome = aluno.querySelector(".nome").textContent;
  const nota = aluno.querySelector(".nota").textContent;
  console.log("   aluno " + indice + ":", nome, "- nota:", nota);
});


// --- 5) Seletor de ATRIBUTO ---
// [data-turma="B"] procura qualquer elemento cujo atributo
// data-turma seja exatamente "B". Colchetes = seletor de atributo.
const alunoTurmaB = document.querySelector('[data-turma="B"]');
console.log("5) Seletor de atributo ([data-turma=\"B\"]):", alunoTurmaB);

// O mesmo vale para atributos nativos do HTML, como "type":
const campoDeTexto = document.querySelector('input[type="text"]');
console.log("5b) Seletor de atributo (input[type=\"text\"]):", campoDeTexto);


// --- 6) Seletor COMBINADO (descendente) ---
// ".aluno .nota" = "qualquer .nota que esteja DENTRO de um .aluno",
// não importa a profundidade. Aqui, a partir de document, ele já
// entra direto na primeira .nota do primeiro .aluno.
const primeiraNota = document.querySelector(".aluno .nota");
console.log("6) Seletor combinado descendente (.aluno .nota):", primeiraNota.textContent);


// --- 7) Seletor de FILHO DIRETO (">") ---
// "#menu > li" busca apenas os <li> que são FILHOS DIRETOS de #menu,
// e não qualquer <li> perdido em algum lugar dentro dele.
const primeiroItemMenu = document.querySelector("#menu > li");
console.log("7) Seletor de filho direto (#menu > li):", primeiroItemMenu.textContent);


// --- 8) PSEUDO-CLASSES (:first-child / :last-child / :nth-child) ---
// Pseudo-classes descrevem a POSIÇÃO do elemento entre os irmãos dele.
const primeiroDaLista = document.querySelector("#menu li:first-child");
const ultimoDaLista = document.querySelector("#menu li:last-child");
const segundoDaLista = document.querySelector("#menu li:nth-child(2)");

console.log("8) :first-child ->", primeiroDaLista.textContent);
console.log("8) :last-child  ->", ultimoDaLista.textContent);
console.log("8) :nth-child(2) ->", segundoDaLista.textContent);


// --- 9) Usando o resultado para confirmar a seleção na TELA ---
// Depois de garantir (no console) que nada voltou null, usamos os
// elementos encontrados para provar visualmente que a busca funcionou.
primeiroAluno.classList.add("destaque");
busca.placeholder = "Ex.: " + primeiroAluno.querySelector(".nome").textContent;

status.textContent =
  todosOsAlunos.length + " aluno(s) encontrados. " +
  "Primeiro aluno (" + primeiroAluno.querySelector(".nome").textContent + ") destacado em amarelo.";

// ============================================================
// Critério de conclusão deste exercício:
// - Você consegue explicar a diferença entre ".aluno .nota"
//   (descendente, qualquer nível) e "#menu > li" (filho direto).
// - Você consegue dizer, sem rodar o código, o que
//   document.querySelector('[data-turma="B"]') vai retornar.
// - Você entende por que aluno.querySelector(".nome") (chamado a
//   partir de um elemento, não de document) busca só dentro dele.
// ============================================================
