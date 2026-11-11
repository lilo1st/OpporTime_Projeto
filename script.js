let AddList = document.getElementById("AddList"); 
let section = document.getElementById("section"); 
let linha = document.getElementById("linha");

let afazeres = []; 

let novo = new Audio('assets/sounds/new.m4a');
let hover = new Audio('assets/sounds/hover.m4a')
let click = new Audio('assets/sounds/click.m4a')

AddList.addEventListener("submit", (e) => { 
    e.preventDefault();
    let tarefa = document.getElementById("AddText").value; 
    
    if (!tarefa) return;
    
    afazeres.push(tarefa); 
    Listar(tarefa) ;
    localStorage.setItem("afazeres", JSON.stringify(afazeres));
    novo.play()
}); 

function Listar(tarefa) { 
    let Lista = document.getElementById("Lista"); 

    const li = document.createElement("li"); 

    const form = document.createElement("form");

    const input = document.createElement("input"); 
    input.type = "submit"; 
    input.value = "X"; 
    input.id = "excluir"
    
    const h3 = document.createElement("h3"); 
    h3.textContent = tarefa; 
    
    Lista.appendChild(li); 
    li.appendChild(form); 
    form.appendChild(input); 
    form.appendChild(h3); 
    
    listaComItens(); 
    
    
    form.addEventListener("submit", (e) => { 
        e.preventDefault(); 

        let mesmoItem = afazeres.indexOf(h3.textContent);

        if (mesmoItem !== -1) {
            afazeres.splice(mesmoItem, 1);
            localStorage.setItem("afazeres", JSON.stringify(afazeres))
        };

        li.remove(); 
        if (Lista.children.length == 0) { 
            listaVazia() 
        };

        click.play()
    });

    document.getElementById("excluir").addEventListener("mouseenter", (e) => {
        hover.play()
    })
} 

function listaComItens() { 
    section.style.display = "grid"; 
    linha.style.display = "grid"; 
} 

function listaVazia() { 
    section.style.display = "none"; 
    linha.style.display = "none"; 

}

function carregarLocal() {
    const dados = JSON.parse(localStorage.getItem("afazeres")) || [];
    afazeres = dados;
    afazeres.forEach(tarefa => Listar(tarefa));
}

document.getElementById("submit").addEventListener("mouseenter", (e) => {
    hover.play()
})
    
document.getElementById("AddText").addEventListener("click", (e) => {
    click.play()
})
    
document.getElementById("AddText").addEventListener("mouseenter", (e) => {
    hover.play()
})

carregarLocal()