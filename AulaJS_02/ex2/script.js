function calcularTabuada(){
    let numero = parseInt(document.getElementById("numero").value);
    console.log(numero)

    for(let i = 0; i <= 10; i++){
        let resposta = numero * i; 
        let p = document.createElement('p')
        p.textContent = `${numero} x ${i} = ${resposta}`;
        document.body.appendChild(p);
    }
}
