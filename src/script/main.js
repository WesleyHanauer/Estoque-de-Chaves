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

document.getElementById("clearButton").addEventListener("click", function e(event){
    localStorage.clear()
})

const table = document.createElement("table")
const headRow = document.createElement("tr")
const headCol1 = document.createElement("th")
const headCol2 = document.createElement("th")
headRow.setAttribute("colspan", "2")
headCol1.innerText = "Chave"
headCol2.innerText = "Quantidade"
headRow.appendChild(headCol1)
headRow.appendChild(headCol2)
table.appendChild(headRow)
const bodyCol1 = []
const bodyCol2 = []
var selectedChaveId = 0
if(localStorage.getItem(0)!=null){
    var forStartingIndex = localStorage.length
    for (let i = 1; i < forStartingIndex; i++){
        const storedData = localStorage.getItem(i)
        const loadedChaveString = (storedData ? JSON.parse(storedData) : {})
        const loadedChave = new chave(loadedChaveString.id, loadedChaveString.nome, loadedChaveString.quantidade)
        if(loadedChave.getId!=i){
            forStartingIndex++
        }else{
            const bodyRow = document.createElement("tr")
            bodyCol1[i] = document.createElement("th")
            bodyCol2[i] = document.createElement("th")
            bodyCol1[i].innerText = loadedChave.getNome
            bodyCol2[i].innerText = loadedChave.getQuantidade
            bodyRow.appendChild(bodyCol1[i])
            bodyRow.appendChild(bodyCol2[i])
            table.appendChild(bodyRow)
            bodyCol1[i].addEventListener("click", function e(event){
                selectedChaveId = loadedChave.getId
            })
            bodyCol2[i].addEventListener("click", function e(event){
                selectedChaveId = loadedChave.getId
            })
        }
        
    }
}else{
    localStorage.setItem(0, null)    
}

document.getElementById("dashboard").append(table)

/*document.body.addEventListener("click", function e(event){
    selectedChaveId = 0
    console.log(selectedChaveId)
})*/

const confirmarButton = document.getElementById("confirmarButton")

confirmarButton.addEventListener("click", function e(event){
    let newChaveId = 1
    for (let i = 1; localStorage.getItem(i)!=null; i++) {
        const storedData = localStorage.getItem(i)
        const loadedChaveString = (storedData ? JSON.parse(storedData) : {})
        const loadedChave = new chave(loadedChaveString.id, loadedChaveString.nome, loadedChaveString.quantidade)
        if(loadedChave.getId==i){
            newChaveId++
        }
    }
    if(document.getElementById("nomeForm").value!="" && document.getElementById("quantidadeForm").value !=""){
        const newChave = new chave(newChaveId, document.getElementById("nomeForm").value, document.getElementById("quantidadeForm").value)
        const stringChave = JSON.stringify(newChave)
        localStorage.setItem(newChaveId, stringChave)
    }else{
        alert("Nome e quantidade devem estar prenchidos!")
    }
})

document.getElementById("deletarButton").addEventListener("click", function e(event){
    if(selectedChaveId!=0){
        const storedData = localStorage.getItem(selectedChaveId)
        const loadedChaveString = (storedData ? JSON.parse(storedData) : {})
        const loadedChave = new chave(loadedChaveString.id, loadedChaveString.nome, loadedChaveString.quantidade)
        if(confirm("Tem certeza que deseja deletar a chave "+loadedChave.getNome+"?")){
            localStorage.removeItem(selectedChaveId)
        }
        selectedChaveId = 0
    }
})

document.getElementById("atualizarButton").addEventListener("click", function e(event){
    if(selectedChaveId!=0){
        const storedData = localStorage.getItem(selectedChaveId)
        const loadedChaveString = (storedData ? JSON.parse(storedData) : {})
        const loadedChave = new chave(loadedChaveString.id, loadedChaveString.nome, loadedChaveString.quantidade)
        loadedChave.quantidade = document.getElementById("quantidadeForm").value
        localStorage.setItem(selectedChaveId, JSON.stringify(loadedChave))
        selectedChaveId = 0
    }
})