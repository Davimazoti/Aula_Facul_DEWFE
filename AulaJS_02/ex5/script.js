let listaNome = [];
let p = document.createElement('p')


function adicionar(){
    let nomes = document.getElementById("nomes").value;
    listaNome = nomes.split(",");
    console.log(listaNome);
    p.textContent= String(listaNome);
    document.body.appendChild(p);   
}

function filtrar(){
    let h2 = document.createElement('h2')
    h2.textContent = "Nomes Filtrado"
    document.body.appendChild(h2);
    for(let i=0; i < listaNome.length; i++){
        let nome = listaNome[i];
        if(nome.trim().length <= 5){
            let div = document.createElement('div');
            div.textContent = nome+" / ";
            document.body.appendChild(div); 
            div.style.display = 'inline';
        }
    }
}