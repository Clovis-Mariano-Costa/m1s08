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

const botaoenviar = document.getElementById("btn-enviar");

cabecalho.innerHTML = "h1> Acesse sua conta </h1> <p> Preencha os campos abaixo. </p>";

mensagemFoto.textContent = "Insira sua foto.";

// mouseover: o mouse ENTROU na área da foto -> mostra a dica.
fotoPerfil.addEventListener("mouseover", function () {
  mensagemFoto.classList.add("visivel");
});

// mouseout: o mouse SAIU da área da foto -> esconde a dica.
fotoPerfil.addEventListener("mouseout", function () {
  mensagemFoto.classList.remove("visivel");
});
inputFoto.addEventListener("change", function () {
  const arquivo = inputFoto.files[0];
  fotoReal.src = URL.createObjectURL(arquivo);
  fotoReal.classList.add("visivel");
  iconeFoto.classList.add("escondido");
  dicaFoto.remove();
});

function resetarFoto() {
  fotoReal.classList.remove("visivel");
  fotoReal.src = "";
  iconeFoto.classList.remove("escondido");
  posicaoX = posicaoInicialX;
  posicaoY = posicaoInicialY;
  fotoPerfil.style.left = posicaoX + "px";
  fotoPerfil.style.top = posicaoY + "px";
}

alcaMover.addEventListener("dblclick", function () {
  resetarFoto();
});

const posicaoInicialX = molduraFoto.clientWidth / 2 - fotoPerfil.offsetWidth / 2;
const posicaoInicialY = 20;
let posicaoX = posicaoInicialX;
let posicaoY = posicaoInicialY;
fotoPerfil.style.left = posicaoX + "px";
fotoPerfil.style.top = posicaoY + "px";

const deslocamentosDasSetas = {
  ArrowRight: { x: PASSO, y: 0 },
  ArrowLeft: { x: -PASSO, y: 0 },
  ArrowDown: { x: 0, y: PASSO },
  ArrowUp: { x: 0, y: -PASSO }
};

alcaMover.addEventListener("keydown", function (event) {
  event.preventDefault();
  // Se a tecla não for uma seta, o objeto não tem essa chave — "||"
  // entrega um deslocamento de (0, 0) nesse caso, sem precisar de if.
  const deslocamento = deslocamentosDasSetas[event.key] || { x: 0, y: 0 };
  moverFoto(deslocamento.x, deslocamento.y);
});

function moverComMouse(event) {
  moverFoto(event.movementX, event.movementY);
}

alcaMover.addEventListener("mousedown", function () {
  document.addEventListener("mousemove", moverComMouse);
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", moverComMouse);
});

senha.addEventListener("keydown", function () {
  senha.style.borderColor = "#f0a500";
});

senha.addEventListener("keyup", function () {
  senha.style.borderColor = "";
});

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


