class chave{
    constructor(id, nome, quantidade){
        this.id=id
        this.nome=nome
        this.quantidade=quantidade
    }
    get getId(){
        return this.id
    }
    get getNome(){
        return this.nome
    }
    get getQuantidade(){
        return this.quantidade
    }
}

//localStorage.clear()
console.log(localStorage.length)

const table = document.createElement("table")
const headRow = document.createElement("tr")
const headCol1 = document.createElement("th")
const headCol2 = document.createElement("th")
headRow.setAttribute("colspan", "2");
headCol1.innerText = "Quantidade"
headCol2.innerText = "Chaves"
headRow.appendChild(headCol1)
headRow.appendChild(headCol2)

if(localStorage.getItem(0)!=null){
    for (let i = 0; localStorage.getItem(i) != null; i++) {
        const storedData = localStorage.getItem(i);
        const loadedChaveString = (storedData ? JSON.parse(storedData) : {})
        const loadedChave = new chave(loadedChaveString.id, loadedChaveString.nome, loadedChaveString.quantidade)
        const bodyRow = document.createElement("tr")
        const bodyCol1 = document.createElement("th")
        const bodyCol2 = document.createElement("th")
        bodyCol1.innerText = loadedChave.getNome
        bodyCol2.innerText = loadedChave.getQuantidade
        bodyRow.appendChild(bodyCol1)
        bodyRow.appendChild(bodyCol2)
        table.appendChild(bodyRow)
        //console.log(loadedChave.getId)
    }
}

table.appendChild(headRow)

//nomeTH.innerText = "Chave"
//quantidadeTH.innerText = "Quantidade"

//table.append(headrow)
//table.append(bodyrow)
//bodyrow.append(nomeTH)
//bodyrow.append(quantidadeTH)


document.body.append(table);

const form = document.getElementById("newChaveForm")

form.addEventListener("submit", function e(event){
    //event.preventDefault()
    let newChaveId = 0
    for (let i = 0; localStorage.getItem(i)!=null; i++) {
        newChaveId++
        console.log(i)
    }


    const newChave = createChave(newChaveId, document.getElementById("nomeForm").value, document.getElementById("quantidadeForm").value)
    const stringChave = JSON.stringify(newChave)
    localStorage.setItem(newChaveId, stringChave)
});

function createChave(id, newChaveNome, newChaveQuantidade){
    return newChave = new chave(id, newChaveNome, newChaveQuantidade)
}

function updateChave(){

}

function deleteChave(){

}

    //const storedData = localStorage.getItem(0);
    //const loadedStock = storedData ? JSON.parse(storedData) : {};