let p = document.createElement('p');

async function Exibir() {
    let cep = document.getElementById("cep").value;
    
    const dados = await buscarDados(cep); 

    if (dados && !dados.erro) {
        p.textContent = `Rua: ${dados.logradouro}, Bairro: ${dados.bairro} - ${dados.localidade}`
    } else {
        p.innerText = "CEP não encontrado ou inválido.";
    }

    document.body.appendChild(p);
}

async function buscarDados(cep) {
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status}`);
        }

        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Falha: ', erro);
        return null;
    }
}