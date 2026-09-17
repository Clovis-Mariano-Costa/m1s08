// ============================================================
// Exercício 6 — remove() e removeChild(), com segurança
// (Bloco 8 da aula)
// Objetivo: remover elementos das duas formas possíveis, e
// evitar o erro clássico de tentar remover algo que não existe
// mais (lista vazia).
//
// Elementos do index.html usados aqui:
//   <p id="status">A lista tem 3 itens. ...</p>
//   <button id="btn-remover-ultimo">Remover último item</button>
//   <button id="btn-remover-especifico">Remover item "Feijão" ...</button>
//   <ul id="lista">
//     <li class="item" id="item-arroz">Arroz</li>
//     <li class="item" id="item-feijao">Feijão</li>
//     <li class="item" id="item-macarrao">Macarrão</li>
//   </ul>
// Repare que, diferente do Exercício 5, aqui a lista JÁ COMEÇA
// com 3 itens escritos direto no HTML — este script só remove,
// nunca cria nada.
// ============================================================

const status = document.getElementById("status");
const lista = document.getElementById("lista");
const botaoRemoverUltimo = document.getElementById("btn-remover-ultimo");
const botaoRemoverEspecifico = document.getElementById("btn-remover-especifico");


// ------------------------------------------------------------
// Parte 1: remove() — chamado no PRÓPRIO elemento a ser removido
// ------------------------------------------------------------
botaoRemoverUltimo.addEventListener("click", function () {
  // lista.lastElementChild devolve o último elemento <li> filho da
  // <ul id="lista"> NO MOMENTO do clique — não é um valor fixo. No
  // primeiro clique, é o "Macarrão" (o último <li> do HTML). Depois
  // dele ser removido, no PRÓXIMO clique lastElementChild já devolve
  // o "Feijão", que virou o novo último item.
  const ultimoItem = lista.lastElementChild;

  // ATENÇÃO: quando a lista fica vazia (depois de remover Macarrão,
  // Feijão e Arroz), lastElementChild devolve null — não existe mais
  // nenhum último filho. Chamar .remove() diretamente em null
  // quebraria o script com um erro ("Cannot read properties of
  // null"). Por isso verificamos antes com "if (ultimoItem)", que só
  // entra no bloco de dentro se ultimoItem for um elemento de verdade
  // (null é tratado como "falso" pelo if).
  if (ultimoItem) {
    // Guardamos o texto ANTES de remover, porque depois do .remove()
    // o elemento deixa de existir na página, e não teríamos mais
    // como ler ultimoItem.textContent.
    const textoRemovido = ultimoItem.textContent;

    // remove() é chamado DIRETAMENTE no elemento que queremos tirar
    // da página — ele "se remove sozinho" da árvore do DOM, sem
    // precisar mencionar o pai (<ul id="lista">) nesta linha.
    ultimoItem.remove();

    status.textContent = "Item \"" + textoRemovido + "\" removido com remove().";
  } else {
    // Este "else" é o comportamento SEGURO esperado quando a lista
    // já está vazia: em vez de quebrar o script com erro, só
    // avisamos o usuário através do <p id="status">.
    status.textContent = "A lista já está vazia — nada para remover.";
  }
});


// ------------------------------------------------------------
// Parte 2: removeChild() — chamado no PAI, recebe o filho
// ------------------------------------------------------------
botaoRemoverEspecifico.addEventListener("click", function () {
  // Buscamos o item pelo id TODA VEZ que o botão é clicado (dentro
  // do listener, e não uma única vez lá no topo do arquivo), porque
  // esse <li id="item-feijao"> pode já não existir mais se o botão
  // "Remover último" já tiver apagado ele antes (lembre: "Feijão" é
  // o item do meio, então ele só sobrevive até o "Macarrão" ser
  // removido primeiro).
  const itemFeijao = document.getElementById("item-feijao");

  // De novo, verificamos se o elemento ainda existe antes de tentar
  // remover — se getElementById não encontrar nenhuma tag com esse
  // id (porque já foi removida), ele devolve null.
  if (itemFeijao) {
    // removeChild é chamado no elemento PAI (a <ul id="lista">) e
    // recebe, como argumento, o elemento FILHO que deve ser removido
    // (itemFeijao). É uma sintaxe diferente da Parte 1 — aqui quem
    // "manda" é o pai, não o próprio item — mas o resultado final na
    // tela é o mesmo: o <li> desaparece da página.
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
// - Você sabe explicar, com o HTML na mão, por que "Feijão" some
//   se você clicar 2x em "Remover último item" antes de clicar em
//   "Remover item Feijão".
// ============================================================
