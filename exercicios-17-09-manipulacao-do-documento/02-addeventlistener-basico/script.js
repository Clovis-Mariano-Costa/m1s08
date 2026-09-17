// ============================================================
// Exercício 2 — Primeiros passos com addEventListener (Bloco 3)
// Objetivo: entender as três partes de um listener — o elemento,
// o tipo de evento e a função de callback — com o clássico
// contador de cliques (slide 33).
//
// Este arquivo depende do index.html deste mesmo exercício:
//   <button id="btn">Clique aqui</button>
//   <p id="mensagem">Nenhum clique ainda.</p>
// São só esses dois elementos que o script inteiro usa.
// ============================================================

// Buscamos as referências ANTES de usá-las, porque o
// addEventListener (mais abaixo) precisa de uma referência real ao
// botão para conseguir "escutar" o clique nele.
// "btn" -> <button id="btn">Clique aqui</button> no HTML
// "mensagem" -> <p id="mensagem">Nenhum clique ainda.</p> no HTML
const botao = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");

// A variável "contador" fica FORA da função de callback, e é criada
// só UMA vez, quando o script roda pela primeira vez (ao carregar a
// página). Se a linha "let contador = 0" estivesse DENTRO da função
// de clique, ela rodaria de novo a cada clique, e o contador voltaria
// a 0 toda vez — nunca passaria de 1. Ficando fora, a MESMA variável
// é reaproveitada e incrementada a cada clique, guardando o valor
// entre um clique e o outro (isso se chama, em JS, uma "closure":
// a função de dentro "lembra" da variável de fora).
let contador = 0;

// addEventListener("click", function () {...}) tem três partes:
// 1) o elemento que escuta: "botao" (o <button id="btn"> do HTML)
// 2) o tipo de evento, como STRING: "click"
// 3) o callback: a função que só roda QUANDO o clique acontece —
//    nada dentro dela executa antes disso, mesmo estando escrita
//    aqui em cima no arquivo. O JavaScript só "guarda" essa função
//    pronta para chamar depois, no momento certo.
botao.addEventListener("click", function () {
  // Esta linha só roda a cada clique, nunca antes. Cada execução
  // pega o valor ATUAL de "contador" (guardado fora da função, na
  // linha acima) e soma 1, guardando o novo valor na mesma variável.
  // Exemplo: 1º clique: contador vira 1. 2º clique: contador vira 2. Etc.
  contador = contador + 1;

  // Atualizamos o texto que aparece na tela. "mensagem" é o mesmo
  // <p id="mensagem"> do HTML: alterar mensagem.textContent troca,
  // na hora, o texto visível dentro dele. Sem esta linha, o contador
  // até subiria internamente na variável, mas ninguém veria a
  // mudança na página — o <p> continuaria mostrando "Nenhum clique ainda.".
  mensagem.textContent = "Cliques: " + contador;
  // Aqui "Cliques: " (string) + contador (número) vira uma nova
  // string, porque o JavaScript converte o número para texto
  // automaticamente ao usar "+" com uma string do lado.
});

// ============================================================
// Critério de conclusão deste exercício:
// - Cada clique no botão aumenta o contador em 1 (1, 2, 3, 4...).
// - Você sabe apontar as três partes de um addEventListener:
//   o elemento, o nome do evento e a função de callback.
// - Você entende por que "contador" precisa estar fora da função:
//   se estivesse dentro, seria recriada (voltando a 0) a cada clique.
// - Você sabe dizer, no index.html, qual tag corresponde a "botao"
//   e qual corresponde a "mensagem".
// ============================================================
