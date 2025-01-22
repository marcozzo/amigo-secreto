let amigos = [];
let listaAmigos = document.querySelector('#listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    if(nome.value == ""){
        alert('Insira um nome!')
        return ;
    }
    amigos.push(nome.value);
    nome.value = "";
    atualizarLista()
}

function atualizarLista() {
    listaAmigos.textContent = '';
    for(i = 0; i < amigos.length; i++){
        let amigo = document.createElement('li');
        amigo.textContent = amigos[i];
        listaAmigos.appendChild(amigo);
    }
}

function sortearAmigo(){
    if(amigos.length < 2){
        return alert('Adicione pelo menos dois amigos');
    }

    let numAleatorio = parseInt(Math.random() * amigos.length);
    resultado.innerHTML = `O amigo sorteado é: ${amigos[numAleatorio]}`;
}