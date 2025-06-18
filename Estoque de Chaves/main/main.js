class chave{
    constructor(nome, quantidade){
        this.nome=nome
        this.quantidade=quantidade
        return chave
    }
    getNome(){
        return this.nome
    }
    getQuantidade(){
        return this.quantidade
    }
}

const form = document.getElementById("newChaveForm");

form.addEventListener("submit", function e(event){
    event.preventDefault()
    console.log("formData")
});

//const newChave = new chave(document.getElementById("nomeForm").value, document.getElementById("quantidadeForm").value)

/*function createChave(){

    const newChaveNome = document.getElementById("nomeForm").value
    const newChaveQuantidade = document.getElementById("quantidadeForm").value

    console.log(newChaveNome)

    const chaveForm = new chave(newChaveNome, newChaveQuantidade)

    console.log(chaveForm)

    return chaveForm
}*/


function readChave(){

}

function updateChave(){

}

function deleteChave(){

}