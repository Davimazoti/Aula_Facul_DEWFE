let p = document.createElement('p');

async function Exibir(){
    let livro = document.getElementById("livro").value;
    
    const dados = await buscarDados(livro); 

    if (dados && !dados.erro) {
        const primeiroLivro = dados.docs[0];
        const titulo = primeiroLivro.title;
        const autor = primeiroLivro.author_name ? primeiroLivro.author_name[0] : "Autor desconhecido";

        p.textContent = `Resultado: ${titulo} - Autor: ${autor}`;
    } else {
        p.innerText = "Livro não encontrado ou inválido.";
    }
    document.body.appendChild(p);
}


async function buscarDados(livro) {
    try {
        const resposta = await fetch(`https://openlibrary.org/search.json?title=${livro}`);

        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status}`);
        }

        const dados = await resposta.json();
        console.log(dados)
        return dados;
    } catch (erro) {
        console.error('Falha: ', erro);
        return null;
    }
}