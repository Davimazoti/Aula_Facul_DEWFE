const lista = [];

function enviarDados(){

    let nomeCidade = document.querySelector("#nomeCidade").value;
    let pais = document.querySelector("#pais").value;

    if (nomeCidade === "" || pais === "") {
        alert("Preencha todos os campos!");
        return; 
    }

    const novoObjeto = {
        nomeCidade: nomeCidade,
        pais: pais
    };

    lista.push(novoObjeto);  
    event.preventDefault()
    console.log(lista);
    
    document.getElementById("nomeCidade").value = "";
    document.getElementById("pais").value = "";
}


function exibirDados(){

    let listaUl = document.querySelector("#exibir");
    listaUl.innerHTML = ""

    lista.forEach(item => {

        const novoItem = document.createElement("li")

        novoItem.innerHTML += `Cidade: ${item.nomeCidade} | País: ${item.pais} <br> 
        <div class="internacional"><input type="checkbox"><label>Internacional</label></div>
        <button type="button" onclick="riscar()">Já visitei</button>
        `;
        novoItem.classList.add("item-cidade");

        listaUl.appendChild(novoItem);
    })
}

function riscar(){
    
}

