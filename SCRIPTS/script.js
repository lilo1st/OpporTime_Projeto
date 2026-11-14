const AddList = document.getElementById("AddList");
const section = document.getElementById("section");
const linha = document.getElementById("linha");
const Lista = document.getElementById("Lista");
const campoOportuniadade = document.getElementById("AddText");
const campoDescricao = document.getElementById("AddDescricao"); 
const campoCategoria = document.getElementById("AddCategoria");
const campoData = document.getElementById("AddData");

let oportunidades = [];

const audioNovo = new Audio("ASSETS/SOUNDS/new.m4a");
const audioHover = new Audio("ASSETS/SOUNDS/hover.m4a");
const audioClick = new Audio("ASSETS/SOUNDS/click.m4a");

//SALVA A OPORTUNIDADE NO LOCALSTORAGE
function salvarOportunidade() {
    localStorage.setItem("oportunidade", JSON.stringify(oportunidades));
}

// SALVA O RASCUNHO NO SESSIONSTORAGE
function salvarRascunho() {
    sessionStorage.setItem("rascunhoOportunidade", campoOportuniadade.value);
}
campoOportuniadade.addEventListener("input", salvarRascunho);

//PEGA AS OPORTUNIDADE DO LOCALSTORAGE
function carregarDados() {
    try {
        const dadosSalvos = JSON.parse(localStorage.getItem("oportunidade"));
        oportunidades = Array.isArray(dadosSalvos) ? dadosSalvos : [];
    } catch (erro) {
        oportunidades = [];
        console.error("Não foi possível carregar as oportunidade:", erro);
    }

    oportunidades.forEach((oportunidade) => Listar(oportunidade));

    const rascunhoSalvo = sessionStorage.getItem("rascunhoOportunidade");
    if (rascunhoSalvo !== null) {
        campoOportuniadade.value = rascunhoSalvo;
    }

    if (oportunidades.length === 0) {
        listaVazia();
    }
}

//ADICIONA UMA AÇÃO NO SUBMIT
AddList.addEventListener("submit", (e) => {
    e.preventDefault();

    const oportunidade = campoOportuniadade.value.trim();
    if (!oportunidade) return;

    const novaOportunidade = {
        titulo: campoOportuniadade,
        descricao: campoDescricao ? campoDescricao.value.trim() : "",
        categoria: campoCategoria ? campoCategoria.value : "Geral",
        data: campoData ? campoData.value : ""
    };

    oportunidades.push(novaOportunidade);
    salvarOportunidade();
    Listar(oportunidade);

    campoTarefa.value = "";
    if (campoDescricao) campoDescricao.value = "";
    if (campoData) campoData.value = "";
    sessionStorage.removeItem("rascunhoOportunidade");

    campoOportuniadade.value = "";
    sessionStorage.removeItem("rascunhoOportunidade");

    audioNovo.play();
});

//ACRESCENTA A oportunidade NA LISTA
function Listar(oportunidade) {
    const li = document.createElement("li");
    const form = document.createElement("form");
    const input = document.createElement("input");
    const h3 = document.createElement("h3");
    const pDescricao = document.createElement("p");
    const spanCategoria = document.createElement("span");
    const spanData = document.createElement("span");

    input.type = "submit";
    input.value = "X";
    input.classList.add("excluir");

    h3.textContent = oportunidade;
    pDescricao.textContent = oportunidade.descricao;
    spanCategoria.textContent = `Categoria: ${oportunidade.categoria}`;
    spanData.textContent = oportunidade.data ? `Data: ${oportunidade.data.split('-').reverse().join('/')}` : '';

    Lista.appendChild(li);
    li.appendChild(form);
    form.appendChild(input);
    form.appendChild(h3);

    listaComItens();

    //ADICIONA UMA AÇÃO NO SUBMIT DA oportunidade EM PARTICULAR
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const mesmoItem = oportunidades.indexOf(oportunidade);
        if (mesmoItem !== -1) {
            oportunidades.splice(mesmoItem, 1);
            salvarOportunidade();
        }

        li.remove();

        if (Lista.children.length === 0) {
            listaVazia();
        }

        audioClick.play();
    });

    input.addEventListener("mouseenter", () => audioHover.play());
}

function listaComItens() {
    section.style.display = "grid";
    linha.style.display = "grid";
}

function listaVazia() {
    section.style.display = "none";
    linha.style.display = "none";
}

//QUANDO O MOUSE PASSAR SOBRE O SUBMIT, TOCA O EFEITO DE HOVER
document.getElementById("submit").addEventListener("mouseenter", () => audioHover.play());

//QUANDO O MOUSE PASSAR SOBRE O SUBMIT OU CLICA NO SUBMIT, TOCA O RESPECTIVO EFEITO
campoOportuniadade.addEventListener("click", () => audioClick.play());
campoOportuniadade.addEventListener("mouseenter", () => audioHover.play());

carregarDados();