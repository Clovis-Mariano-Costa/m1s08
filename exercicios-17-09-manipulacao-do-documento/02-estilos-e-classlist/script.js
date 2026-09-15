// ============================================================
// Exercício 2 — Alterando aparência com style e com classList
// Objetivo: comparar as duas formas de mudar a aparência de um
// elemento e entender por que classList é a mais organizada.
// ============================================================

const titulo = document.getElementById("titulo");
const status = document.getElementById("status");
const botaoStyle = document.getElementById("btn-style");
const botaoAlternarTema = document.getElementById("alternar-tema");


// ------------------------------------------------------------
// Parte 1: alterando estilo diretamente com .style (camelCase)
// ------------------------------------------------------------
botaoStyle.addEventListener("click", function () {
  // Cada propriedade CSS com hífen vira camelCase no JavaScript:
  // background-color -> backgroundColor
  // border-radius     -> borderRadius
  titulo.style.backgroundColor = "#fff3cd";
  titulo.style.borderRadius = "8px";
  titulo.style.padding = "8px";

  status.textContent = "Estilo aplicado direto via .style (CSS inline).";
});


// ------------------------------------------------------------
// Parte 2: alternando uma classe já definida no CSS, com classList
// ------------------------------------------------------------
// Esta é a forma RECOMENDADA: o visual fica no CSS (classe .destaque),
// e o JavaScript só liga/desliga essa classe.
botaoAlternarTema.addEventListener("click", function () {
  // toggle(): se a classe já está presente, remove; se não está, adiciona.
  status.classList.toggle("destaque");

  // classList.contains() verifica se a classe está ativa neste momento,
  // e usamos isso só para atualizar a mensagem exibida.
  const estaDestacado = status.classList.contains("destaque");
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
// ============================================================
