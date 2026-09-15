# M1S08 — JavaScript, DOM e Eventos

Repositório de apoio da **Semana 8** do Módulo 1 do curso **Desenvolvimento Front-End [React] T4**,
turma do Prof. Lisandro Faria Pinheiro (SENAI/SC).

Tema da semana: **JavaScript básico com HTML e CSS — DOM, manipulação e eventos.**

## Ementa da semana

- O que é o DOM e introdução à manipulação de elementos
- Manipulação de documento HTML
- Eventos e interação: mouse e teclado
- Selecionando elementos (queries: `getElementById`, `querySelector`, `querySelectorAll`)

## Datas dos encontros

| Data | Encontro | Tema central |
| --- | --- | --- |
| 15/09/2026 (terça) | Encontro 1 | DOM e seletores |
| 17/09/2026 (quinta) | Encontro 2 | Manipulação do documento |
| 18/09/2026 (sexta) | Encontro 3 | Eventos e interação |

Um único projeto evolui ao longo dos três encontros: o **Painel Interativo de Tarefas** — uma lista de
tarefas que começa sendo apenas selecionada e lida (Encontro 1), passa a ser alterada, criada e
removida (Encontro 2) e termina respondendo a clique, duplo clique, teclado e à tecla Enter
(Encontro 3).

## O que este repositório aborda

Três pastas de exercícios prontos, uma por encontro, com HTML + CSS + JavaScript comentados linha a
linha, prontos para rodar e servir de modelo em aula:

- [`exercicios-15-09-dom-e-selecao/`](exercicios-15-09-dom-e-selecao/) — DOM, `getElementById`,
  `querySelector`, `querySelectorAll`.
- [`exercicios-17-09-manipulacao-do-documento/`](exercicios-17-09-manipulacao-do-documento/) —
  `textContent`, `innerHTML`, `style`, `classList`, `createElement`, `appendChild`, `remove`,
  `removeChild`.
- [`exercicios-18-09-eventos-e-interacao/`](exercicios-18-09-eventos-e-interacao/) —
  `addEventListener`, eventos de mouse e teclado, `event.key`, e o projeto final integrado.

## Como clonar este repositório

Pré-requisito: ter o [Git](https://git-scm.com/downloads) instalado.

```bash
# 1) Clone o repositório
git clone https://github.com/Desenvolvedor-FronEnd-React-T4/m1s08.git

# 2) Entre na pasta do projeto
cd m1s08

# 3) (Opcional) Abra no VS Code
code .
```

Se você não tem acesso de escrita ao repositório original, faça um **fork** pelo GitHub antes de
clonar, e depois clone a sua cópia (substitua `SEU-USUARIO` pelo seu usuário do GitHub):

```bash
git clone https://github.com/SEU-USUARIO/m1s08.git
```

## Como rodar os exercícios

Todos os exercícios são páginas estáticas (HTML + CSS + JS puro), sem necessidade de instalar
dependências:

1. Abra a pasta do exercício desejado no VS Code.
2. Clique com o botão direito no `index.html` e escolha **"Open with Live Server"** (extensão
   [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VS Code)
   — ou simplesmente dê duplo clique no arquivo para abrir direto no navegador.
3. Abra o **DevTools** do navegador (tecla `F12`) e deixe a aba **Console** visível: vários exercícios
   do Encontro 1 mostram o resultado ali, além de mudanças visíveis na página.

## Estrutura do repositório

```
m1s08/
├── README.md
├── exercicios-15-09-dom-e-selecao/
│   ├── README.md
│   ├── 01-primeiras-selecoes/
│   ├── 02-query-vs-queryall/
│   ├── 03-corrigindo-seletores/
│   └── 04-desafio-catalogo-bicicletas/
├── exercicios-17-09-manipulacao-do-documento/
│   ├── README.md
│   ├── 01-textcontent-vs-innerhtml/
│   ├── 02-estilos-e-classlist/
│   ├── 03-criar-e-inserir-itens/
│   └── 04-remover-itens-com-seguranca/
└── exercicios-18-09-eventos-e-interacao/
    ├── README.md
    ├── 01-capturando-o-input/
    ├── 02-eventos-de-mouse/
    ├── 03-eventos-de-teclado/
    ├── 04-desafio-mover-a-caixa/
    └── 05-projeto-final-painel-de-tarefas/
```

## Créditos

Material didático elaborado por **Lisandro Faria Pinheiro**, professor da turma
Desenvolvimento Front-End [React] T4 — SENAI/SC, Módulo 1, Semana 8.
