// ============================================================
// PROJETO FINAL — Painel Interativo de Tarefas
// Este arquivo reúne, em um único fluxo, tudo o que foi construído
// nos três encontros da Semana 8. Os comentários indicam de qual
// encontro cada trecho veio.
// ============================================================

// ------------------------------------------------------------
// ENCONTRO 1 (15/09) — Selecionando todos os elementos que vamos usar
// ------------------------------------------------------------
// Usamos const porque nenhuma destas referências será reatribuída
// (o elemento em si pode mudar de conteúdo, mas a variável sempre
// aponta para o mesmo elemento do DOM).
const input = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista");
const status = document.getElementById("status");
const textoTecla = document.getElementById("tecla");

// Confirmando no console que nenhuma seleção retornou null.
console.log({ input, botaoAdicionar, lista, status, textoTecla });
status.textContent = "Painel carregado. Adicione sua primeira tarefa!";


// ------------------------------------------------------------
// Função principal: cria, configura e insere uma nova tarefa
// ------------------------------------------------------------
function adicionarTarefa() {
  // ENCONTRO 3, Bloco 1 — capturamos e validamos o valor digitado
  // DENTRO da função, para pegar sempre o valor mais atual.
  const texto = input.value.trim();

  // Se o campo estiver vazio, não fazemos nada (evita tarefa em branco).
  if (texto === "") {
    status.textContent = "Digite uma tarefa antes de adicionar.";
    return;
  }

  // ENCONTRO 2, Bloco 7 — createElement + configuração antes de inserir.
  const item = document.createElement("li");
  item.textContent = texto;          // textContent: seguro para dados do usuário
  item.classList.add("item");        // classe usada só para estilizar

  // ENCONTRO 2, Bloco 6 — classList.toggle liga/desliga o estilo "concluída"
  // definido no CSS, sem precisar mexer em style diretamente.
  item.addEventListener("click", function () {
    item.classList.toggle("concluida");
  });

  // ENCONTRO 2, Bloco 8 + ENCONTRO 3, Bloco 2 (revisão de eventos de mouse)
  // — duplo clique remove a tarefa. Atenção à grafia: "dblclick".
  item.addEventListener("dblclick", function () {
    item.remove();
    status.textContent = "Tarefa removida.";
  });

  // ENCONTRO 2, Bloco 7 — appendChild insere o item já pronto na lista.
  lista.appendChild(item);

  // Limpamos o campo e devolvemos o foco, para o usuário já poder
  // digitar a próxima tarefa sem precisar clicar no input de novo.
  input.value = "";
  input.focus();

  status.textContent = "Tarefa \"" + texto + "\" adicionada.";
}


// ------------------------------------------------------------
// ENCONTRO 2/3 — addEventListener no botão "Adicionar"
// ------------------------------------------------------------
botaoAdicionar.addEventListener("click", adicionarTarefa);


// ------------------------------------------------------------
// ENCONTRO 3, Bloco 3 — eventos de teclado no campo de texto
// ------------------------------------------------------------
input.addEventListener("keydown", function (event) {
  // Mostramos sempre qual foi a última tecla pressionada no campo.
  textoTecla.textContent = "Tecla: " + event.key;

  // Se a tecla for Enter, reaproveitamos a MESMA função usada pelo botão
  // — não duplicamos lógica entre o clique e o teclado.
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});

// ============================================================
// Critério de conclusão do projeto:
// - Adicionar tarefa funciona pelo botão E pela tecla Enter.
// - Clicar em uma tarefa alterna o estilo "concluída" (riscado).
// - Duplo clique remove a tarefa da lista.
// - O campo vazio não gera tarefas em branco.
// - Nenhum erro aparece no console durante o uso normal.
// ============================================================
