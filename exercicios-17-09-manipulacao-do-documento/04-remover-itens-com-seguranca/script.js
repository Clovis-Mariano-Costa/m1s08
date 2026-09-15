// ============================================================
// Exercício 4 — remove() e removeChild(), com segurança
// Objetivo: remover elementos das duas formas possíveis, e
// evitar o erro clássico de tentar remover algo que não existe
// mais (lista vazia).
// ============================================================

const status = document.getElementById("status");
const lista = document.getElementById("lista");
const botaoRemoverUltimo = document.getElementById("btn-remover-ultimo");
const botaoRemoverEspecifico = document.getElementById("btn-remover-especifico");


// ------------------------------------------------------------
// Parte 1: remove() — chamado no PRÓPRIO elemento a ser removido
// ------------------------------------------------------------
botaoRemoverUltimo.addEventListener("click", function () {
  // lastElementChild pega o último <li> da lista no momento do clique.
  const ultimoItem = lista.lastElementChild;

  // ATENÇÃO: se a lista já estiver vazia, lastElementChild é null.
  // Chamar .remove() em null quebraria o script — por isso o "if".
  if (ultimoItem) {
    const textoRemovido = ultimoItem.textContent;
    ultimoItem.remove();
    status.textContent = "Item \"" + textoRemovido + "\" removido com remove().";
  } else {
    // Este é o comportamento seguro esperado quando a lista está vazia.
    status.textContent = "A lista já está vazia — nada para remover.";
  }
});


// ------------------------------------------------------------
// Parte 2: removeChild() — chamado no PAI, recebe o filho
// ------------------------------------------------------------
botaoRemoverEspecifico.addEventListener("click", function () {
  const itemFeijao = document.getElementById("item-feijao");

  // De novo: verificamos se o elemento ainda existe antes de remover
  // (o botão "Remover último" pode já ter apagado este item).
  if (itemFeijao) {
    // removeChild é chamado no PAI (lista) e recebe o FILHO (itemFeijao).
    lista.removeChild(itemFeijao);
    status.textContent = "Item \"Feijão\" removido com lista.removeChild(item).";
  } else {
    status.textContent = "O item \"Feijão\" já não existe mais na lista.";
  }
});

// ============================================================
// Critério de conclusão deste exercício:
// - Clicar várias vezes em "Remover último item" NÃO gera erro
//   quando a lista fica vazia (graças ao "if").
// - O botão "Remover item Feijão" mostra o uso de removeChild,
//   chamado no elemento pai (lista), e também não quebra se
//   o item já tiver sido removido antes.
// ============================================================
