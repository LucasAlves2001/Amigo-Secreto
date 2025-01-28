// ARRAY PARA ARMAZENAR OS NOMES DOS PARTICIPANTES
let amigosLista = [];

// FUNÇÃO PARA ADICIONAR UM NOVO AMIGO À LISTA
function adicionarAmigo() {
    let nomeParticipante = document.querySelector("input").value; // Obtém o valor digitado no input

    // VERIFICA SE O USUÁRIO DIGITOU ALGUM NOME
    if (nomeParticipante == "") {
        alert("Por favor, insira um nome."); // Exibe um alerta caso o campo esteja vazio
    } else {
        amigosLista.push(nomeParticipante); // Adiciona o nome ao array amigosLista
        limparCampoAddNomes(); // Chama a função para limpar o campo após inserir
        addNomes(); // Atualiza a lista de amigos na tela
    }
}

// FUNÇÃO PARA LIMPAR O CAMPO DE ENTRADA APÓS INSERIR UM NOME
function limparCampoAddNomes() {
    document.querySelector("input").value = ""; // Deixa o campo de entrada vazio
}

// FUNÇÃO PARA ATUALIZAR A LISTA DE AMIGOS EXIBIDA NA PÁGINA
function addNomes() {
    let listaNome = document.getElementById("listaAmigos"); // Seleciona o elemento da lista

    listaNome.innerHTML = ""; // Apaga os itens da lista antes de adicionar novos

    // PERCORRE O ARRAY E ADICIONA CADA NOME COMO UM ITEM DA LISTA
    for (let i = 0; i < amigosLista.length; i++) {
        let itemLista = document.createElement("li"); // Cria um item <li>
        itemLista.textContent = amigosLista[i]; // Define o nome do amigo como texto do item
        listaNome.appendChild(itemLista); // Adiciona o item na lista do HTML
    }
}

// FUNÇÃO PARA SORTEAR UM NOME DA LISTA
function sortearAmigo() {
    // VERIFICA SE EXISTEM NOMES NA LISTA ANTES DE FAZER O SORTEIO
    if (amigosLista.length == 0) {
        alert("Por favor adicione um amigo"); // Exibe alerta caso a lista esteja vazia
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigosLista.length); // Gera um número aleatório
        let indiceSorteado = amigosLista[indiceAleatorio]; // Seleciona o nome baseado no número aleatório
        
        document.getElementById("listaAmigos").style.display = "none"; // Esconde a lista após o sorteio
        document.getElementById("resultado").innerHTML = `Amigo sorteado: ${indiceSorteado}`; // Exibe o nome do sorteado na tela
    }
}