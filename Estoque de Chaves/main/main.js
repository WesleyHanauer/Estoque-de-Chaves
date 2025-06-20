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

console.log(localStorage.getItem(5))

console.log(localStorage.length)

const form = document.getElementById("newChaveForm")

if(localStorage.getItem(0)!=null){
    for (let i = 0; localStorage.getItem(i) != null; i++) {
        const storedData = localStorage.getItem(i);
        const loadedChave = storedData ? JSON.parse(storedData) : {};
    }
}

form.addEventListener("submit", function e(event){
    event.preventDefault()
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

    const storedData = localStorage.getItem(0);
    const loadedStock = storedData ? JSON.parse(storedData) : {};