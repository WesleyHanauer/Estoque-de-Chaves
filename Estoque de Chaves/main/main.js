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

console.log(localStorage.length)

const form = document.getElementById("newChaveForm")

if(localStorage.getItem(0)!=null){
    const storedData = []
    const loadedChave = []
    for (let i = 0; localStorage.getItem(i) != null; i++) {
        storedData[i] = localStorage.getItem(i);
        loadedChave[i] = storedData[i] ? JSON.parse(storedData[i]) : {};
    }
    console.log(loadedChave)
}

form.addEventListener("submit", function e(event){
    event.preventDefault()
    const newChaveId = 0
    for (let i = 0; localStorage.getItem(i) != null; i++) {
        if(i > 0 && localStorage.getItem(i)==null){
            newChaveId = i-1
        }
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

    //const storedData = localStorage.getItem("chaves");
    //const loadedStock = storedData ? JSON.parse(storedData) : {};