const AddList = document.getElementById("AddList");
const section = document.getElementById("section");
const linha = document.getElementById("linha");
const Lista = document.getElementById("Lista");
const campoTarefa = document.getElementById("AddText");

let afazeres = [];

const novo = new Audio("assets/sounds/new.m4a");
const hover = new Audio("assets/sounds/hover.m4a");
const click = new Audio("assets/sounds/click.m4a");

// LOCALSTORAGE: mantém as tarefas mesmo depois de fechar o navegador.
function salvarTarefas() {
    localStorage.setItem("afazeres", JSON.stringify(afazeres));
}

// SESSIONSTORAGE: mantém temporariamente o rascunho enquanto esta aba
// estiver aberta. O conteúdo continua disponível após atualizar a página.
function salvarRascunho() {
    sessionStorage.setItem("rascunhoTarefa", campoTarefa.value);
}

function carregarDados() {
    try {
        const dadosSalvos = JSON.parse(localStorage.getItem("afazeres"));
        afazeres = Array.isArray(dadosSalvos) ? dadosSalvos : [];
    } catch (erro) {
        afazeres = [];
        console.error("Não foi possível carregar as tarefas:", erro);
    }

    afazeres.forEach((tarefa) => Listar(tarefa));

    const rascunhoSalvo = sessionStorage.getItem("rascunhoTarefa");
    if (rascunhoSalvo !== null) {
        campoTarefa.value = rascunhoSalvo;
    }

    if (afazeres.length === 0) {
        listaVazia();
    }
}

// Salva o texto digitado temporariamente no SessionStorage.
campoTarefa.addEventListener("input", salvarRascunho);

AddList.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarefa = campoTarefa.value.trim();
    if (!tarefa) return;

    afazeres.push(tarefa);
    salvarTarefas();
    Listar(tarefa);

    campoTarefa.value = "";
    sessionStorage.removeItem("rascunhoTarefa");

    novo.play();
});

function Listar(tarefa) {
    const li = document.createElement("li");
    const form = document.createElement("form");
    const input = document.createElement("input");
    const h3 = document.createElement("h3");

    input.type = "submit";
    input.value = "X";
    input.classList.add("excluir");

    h3.textContent = tarefa;

    Lista.appendChild(li);
    li.appendChild(form);
    form.appendChild(input);
    form.appendChild(h3);

    listaComItens();

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const mesmoItem = afazeres.indexOf(tarefa);
        if (mesmoItem !== -1) {
            afazeres.splice(mesmoItem, 1);
            salvarTarefas();
        }

        li.remove();

        if (Lista.children.length === 0) {
            listaVazia();
        }

        click.play();
    });

    input.addEventListener("mouseenter", () => hover.play());
}

function listaComItens() {
    section.style.display = "grid";
    linha.style.display = "grid";
}

function listaVazia() {
    section.style.display = "none";
    linha.style.display = "none";
}

document.getElementById("submit").addEventListener("mouseenter", () => hover.play());
campoTarefa.addEventListener("click", () => click.play());
campoTarefa.addEventListener("mouseenter", () => hover.play());

// Carrega as tarefas permanentes e o rascunho temporário ao abrir a página.
carregarDados();
