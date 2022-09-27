/*
JS é Case Sensitive!

Jeitos de acesso ao DOM:
por tag: getElemantByName()
por id: getElementById ()
por nome: getElementsByName ()
por classe: getElementsByClassName ()
por seletor: querySelector()

*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let mensagemOk = false


function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
      txtNome.innerHTML = "Nome Inválido"
      txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".")== -1) {
      txtEmail.innerHTML = "E-mail Inválido"
      txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")

    if (mensagem.value.length >= 500) {
        txtMensagem.innerHTML = "O texto é muito grande, digite no máximo 100 caracteres"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    }else {
        txtMensagem.style.display = "none"
        mensagemOk = true

    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && mensagemOk == true) {
        alert ("Mensagem Enviada Com Sucesso")
    } else {
        alert("Preencha todos os campo corretamente antes de enviar!")
    }
}