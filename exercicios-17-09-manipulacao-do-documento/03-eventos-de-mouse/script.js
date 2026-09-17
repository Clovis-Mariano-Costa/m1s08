// ============================================================
// Exercício 3 — Eventos de mouse (Bloco 4)
// Objetivo: reconhecer cada evento de mouse na prática:
// click (o mais comum), dblclick (clique duplo), mouseover
// (o cursor entrou no elemento) e mouseout (o cursor saiu).
// ATENÇÃO: o nome correto do clique duplo é "dblclick" — os
// slides desta semana grafam "dbclick" por engano.
//
// Elementos do index.html usados aqui:
//   <p id="status">...</p>
//   <div class="caixa-mouse" id="caixa-mouse">Interaja comigo</div>
// ============================================================

// "status" -> <p id="status"> do HTML, onde escrevemos qual evento
// acabou de disparar.
// "caixaMouse" -> <div id="caixa-mouse"> do HTML, o elemento que
// vai reagir a TODOS os eventos de mouse registrados abaixo.
const status = document.getElementById("status");
const caixaMouse = document.getElementById("caixa-mouse");

// --- Clique simples ---
// Registramos o listener de "click" na caixa. O código dentro da
// função SÓ roda quando o usuário clica — até lá, ele fica "parado",
// só esperando o evento acontecer (o navegador fica de olho nisso
// sozinho, sem precisar de nenhum loop escrito por nós).
caixaMouse.addEventListener("click", function () {
  // console.log só aparece no DevTools (F12 -> aba Console), nunca
  // na tela da página. Serve para você, programador, confirmar QUAL
  // evento disparou, sem depender só do que aparece visualmente.
  console.log("Clicou!");

  // classList.toggle("clicada"): olha se a classe CSS "clicada" já
  // está presente na div. Se estiver, REMOVE. Se não estiver,
  // ADICIONA. É assim que a caixa "liga/desliga" visualmente a cada
  // clique. A classe "clicada" em si (a aparência que ela define)
  // está no style.css deste exercício, em ".caixa-mouse.clicada" —
  // o JavaScript só liga/desliga o NOME da classe, quem decide a cor
  // e a borda é o CSS.
  caixaMouse.classList.toggle("clicada");

  status.textContent = "Você clicou na caixa.";
});

// --- Clique duplo — grafia correta: dblclick ---
// Este é um evento SEPARADO do "click" acima — o navegador dispara
// os dois eventos em sequência quando há um clique duplo (primeiro
// dois "click", depois um "dblclick"), então os DOIS listeners
// (este e o de cima) rodam, um atrás do outro.
caixaMouse.addEventListener("dblclick", function () {
  console.log("Clicou duas vezes!");

  // Aqui trocamos o TEXTO inteiro da caixa (igual ao textContent do
  // Exercício 1), para deixar bem visível que um evento diferente
  // (dblclick, não click) foi o responsável por essa mudança.
  caixaMouse.textContent = "Você deu um duplo clique!";

  status.textContent = "Evento disparado: dblclick.";
});

// --- Mouse entrou no elemento ---
// mouseover dispara UMA VEZ, no momento exato em que o cursor cruza
// a borda da caixa e entra nela — não fica disparando repetidamente
// enquanto o mouse permanece parado lá dentro.
caixaMouse.addEventListener("mouseover", function () {
  console.log("Mouse entrou!");

  // add() só ADICIONA a classe (não faz nada se ela já estiver lá) —
  // diferente do toggle() usado no clique, aqui queremos sempre
  // GARANTIR que a classe "mouse-em-cima" fique ativa enquanto o
  // mouse está em cima da caixa. O visual dessa classe (cor de fundo
  // amarela, borda laranja) está definido no style.css, em
  // ".caixa-mouse.mouse-em-cima".
  caixaMouse.classList.add("mouse-em-cima");

  status.textContent = "Evento disparado: mouseover.";
});

// --- Mouse saiu do elemento ---
// mouseout é o "espelho" do mouseover: dispara no momento em que o
// cursor cruza a borda saindo da caixa.
caixaMouse.addEventListener("mouseout", function () {
  console.log("Mouse saiu!");

  // remove() desfaz o que o mouseover fez, tirando a classe
  // "mouse-em-cima" e devolvendo a caixa à aparência original
  // (definida em ".caixa-mouse", sem modificador) assim que o mouse
  // sai de cima dela.
  caixaMouse.classList.remove("mouse-em-cima");

  status.textContent = "Evento disparado: mouseout.";
});

// ============================================================
// Critério de conclusão deste exercício:
// - A caixa muda de aparência quando o mouse passa por cima
//   (mouseover) e quando sai (mouseout).
// - Um clique simples alterna a classe "clicada".
// - Um duplo clique troca o texto da caixa.
// - Você sabe escrever "dblclick" corretamente, de cabeça.
// - Você sabe dizer, no style.css, onde está definida a aparência
//   de cada classe que o JavaScript liga/desliga aqui.
// ============================================================
