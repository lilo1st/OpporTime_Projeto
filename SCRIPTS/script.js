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
    const rascunho = {
        titulo: campoOportuniadade ? campoOportuniadade.value: "",
        descricao: campoDescricao ? campoDescricao.value: "",
        categoria: campoCategoria ? campoCategoria.value: "",
        data: campoData ? campoData.value: ""
    };
    sessionStorage.setItem("rascunho", JSON.stringify(rascunho))
}
campoOportuniadade.addEventListener("input", salvarRascunho);
campoDescricao.addEventListener("input", salvarRascunho);
campoCategoria.addEventListener("input", salvarRascunho);
campoData.addEventListener("input", salvarRascunho);


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

    const rascunhoSalvo = JSON.parse(sessionStorage.getItem("rascunho"));
    if (rascunhoSalvo !== null) {
        try {
            campoOportuniadade.value = rascunhoSalvo.titulo
            campoDescricao.value = rascunhoSalvo.descricao
            campoCategoria.value = rascunhoSalvo.categoria
            campoData.value = rascunhoSalvo.data
        } catch (e) {
            console.error("Erro ao carregar o rascunho:", e);
        }
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
        titulo: campoOportuniadade.value,
        descricao: campoDescricao ? campoDescricao.value.trim() : "",
        categoria: campoCategoria ? campoCategoria.value : "Geral",
        data: campoData ? campoData.value : ""
    };

    oportunidades.push(novaOportunidade);
    salvarOportunidade();
    Listar(novaOportunidade);

    campoOportuniadade.value = ""
    campoDescricao.value = ""
    campoCategoria.value = ""
    campoData.value = ""

    sessionStorage.removeItem("rascunho");

    audioNovo.play();
});

//ACRESCENTA A oportunidade NA LISTA
function Listar(oportunidade) {
    const li = document.createElement("li");
    const form = document.createElement("form");
    const input = document.createElement("input");
    const h3 = document.createElement("h3");
    const spanCategoria = document.createElement("span");
    const spanData = document.createElement("span");
    const descricao = document.createElement("button");
    const hr = document.createElement("hr")
    const divDescricao = document.createElement("div")
    const pDescricao = document.createElement("p")
    
    input.type = "submit";
    input.value = "X";
    input.classList.add("excluir");
    
    descricao.type = "button"
    descricao.textContent = "▶ Descrição"

    //ADICIONA A DIV DE DETALHES QUANDO CLICADO
    descricao.addEventListener("click", () => {
        if (descricao.textContent === "▶ Descrição") {
            descricao.textContent = "▼ Descrição";
            form.style = "row-gap: clamp(0.5rem,0.6vw,1.5rem)"
            form.appendChild(hr)
            form.appendChild(divDescricao)
            descricao.addEventListener("mouseenter", () => audioHover.play());
            descricao.addEventListener("click", () => audioClick.play());

        } else {
            descricao.textContent = "▶ Descrição";
            form.style = "row-gap: 0"
            hr.remove()
            divDescricao.remove()
        }
     });
    
     
     h3.textContent = oportunidade.titulo;
     spanCategoria.textContent = `Categoria: ${oportunidade.categoria}`;
     spanData.textContent = oportunidade.data ? `Data: ${oportunidade.data.split('-').reverse().join('/')}` : '';
     pDescricao.textContent = oportunidade.descricao
    
    Lista.appendChild(li);
    li.appendChild(form);
    form.appendChild(input);
    form.appendChild(h3);
    form.appendChild(spanCategoria);
    form.appendChild(spanData);
    form.appendChild(descricao)
    divDescricao.appendChild(pDescricao)

    
    
    listaComItens();
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
campoCategoria.addEventListener("click", () => audioClick.play());
campoData.addEventListener("click", () => audioClick.play());
campoDescricao.addEventListener("click", () => audioClick.play());

campoOportuniadade.addEventListener("mouseenter", () => audioHover.play());
campoCategoria.addEventListener("mouseenter", () => audioHover.play());
campoData.addEventListener("mouseenter", () => audioHover.play());
campoDescricao.addEventListener("mouseenter", () => audioHover.play());



carregarDados();