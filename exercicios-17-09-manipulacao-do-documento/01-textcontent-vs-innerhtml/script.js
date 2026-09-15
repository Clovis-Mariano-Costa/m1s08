// ============================================================
// Exercício 1 — textContent x innerHTML
// Objetivo: ver, na prática, que textContent trata tudo como
// texto puro, enquanto innerHTML interpreta e renderiza tags HTML.
// ============================================================

// Selecionando os elementos que vamos usar (Encontro 1: getElementById)
const resultado = document.getElementById("resultado");
const status = document.getElementById("status");
const botaoTextContent = document.getElementById("btn-textcontent");
const botaoInnerHTML = document.getElementById("btn-innerhtml");

// O MESMO texto, com uma tag HTML dentro, será usado nos dois testes.
const mensagemComTag = "Parabéns, <strong>você acertou!</strong>";

// --- Botão 1: usando textContent ---
botaoTextContent.addEventListener("click", function () {
  // textContent NÃO interpreta a tag <strong> — ela aparece
  // literalmente escrita na tela, como texto puro.
  resultado.textContent = mensagemComTag;
  status.textContent = "Repare: a tag <strong> apareceu escrita, não em negrito.";
});

// --- Botão 2: usando innerHTML ---
botaoInnerHTML.addEventListener("click", function () {
  // innerHTML INTERPRETA a tag <strong> e renderiza "você acertou!" em negrito.
  resultado.innerHTML = mensagemComTag;
  status.textContent = "Repare: agora a palavra apareceu em negrito de verdade.";
});

// ============================================================
// Por que isso importa (nota de segurança):
// Nunca use innerHTML diretamente com um texto DIGITADO PELO
// USUÁRIO sem validação — ele pode conter marcação HTML não
// confiável. O exemplo abaixo é só para você VER o risco,
// sem executar nada perigoso de verdade:
// ============================================================

// Exemplo (comentado) do tipo de entrada que NÃO deveria ir
// direto para innerHTML sem tratamento:
// const entradaDoUsuario = "<img src=x onerror=\"alert('inseguro')\">";
// elemento.innerHTML = entradaDoUsuario; // <- evite isso!
//
// Para dados vindos do usuário, prefira sempre textContent:
// elemento.textContent = entradaDoUsuario; // seguro: vira texto puro

// ============================================================
// Critério de conclusão deste exercício:
// - Você consegue explicar por que a tag <strong> aparece
//   literalmente com textContent, mas é renderizada com innerHTML.
// - Você sabe dizer quando usar cada um dos dois na prática.
// ============================================================
