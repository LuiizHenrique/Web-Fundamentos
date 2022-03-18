let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "100%"
email.style.width= "100%"

function validaNome () {
  let txtNome = document.querySelector("#txtNome")                                                                                                                   
if(nome.value.length< 3){
txtNome.innerHTML = 'nome invalido'
txtNome.style.color = 'red'
} else {
  txtNome.innerHTML = "Nome Válido"                                                                                                             
  txtNome.style.color = 'green'
}        
}
function validaEmail(){
   let txtEmail = document.querySelector('#txtEmail')     

   if (email.value.indexof('@') == -1|| email.value.indexof(".") == -1){
   txtEmail.innerHTML = 'E-mail Invalido'
   txtEmail.style.color = 'red'

   }else{
   txtEmail.innerHTML = 'E-mail Invalido'
   txtEmail.style.color = 'green'
   emailOk = true
   }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >= 100) {
     txtAssunto.innerHTML = 'Conte-em Outras Palavras'
     txtAssunto.style.color = 'red'
     txtAssunto.style.display = 'block'
  } else {
     txtAssunto.style.display = 'none'
     assuntoOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
     alert ('Obrigado Por Compartilhar!')
  } else {
     alert ('Excesso de Letras tente de outra forma ...')
  }
}

function mapaZoom() {
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal() {
  mapa.style.width = '400px'
  mapa.style.height = '250px'
}
