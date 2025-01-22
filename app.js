let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    if(nome.value == ""){
        alert('Insira um nome!')
        return ;
    }
    amigos.push(nome.value);
    nome.value = "";
}