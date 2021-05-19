const senha = $('#senhaLogin')
const email = $('#emailLogin')
const emailEsq = $('#emailEsqueci')
const regexSenha = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/
let botaoLogin = $('#botaoLogin')
let botaoEsqueci = $('#esqueciSenha')
let loginEsqueci = $('#loginEsqueci')
let resultado1=''
let resultado2=''

botaoLogin.on('click', ()=>{ 
    if(!regexEmail.exec(email.val())){
        alert(`O e-mail ${email.val()} não é válido! Prencha no formato: exemplo@exemplo.com`)
        resultado1 = false 
    }
    else{
        console.log(true)
        resultado1 = true
    }
})

botaoLogin.on('click', ()=>{ 
    if ($('#senhaLogin').val().length < 6 ){
        alert('A senha precisa ter no mínimo 6 caracteres')
        resultado2 = false
        
    }
    else if(!regexSenha.exec(senha.val())){
        alert('A senha precisa ter no mínimo 1 letra maiúscula, 1 número e 1 caracter especial')
        resultado2 = false
    }
    else{
        resultado2 = true

    }
})



botaoLogin.on('click', ()=>{ 
    $('form').submit(false)
    if(resultado1 === true && resultado2 === true){
        window.location.href='./home.html'
        email.val('')
        senha.val('')
    }
})


botaoEsqueci.on('click', ()=>{ 
    if(!regexEmail.exec(emailEsq.val())){
        alert(`O e-mail ${emailEsq.val()} não é válido! Prencha no formato: exemplo@exemplo.com`)   
    }
    else{
        alert('Um e-mail com instrução de redefinição de senha foi enviado.')
        location.href = "./index.html";
    }
})

loginEsqueci.on('click', ()=>{
    window.location.href="./esqueciASenha.html"
})