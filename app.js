let amigos = [];
let listaAmigos = document.querySelector('#listaAmigos')

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