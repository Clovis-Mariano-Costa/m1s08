// Selecionando elementos pelo id
let titulo = document.getElementById("titulo")
let mensagem = document.getElementById("mensagem")

// Exibindo no console para confirmar que funcionou
console.log(titulo)    // <h1 id="titulo">Bem-vindo ao site!</h1>
console.log(mensagem)  // <p id="mensagem">Esta é uma mensagem padrão.</p>

// Alterando o texto (veremos mais no Dia 02!)
titulo.textContent = "Olá, turma!"
mensagem.textContent = "Agora o JavaScript controla esta página."
