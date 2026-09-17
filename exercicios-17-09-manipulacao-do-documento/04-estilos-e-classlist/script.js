// ============================================================
// Exercício 4 — Alterando aparência com style e com classList
// (Blocos 5 e 6 da aula)
// Objetivo: comparar as duas formas de mudar a aparência de um
// elemento e entender por que classList é a mais organizada.
//
// Elementos do index.html usados aqui:
//   <h1 id="titulo">Minhas tarefas</h1>
//   <p id="status">Painel carregado.</p>
//   <button id="btn-style">Testar style (inline)</button>
//   <button id="alternar-tema">Alternar destaque (classList)</button>
// ============================================================

// Cada variável abaixo aponta para uma tag específica do HTML —
// compare o nome do id (a string entre aspas) com os ids escritos
// no index.html deste exercício.
const titulo = document.getElementById("titulo");
const status = document.getElementById("status");
const botaoStyle = document.getElementById("btn-style");
const botaoAlternarTema = document.getElementById("alternar-tema");


// ------------------------------------------------------------
// Parte 1: alterando estilo diretamente com .style (camelCase)
// ------------------------------------------------------------
botaoStyle.addEventListener("click", function () {
  // .style dá acesso ao estilo INLINE do elemento — é como se, a
  // cada linha abaixo, o JavaScript estivesse escrevendo direto no
  // atributo style="..." da tag <h1 id="titulo"> no HTML. Depois de
  // rodar, se você inspecionar o elemento no DevTools, vai ver algo
  // como <h1 id="titulo" style="background-color: #fff3cd; ...">.
  //
  // Cada propriedade CSS que tem hífen no nome (background-color)
  // vira camelCase em JavaScript (backgroundColor), porque em JS o
  // hífen já tem outro significado: é o sinal de subtração. Então
  // "titulo.style.background-color" daria erro — o certo é
  // "titulo.style.backgroundColor".
  titulo.style.backgroundColor = "#fff3cd"; // CSS: background-color
  titulo.style.borderRadius = "8px";        // CSS: border-radius
  titulo.style.padding = "8px";             // sem hífen, fica igual

  // Cada uma das três linhas acima já muda a aparência do <h1> na
  // tela IMEDIATAMENTE, assim que roda — nada precisa ser
  // "atualizado" depois. Esta linha só avisa o usuário do que
  // aconteceu, escrevendo dentro do <p id="status"> do HTML.
  status.textContent = "Estilo aplicado direto via .style (CSS inline).";
});


// ------------------------------------------------------------
// Parte 2: alternando uma classe já definida no CSS, com classList
// ------------------------------------------------------------
// Esta é a forma RECOMENDADA: o visual fica no CSS (classe .destaque,
// definida no style.css deste exercício, com border-left e
// font-weight: bold), e o JavaScript só liga/desliga essa classe.
// Diferente da Parte 1, aqui NENHUMA cor ou medida é escrita em
// JavaScript — só o NOME da classe, e quem decide a aparência é o CSS.
botaoAlternarTema.addEventListener("click", function () {
  // toggle(): verifica se a classe "destaque" já está presente no
  // <p id="status">. Se estiver, REMOVE. Se não estiver, ADICIONA.
  // É por isso que clicar de novo desfaz o efeito do clique anterior
  // — o botão funciona como um interruptor liga/desliga.
  status.classList.toggle("destaque");

  // Depois de alternar, .contains() checa o estado ATUAL da classe
  // (devolve true se "destaque" está ativa agora, false se não está).
  // Usamos isso só para decidir qual mensagem mostrar ao usuário —
  // o toggle() já fez a mudança visual sozinho, esta linha é só para
  // a mensagem de texto acompanhar o que está acontecendo.
  const estaDestacado = status.classList.contains("destaque");

  // Operador ternário: "condição ? valorSeVerdadeiro : valorSeFalso".
  // Se estaDestacado for true, status.textContent recebe a primeira
  // string; se for false, recebe a segunda. É um "if/else" resumido
  // em uma linha só, usado aqui porque a decisão é simples (só duas
  // opções de mensagem).
  status.textContent = estaDestacado
    ? "Classe 'destaque' ATIVADA com classList.toggle."
    : "Classe 'destaque' DESATIVADA com classList.toggle.";
});

// ============================================================
// Critério de conclusão deste exercício:
// - O botão "Testar style" muda a aparência do título via JS puro.
// - O botão "Alternar destaque" liga/desliga a classe .destaque
//   (definida no style.css) sem escrever nenhum CSS na mão.
// - Você sabe explicar por que classList é preferível ao .style
//   quando o estilo já pode ser definido antecipadamente no CSS.
// - Você sabe abrir o DevTools e ver o atributo style="..." sendo
//   criado no <h1> depois de clicar em "Testar style".
// ============================================================
