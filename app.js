//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
function adicionarAmigo() {
    const input = document.getElementById("amigo").value;
    if (input.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
        amigos.push(input);
        document.getElementById("amigo").value = "";
        listarAmigos();

    }
    function listarAmigos() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        for (let i = 0; i < amigos.length; i++) {
            const li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }
    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
            return;
        }
        let indice= Math.floor(Math.random() * amigos.length);
        const sorteado = amigos[indice];
        document.getElementById("resultado").innerHTML = `<li>${sorteado} foi sorteado!</li>`;
    }


