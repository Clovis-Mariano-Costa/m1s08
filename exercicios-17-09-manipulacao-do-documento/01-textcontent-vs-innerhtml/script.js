// ============================================================
// Exercício 1 — textContent x innerHTML (Blocos 1 e 2 da aula)
// Objetivo: ver, na prática, que textContent trata tudo como
// texto puro, enquanto innerHTML interpreta e renderiza tags HTML.
// SEM addEventListener aqui de propósito — isso é o Bloco 3,
// exercício seguinte. Tudo roda direto assim que a página carrega.
//
// Este arquivo só faz sentido junto com o index.html: cada
// elemento buscado aqui já existe escrito lá, com um id. O
// JavaScript não CRIA esses elementos — ele só encontra e lê/altera
// o que já está pronto no HTML.
// ============================================================

// --- Selecionando os elementos que vamos usar ---
// document.getElementById("algum-id") procura, dentro do HTML já
// carregado, a tag que tem exatamente esse id, e devolve uma
// referência a ela. A variável à esquerda não "contém" o texto —
// ela é um PONTEIRO para aquele elemento específico da página.
// Compare cada linha com o index.html:
//   "status-leitura"        -> <p id="status-leitura"> (index.html, linha 16)
//   "resultado-textcontent" -> <div id="resultado-textcontent"> (linha 19)
//   "resultado-innerhtml"   -> <div id="resultado-innerhtml"> (linha 22)
const statusLeitura = document.getElementById("status-leitura");
const resultadoTextContent = document.getElementById("resultado-textcontent");
const resultadoInnerHTML = document.getElementById("resultado-innerhtml");

// ------------------------------------------------------------
// Parte 1 (Bloco 1, slide 24/25): LENDO texto com textContent
// ------------------------------------------------------------
// textContent não serve só para ESCREVER — ele também serve para LER
// o texto que já existe dentro de um elemento. É isso que este bloco
// demonstra, antes de partirmos para a escrita.

// "titulo" -> <h1 id="titulo">Comparando textContent e innerHTML</h1>
// (index.html, linha 12). O texto "Comparando textContent e innerHTML"
// já está escrito no HTML — ninguém digitou ele aqui no JavaScript.
const titulo = document.getElementById("titulo");

// LEITURA: esta linha NÃO atribui nada ao elemento (não tem "=" depois
// de titulo.textContent, tem antes de textoDoTitulo). O que ela faz é
// PERGUNTAR ao elemento "qual é o seu texto agora?" e guardar a
// resposta na variável. Como o <h1> da linha 12 do HTML contém
// "Comparando textContent e innerHTML", é exatamente essa string que
// cai dentro de textoDoTitulo.
const textoDoTitulo = titulo.textContent;

// ESCRITA: aqui sim há uma atribuição de verdade (statusLeitura.textContent = ...).
// A linha concatena (gruda com "+") três pedaços de string:
//   1) 'O textContent do título é: "'  -> texto fixo, digitado à mão, terminando com um " literal
//   2) textoDoTitulo                    -> o valor LIDO na linha de cima ("Comparando textContent e innerHTML")
//   3) '"'                              -> outro " literal, só para fechar a citação
// O resultado final vira o novo conteúdo do <p id="status-leitura">
// (linha 16 do HTML), substituindo o texto original "Aguardando...".
// Aspas SIMPLES foram usadas por fora de propósito: como o texto
// precisa ter um caractere de aspas DUPLAS no meio, se a string
// externa também usasse aspas duplas, o JavaScript entenderia a
// primeira aspa dupla interna como o fim da string, e o resto
// quebraria o código.
statusLeitura.textContent = 'O textContent do título é: "' + textoDoTitulo + '"';

// Guardamos aqui, numa única variável, a string que será usada nos
// DOIS testes seguintes (Parte 2 e Parte 3). Usar a MESMA string nos
// dois é o que torna a comparação justa: a única coisa que muda é a
// propriedade usada (textContent vs innerHTML), não o conteúdo.
const mensagemComTag = "Parabéns, <strong>você acertou!</strong>";

// ------------------------------------------------------------
// Parte 2 (Bloco 1): ALTERANDO com textContent
// ------------------------------------------------------------
// Ao atribuir uma string a .textContent, o navegador cria UM ÚNICO
// nó de texto puro com essa string inteira — sem interpretar nada
// do que está entre "<" e ">". Por isso a tag <strong> vai aparecer
// ESCRITA na tela, como texto comum, e não em negrito.
// Alvo desta linha: <div id="resultado-textcontent"> (index.html, linha 19).
// O texto original dessa div ("Resultado aparece aqui.") é
// completamente SUBSTITUÍDO pelo valor de mensagemComTag.
resultadoTextContent.textContent = mensagemComTag;

// ------------------------------------------------------------
// Parte 3 (Bloco 2, slide 26 a 29): ALTERANDO com innerHTML
// ------------------------------------------------------------
// Ao atribuir a mesma string a .innerHTML, o navegador manda o texto
// para o parser de HTML (o mesmo mecanismo que lê o arquivo index.html
// ao carregar a página). O parser reconhece a tag <strong> e cria um
// elemento <strong> DE VERDADE dentro da div — por isso "você acertou!"
// aparece em negrito real. Esse negrito não vem de nenhum CSS deste
// projeto: é o estilo PADRÃO que todo navegador já aplica à tag <strong>.
// Alvo desta linha: <div id="resultado-innerhtml"> (index.html, linha 22).
resultadoInnerHTML.innerHTML = mensagemComTag;

// Nota sobre o visual (style.css): as duas divs acima usam a classe
// "caixa-resultado" (index.html, linhas 19 e 22), que no style.css
// define a borda tracejada e o fundo claro. Esse visual é igual nas
// duas caixas — a ÚNICA diferença entre elas é o conteúdo interno,
// que vem das duas linhas de JavaScript acima.

// ============================================================
// Por que isso importa (nota de segurança, slide 27):
// Nunca use innerHTML diretamente com um texto DIGITADO PELO
// USUÁRIO sem validação — ele pode conter marcação HTML não
// confiável. O exemplo abaixo é só para você VER o risco,
// sem executar nada perigoso de verdade:
// ============================================================

// Exemplo (comentado) do tipo de entrada que NÃO deveria ir
// direto para innerHTML sem tratamento:
// const entradaDoUsuario = "<img src=x onerror=\"alert('inseguro')\">";
// elemento.innerHTML = entradaDoUsuario; // <- evite isso! O navegador
// executaria o onerror, porque innerHTML interpreta HTML de verdade.
//
// Para dados vindos do usuário, prefira sempre textContent:
// elemento.textContent = entradaDoUsuario; // seguro: vira texto puro,
// os caracteres <, >, " nunca viram tags ou atributos de verdade.

// ============================================================
// Critério de conclusão deste exercício:
// - Você consegue explicar por que a tag <strong> aparece
//   literalmente com textContent, mas é renderizada com innerHTML.
// - Você sabe dizer quando usar cada um dos dois na prática.
// - Você reparou que NENHUM clique foi necessário: tudo rodou ao
//   carregar a página, porque ainda não usamos addEventListener.
// - Você sabe apontar, no index.html, a linha exata de onde cada
//   elemento usado aqui (titulo, statusLeitura, as duas divs) vem.
// ============================================================
