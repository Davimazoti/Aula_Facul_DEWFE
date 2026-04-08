function caucularFatorial(){
    let numero = parseFloat(document.getElementById("numero").value);
    let cont = 1
    let resposta = cont;
    while(cont <= numero){
        let div = document.createElement('div');
        resposta = resposta * (cont);
        div.textContent=`${cont} x`;

        console.log(resposta)

        if(cont == numero){
            div.textContent=`${cont} = ${resposta}`;
        }
        else{
            div.textContent=`${cont} x `;
        }
        document.body.appendChild(div);
        cont++;
        div.style.display = 'inline';
    }
}