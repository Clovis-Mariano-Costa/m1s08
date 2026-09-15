// ============================================================
// Desafio (slide 61) — Mover uma caixa vermelha com as setas do teclado
//
// Enunciado oficial: criar uma caixa vermelha e permitir que o
// usuário a mova com as setas do teclado. Cada tecla pressionada
// deve aparecer na tela. A caixa deve andar 10px por vez, nas
// QUATRO direções.
//
// CORREÇÃO APLICADA: o slide original listava "seta para a
// esquerda" três vezes nas instruções de texto. Aqui usamos as
// quatro direções reais: ArrowUp, ArrowDown, ArrowLeft, ArrowRight.
// ============================================================

const caixa = document.getElementById("caixa");
const textoTecla = document.getElementById("tecla-pressionada");
const areaDeJogo = document.querySelector(".area-de-jogo");

// Posição atual da caixa, em pixels. Começa no canto superior esquerdo.
let posicaoX = 0;
let posicaoY = 0;

// Quantos pixels a caixa anda a cada tecla pressionada.
const PASSO = 10;

document.addEventListener("keydown", function (event) {
  // 1) Sempre mostramos qual tecla foi pressionada, mesmo que não
  //    seja uma seta (ajuda a explorar o event.key em aula).
  textoTecla.textContent = "Tecla pressionada: " + event.key;

  // 2) Calculamos os limites da área de jogo, para a caixa não "escapar".
  const limiteX = areaDeJogo.clientWidth - caixa.offsetWidth;
  const limiteY = areaDeJogo.clientHeight - caixa.offsetHeight;

  // 3) Atualizamos a posição conforme a seta pressionada.
  //    Usar "if" separados (em vez de "else if") não muda o resultado
  //    aqui, mas deixa claro que cada tecla é independente das outras.
  if (event.key === "ArrowRight") posicaoX += PASSO;
  if (event.key === "ArrowLeft") posicaoX -= PASSO;
  if (event.key === "ArrowDown") posicaoY += PASSO;
  if (event.key === "ArrowUp") posicaoY -= PASSO;

  // 4) Math.max/Math.min "prendem" a caixa dentro da área de jogo,
  //    impedindo que ela saia pela borda.
  posicaoX = Math.max(0, Math.min(posicaoX, limiteX));
  posicaoY = Math.max(0, Math.min(posicaoY, limiteY));

  // 5) Aplicamos a nova posição usando style.left e style.top,
  //    exatamente como pede o enunciado oficial do desafio.
  caixa.style.left = posicaoX + "px";
  caixa.style.top = posicaoY + "px";
});

// ============================================================
// Variação equivalente (para mostrar em aula, se quiser comparar):
// em vez de style.left/style.top, também é possível mover a caixa
// com style.transform, sem position: absolute:
//
//   caixa.style.transform = "translate(" + posicaoX + "px, " + posicaoY + "px)";
//
// A diferença: left/top reposiciona a caixa dentro do fluxo do
// layout; transform: translate desloca só visualmente, sem afetar
// esse fluxo (geralmente roda de forma mais suave).
// ============================================================

// ============================================================
// Critério de conclusão deste exercício:
// - As quatro setas movem a caixa 10px por vez, cada uma em sua
//   direção correta.
// - A tecla pressionada aparece sempre na tela, mesmo quando não é
//   uma seta.
// - A caixa nunca sai da área demarcada.
// ============================================================
