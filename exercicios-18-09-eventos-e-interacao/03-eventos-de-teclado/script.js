// ============================================================
// Exercício 3 — Eventos de teclado: keydown, keyup e event.key
// Objetivo: identificar teclas pressionadas e usar a tecla Enter
// para "enviar" um campo de texto, reaproveitando a função de
// adicionar (mesmo padrão do projeto final).
// ============================================================

const status = document.getElementById("status");
const teclaAtual = document.getElementById("tecla-atual");
const campoBusca = document.getElementById("campo-busca");
const resultadoBusca = document.getElementById("resultado-busca");

// --- Escutando QUALQUER tecla, no documento inteiro ---
// Colocamos o listener no "document" (não em um elemento específico)
// para funcionar em qualquer lugar da página.
document.addEventListener("keydown", function (event) {
  // event.key é uma string com o nome da tecla: "a", "Enter", "ArrowUp", etc.
  teclaAtual.textContent = "Tecla pressionada (keydown): " + event.key;
});

document.addEventListener("keyup", function (event) {
  // keyup dispara UMA vez, no momento em que a tecla é solta.
  console.log("Tecla solta (keyup):", event.key);
});


// --- Função que "envia" a busca digitada no campo ---
function enviarBusca() {
  const texto = campoBusca.value.trim();

  if (texto === "") {
    resultadoBusca.textContent = "Digite algo antes de pressionar Enter.";
    return;
  }

  resultadoBusca.textContent = "Você buscou por: \"" + texto + "\"";
  campoBusca.value = ""; // limpa o campo depois de usar
}

// --- Detectando a tecla Enter especificamente dentro do campo ---
campoBusca.addEventListener("keydown", function (event) {
  // Atenção: compare com "Enter" (E maiúsculo) — "enter" minúsculo
  // NUNCA vai bater, porque event.key é sensível a maiúsculas/minúsculas.
  if (event.key === "Enter") {
    enviarBusca();
  }
});

// ============================================================
// Critério de conclusão deste exercício:
// - Pressionar qualquer tecla na página atualiza o texto "Tecla
//   pressionada (keydown): ...".
// - Digitar algo no campo e apertar Enter mostra o resultado da
//   busca e limpa o campo.
// - Você sabe explicar a diferença entre keydown e keyup.
// ============================================================
