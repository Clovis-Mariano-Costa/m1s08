// ============================================================
// Exercício 1 — Capturando o valor de um campo de texto
// Objetivo: entender que .value é sempre uma string e que deve
// ser lido DENTRO do evento, no momento exato da interação.
// ============================================================

const nome = document.getElementById("nome");
const botaoMostrar = document.getElementById("btn-mostrar");
const saida = document.getElementById("saida");

// ------------------------------------------------------------
// ERRADO (comentado só para ilustrar o erro): ler .value FORA
// do evento captura o valor no momento em que a página carregou,
// e não vai mudar mesmo que o usuário digite algo depois.
// ------------------------------------------------------------
// const valorCapturadoErrado = nome.value; // sempre vazio aqui!

// ------------------------------------------------------------
// CORRETO: ler .value DENTRO do listener, no momento do clique.
// ------------------------------------------------------------
botaoMostrar.addEventListener("click", function () {
  // .value é SEMPRE uma string, mesmo se o campo fosse type="number".
  const valorDigitado = nome.value;

  // trim() remove espaços em branco do início e do fim.
  const valorLimpo = valorDigitado.trim();

  if (valorLimpo === "") {
    saida.textContent = "Digite algo antes de clicar em Mostrar.";
    return; // interrompe a função aqui, sem seguir para a linha de baixo
  }

  saida.textContent = "Olá, " + valorLimpo + "!";

  // Prova de que .value é string: "typeof" mostra o tipo do dado.
  console.log("typeof nome.value:", typeof valorDigitado); // "string"
});

// ============================================================
// Critério de conclusão deste exercício:
// - Digitar um nome e clicar em "Mostrar" exibe "Olá, <nome>!".
// - Clicar sem digitar nada mostra um aviso, sem quebrar o script.
// - Você sabe explicar por que .value é sempre string, mesmo em
//   um campo do tipo number.
// ============================================================
