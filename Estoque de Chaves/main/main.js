console.log("teste")

class chave{
    constructor(nome, quantidade){
        this.nome=nome
        this.quantidade=quantidade
    }
}

const form = document.getElementById("newChaveForm");

form.addEventListener('submit', function e(){
    var formData = new FormData(form);
    console.log(formData)
});


function createChave(){

    const newChaveNome = document.getElementById("nomeForm").value
    const newChaveQuantidade = document.getElementById("quantidadeForm").value

    console.log(newChaveNome)

    const chaveForm = new chave(newChaveNome, newChaveQuantidade)

    console.log(chaveForm)

    //chaveString = JSON.stringify({chave})
}


function readChave(){

}

function updateChave(){

}

function deleteChave(){

}