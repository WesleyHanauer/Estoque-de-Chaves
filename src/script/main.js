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
headCol1.innerText = "Chave"
headCol2.innerText = "Quantidade"
headRow.appendChild(headCol1)
headRow.appendChild(headCol2)
table.appendChild(headRow)
const bodyCol1 = []
const bodyCol2 = []

if(localStorage.getItem(0)!=null){
    for (let i = 0; localStorage.getItem(i) != null; i++) {
        const storedData = localStorage.getItem(i);
        const loadedChaveString = (storedData ? JSON.parse(storedData) : {})
        const loadedChave = new chave(loadedChaveString.id, loadedChaveString.nome, loadedChaveString.quantidade)
        const bodyRow = document.createElement("tr")
        bodyCol1[i] = document.createElement("th")
        bodyCol2[i] = document.createElement("th")
        bodyCol1[i].innerText = loadedChave.getNome
        bodyCol2[i].innerText = loadedChave.getQuantidade
        bodyRow.appendChild(bodyCol1[i])
        bodyRow.appendChild(bodyCol2[i])
        table.appendChild(bodyRow)
        console.log(bodyCol1)
    }
}

table.addEventListener("click", function e(event){
    console.log()
})

document.body.append(table);

const form = document.getElementById("newChaveForm")

form.addEventListener("submit", function e(event){
    //event.preventDefault()
    let newChaveId = 0
    for (let i = 0; localStorage.getItem(i)!=null; i++) {
        newChaveId++
        console.log(i)
    }

    const newChave = new chave(newChaveId, document.getElementById("nomeForm").value, document.getElementById("quantidadeForm").value)
    const stringChave = JSON.stringify(newChave)
    localStorage.setItem(newChaveId, stringChave)
})

function updateChave(){

}

function deleteChave(){

}