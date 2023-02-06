let sliderElement=document.querySelector('#slider')
let button=document.querySelector('#button')


let valor= document.querySelector('#valor')
let password= document.querySelector('#password')

let containerPassword= document.getElementById('container-password')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha= ''

valor.innerHTML = sliderElement.value

slider.oninput = function(){
    valor.innerHTML= this.value
}

function generatePassword(){
    let pass=''

    for(let i=0, n=charset.length; i<sliderElement.value; ++i){
        pass+= charset.charAt(Math.floor(Math.random() * n))
        
    }
    containerPassword.classList.remove('hide')
    password.innerHTML=pass
    novaSenha=pass
}

function copyPassword(){
    alert('Senha recuperada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
}