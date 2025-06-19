class chave{
    constructor(nome, quantidade){
        this.nome=nome
        this.quantidade=quantidade
    }
    get getNome(){
        return this.nome
    }
    get getQuantidade(){
        return this.quantidade
    }
}

const form = document.getElementById("newChaveForm");

form.addEventListener("submit", function e(event){
    event.preventDefault()

    const newChaveNome = document.getElementById("nomeForm").value
    const newChaveQuantidade = document.getElementById("quantidadeForm").value
    const newChave = new chave(newChaveNome, newChaveQuantidade)

    console.log(newChave.getNome)
});

/*function createChave(){
    const newChaveNome = document.getElementById("nomeForm").value
    const newChaveQuantidade = document.getElementById("quantidadeForm").value

    const newChave = new chave(newChaveNome, newChaveQuantidade)

    console.log(chaveForm)

    return newChave
}*/


function readChave(){

}

function updateChave(){

}

function deleteChave(){

}