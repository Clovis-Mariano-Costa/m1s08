// ============================================================
// GABARITO DO PROFESSOR — uso em sala, para correção com a turma.
// Não é o arquivo que o aluno recebe: o aluno recebe a Documentação
// Funcional (PDF) e o Refinamento Técnico (PDF/HTML), ambos na raiz
// do repositório, com exemplos genéricos — não com este código pronto.
//
// Mini Projeto — Tela de Login
// Reúne, em uma única tela, UMA ação simples de cada tópico da
// semana. Nenhuma função aqui usa if/else: cada addEventListener
// faz só uma coisa direta, sem decisão encadeada. Essa é a regra
// combinada com a turma depois do projeto final do painel de tarefas
// (que usava if/return e ternário) — aqui o objetivo é reconhecer
// cada API isoladamente, sem misturar lógica de validação junto.
//
// ATUALIZAÇÃO: agora também inclui a ação de MOVER (como no Desafio
// 04 — "mover a caixa com o teclado"), só que aplicada à foto de
// perfil, e com duas formas de mover: mouse (arrastando a alça) e
// teclado (setas, com a alça focada). Ambas reaproveitam a mesma
// função moverFoto() — veja o bloco "Mover a foto" mais abaixo.
// ============================================================


// ------------------------------------------------------------
// Bloco 1 — Selecionando os elementos (getElementById e querySelector)
// ------------------------------------------------------------
// Toda seleção fica no topo do arquivo, igual aos outros exercícios
// da semana: assim, o resto do código só usa as variáveis prontas e
// fica fácil ligar cada uma ao id/classe correspondente no HTML.
const cardLogin = document.getElementById("card-login");
const cabecalho = document.getElementById("cabecalho");
const molduraFoto = document.getElementById("moldura-foto");
const fotoPerfil = document.getElementById("foto-perfil");
const iconeFoto = document.getElementById("icone-foto");
const fotoReal = document.getElementById("foto-real");
const alcaMover = document.getElementById("alca-mover");
const inputFoto = document.getElementById("input-foto");
const mensagemFoto = document.getElementById("mensagem-foto");
const dicaFoto = document.getElementById("dica-foto");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const botaoLimpar = document.getElementById("btn-limpar");
const areaMensagens = document.getElementById("area-mensagens");

// querySelector busca só o PRIMEIRO elemento que casa com o seletor CSS
// (aqui, a classe ".btn-enviar"). Usamos querySelector neste único
// lugar de propósito, só para o aluno ver os dois jeitos de buscar UM
// elemento (por id ou por seletor CSS) lado a lado no mesmo arquivo.
const botaoEnviar = document.querySelector(".btn-enviar");


// ------------------------------------------------------------
// Bloco 2 — Preenchendo a tela ao carregar (innerHTML e textContent)
// ------------------------------------------------------------
// innerHTML: insere HTML de verdade (título + parágrafo) de uma vez só.
// Repare que a string tem tags <h1> e <p> — é por isso que precisa de
// innerHTML e não de textContent (que trataria tudo como texto puro,
// mostrando as tags na tela em vez de criar os elementos).
cabecalho.innerHTML = "<h1>Acesse sua conta</h1><p>Preencha os campos abaixo</p>";

// textContent: insere só TEXTO, sem interpretar tags. Ideal para o
// aviso da foto, que é só uma frase — não precisamos de nenhuma tag
// HTML aqui dentro, então textContent é a opção mais simples e segura.
mensagemFoto.textContent = "Insira sua foto";


// ------------------------------------------------------------
// Bloco 3 — Foto de perfil: eventos de mouse + classList
// ------------------------------------------------------------
// A classe "visivel" já existe pronta no style.css (controla o
// opacity do balão de mensagem). O JavaScript só liga e desliga essa
// classe — nenhuma cor ou medida é escrita aqui, só o NOME da classe.

// mouseover: o mouse ENTROU na área da foto -> mostra a dica.
fotoPerfil.addEventListener("mouseover", function () {
  mensagemFoto.classList.add("visivel");
});

// mouseout: o mouse SAIU da área da foto -> esconde a dica.
fotoPerfil.addEventListener("mouseout", function () {
  mensagemFoto.classList.remove("visivel");
});


// ------------------------------------------------------------
// Bloco 4 — Escolher uma foto de verdade (input type="file")
// ------------------------------------------------------------
// click: clicar no círculo abre o seletor de arquivos do sistema
// operacional. O <input type="file"> real fica escondido (hidden) no
// HTML — só "acionamos" ele por fora, chamando .click() nele.
fotoPerfil.addEventListener("click", function () {
  inputFoto.click();
});

// change: dispara quando o usuário ESCOLHE um arquivo no seletor (se
// ele cancelar, o evento nem roda — por isso não precisamos checar
// "se veio arquivo" com if). URL.createObjectURL transforma o arquivo
// escolhido em um endereço que o navegador consegue exibir num <img>.
inputFoto.addEventListener("change", function () {
  const arquivo = inputFoto.files[0];
  fotoReal.src = URL.createObjectURL(arquivo);
  fotoReal.classList.add("visivel");
  iconeFoto.classList.add("escondido");
  dicaFoto.remove();
});


// ------------------------------------------------------------
// Bloco 5 — Remover a foto (dblclick na alça, não no círculo)
// ------------------------------------------------------------
// Função separada (resetarFoto) porque duas coisas vão chamá-la: o
// duplo clique aqui embaixo E o botão "Limpar campos" lá no Bloco 9 —
// mesmo espírito de reaproveitar função do projeto final (Encontro 3).
function resetarFoto() {
  fotoReal.classList.remove("visivel");
  fotoReal.src = "";
  iconeFoto.classList.remove("escondido");
  posicaoX = posicaoInicialX;
  posicaoY = posicaoInicialY;
  fotoPerfil.style.left = posicaoX + "px";
  fotoPerfil.style.top = posicaoY + "px";
}

// dblclick fica na ALÇA, não no círculo: um duplo clique sempre dispara
// DOIS eventos "click" antes do "dblclick" (é assim que o navegador
// funciona). Se o dblclick estivesse no círculo, cada duplo clique
// também abriria o seletor de arquivos duas vezes antes de resetar —
// por isso movemos essa ação para a alça, que não tem listener de
// "click" para escolher foto.
alcaMover.addEventListener("dblclick", function () {
  resetarFoto();
});

// A alça fica DENTRO do círculo (Bloco 4 escuta clique nele). Sem esta
// linha, clicar na alça também "borbulharia" até o círculo e abriria
// o seletor de arquivos sem querer. stopPropagation() impede isso.
alcaMover.addEventListener("click", function (event) {
  event.stopPropagation();
});


// ------------------------------------------------------------
// Bloco 6 — Mover a foto: teclado (como no Desafio 04) + mouse
// ------------------------------------------------------------
// posicaoX/posicaoY guardam a posição ATUAL da foto — igual às
// variáveis posicaoX/posicaoY do Desafio 04. Começam centralizadas
// dentro da moldura; guardamos essa posição inicial à parte (const),
// só para o botão Limpar e o duplo clique saberem para onde voltar.
const posicaoInicialX = molduraFoto.clientWidth / 2 - fotoPerfil.offsetWidth / 2;
const posicaoInicialY = 20;
let posicaoX = posicaoInicialX;
let posicaoY = posicaoInicialY;
fotoPerfil.style.left = posicaoX + "px";
fotoPerfil.style.top = posicaoY + "px";

// Quantos pixels a foto anda a cada tecla — mesma ideia do Desafio 04.
const PASSO = 10;

// Move a posição atual em (deltaX, deltaY) e prende o resultado dentro
// da moldura com Math.max/Math.min (igual ao Desafio 04). Uma única
// função reaproveitada pelo teclado E pelo mouse logo abaixo — assim
// as duas formas de mover têm sempre o mesmo limite e o mesmo efeito.
function moverFoto(deltaX, deltaY) {
  const limiteX = molduraFoto.clientWidth - fotoPerfil.offsetWidth;
  const limiteY = molduraFoto.clientHeight - fotoPerfil.offsetHeight;
  posicaoX = Math.max(0, Math.min(posicaoX + deltaX, limiteX));
  posicaoY = Math.max(0, Math.min(posicaoY + deltaY, limiteY));
  fotoPerfil.style.left = posicaoX + "px";
  fotoPerfil.style.top = posicaoY + "px";
}

// O Desafio 04 usa 4 "if" separados (um por seta) para decidir o
// deslocamento. Aqui guardamos o mesmo deslocamento num objeto —
// assim buscamos a direção pela tecla, sem nenhum if/else no evento.
const deslocamentosDasSetas = {
  ArrowRight: { x: PASSO, y: 0 },
  ArrowLeft: { x: -PASSO, y: 0 },
  ArrowDown: { x: 0, y: PASSO },
  ArrowUp: { x: 0, y: -PASSO }
};

// keydown na ALÇA (só funciona com ela focada — clique nela ou Tab).
// Assim as setas movem a foto só quando o aluno realmente quer isso,
// sem atrapalhar o cursor de texto quando ele estiver digitando o
// e-mail ou a senha.
alcaMover.addEventListener("keydown", function (event) {
  event.preventDefault();
  // Se a tecla não for uma seta, o objeto não tem essa chave — "||"
  // entrega um deslocamento de (0, 0) nesse caso, sem precisar de if.
  const deslocamento = deslocamentosDasSetas[event.key] || { x: 0, y: 0 };
  moverFoto(deslocamento.x, deslocamento.y);
});

// mousedown na alça: começa a "escutar" o mouse se movendo pelo
// documento inteiro. mouseup no documento: para de escutar. Ligar e
// desligar um addEventListener (em vez de guardar uma variável tipo
// "arrastando = true/false" e checar com if) é o mesmo truque do
// classList — controla o comportamento sem nenhuma decisão explícita.
function moverComMouse(event) {
  moverFoto(event.movementX, event.movementY);
}

alcaMover.addEventListener("mousedown", function () {
  document.addEventListener("mousemove", moverComMouse);
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", moverComMouse);
});


// ------------------------------------------------------------
// Bloco 7 — Campo de senha: eventos de teclado + style via JS
// ------------------------------------------------------------
// Aqui usamos .style (e não classList) de propósito, para o aluno ver
// os dois jeitos de mudar a aparência no mesmo projeto: classList no
// Bloco 3 (classe pronta do CSS) e style aqui (propriedade direta).
// borderColor é a versão camelCase de "border-color" — em JavaScript,
// nenhuma propriedade de .style pode ter hífen no nome.

// keydown: o momento em que a tecla é PRESSIONADA -> liga o destaque.
// (mesma ideia do carro que acelera enquanto a tecla fica pressionada)
senha.addEventListener("keydown", function () {
  senha.style.borderColor = "#f0a500";
});

// keyup: o momento em que a tecla é SOLTA -> desliga o destaque,
// voltando borderColor para "" (string vazia), que remove o valor
// inline e deixa o CSS do arquivo style.css assumir de novo.
// (o carro para de acelerar quando a tecla é solta)
senha.addEventListener("keyup", function () {
  senha.style.borderColor = "";
});


// ------------------------------------------------------------
// Bloco 8 — Botão Enviar: capturar valores + createElement + appendChild
// ------------------------------------------------------------
// Função nomeada (em vez de function anônima direto no addEventListener)
// só para o nome aparecer no código de forma legível durante a
// correção em aula — o comportamento é o mesmo dos outros blocos.
function enviarLogin() {
  // Capturando o que o usuário digitou nos dois campos. Isso só é
  // lido AQUI DENTRO da função — não nos Blocos 3/7 — porque
  // queremos sempre o valor mais atual, no exato momento do clique.
  const valorEmail = email.value;
  const valorSenha = senha.value;

  // createElement: cria um <li> novo, ainda fora da página (só existe
  // na memória até o appendChild lá embaixo).
  const item = document.createElement("li");
  // De propósito NÃO validamos se o campo está vazio (nada de
  // if (valorEmail === "")): a regra deste exercício é uma ação
  // direta por evento, sem decisão. Validação de formulário fica
  // para uma aula futura.
  item.textContent = "Login recebido: " + valorEmail + " (senha com " + valorSenha.length + " caracteres)";
  item.classList.add("mensagem-sucesso");

  // appendChild: insere o <li> pronto dentro da lista de mensagens.
  // Cada clique em Enviar cria e insere um novo <li> — por isso o
  // Bloco 9 precisa de um forEach (pode haver várias mensagens).
  areaMensagens.appendChild(item);

  // classList: liga um destaque verde na borda do card. Repare que
  // é a MESMA API do Bloco 3 (classList.add), usada agora em outro
  // elemento — reforça que o padrão se repete em qualquer parte da
  // tela, não só na foto.
  cardLogin.classList.add("sucesso");
}

botaoEnviar.addEventListener("click", enviarLogin);


// ------------------------------------------------------------
// Bloco 6 — Botão Limpar: querySelectorAll + removeChild
// ------------------------------------------------------------
function limparCampos() {
  // querySelectorAll retorna TODOS os inputs do formulário (email e
  // senha). forEach percorre a lista e limpa cada um — não importa
  // se há 2 campos ou 10, o código não muda.
  document.querySelectorAll("input").forEach(function (campo) {
    campo.value = "";
  });

  // querySelectorAll de novo, agora nas mensagens já enviadas.
  // removeChild tira cada <li> de dentro do <ul id="area-mensagens">.
  // Usamos removeChild (e não .remove()) aqui de propósito, para o
  // aluno ver as duas formas de remover no mesmo projeto — e este é
  // o único lugar 100% seguro para removeChild "clássico": o forEach
  // só passa por <li> que REALMENTE existem dentro da lista no
  // momento da chamada, então nunca tenta remover algo que já não
  // está mais lá (o que causaria erro).
  document.querySelectorAll("#area-mensagens li").forEach(function (item) {
    areaMensagens.removeChild(item);
  });

  // Desliga o destaque verde do card, desfazendo o que o Bloco 5 ligou.
  cardLogin.classList.remove("sucesso");
}

botaoLimpar.addEventListener("click", limparCampos);

// ============================================================
// Critério de conclusão deste exercício:
// - Passar o mouse sobre a foto mostra "Insira sua foto"; tirar o
//   mouse esconde a mensagem.
// - Dar 2 cliques na foto troca o ícone e remove a dica de texto.
// - Digitar na senha destaca a borda em laranja; soltar a tecla
//   volta a borda ao normal.
// - Enviar cria uma mensagem de sucesso na lista e destaca o card.
// - Limpar apaga os campos, remove as mensagens e tira o destaque.
// - Nenhum if/else foi usado e nenhum erro aparece no console.
// ============================================================
