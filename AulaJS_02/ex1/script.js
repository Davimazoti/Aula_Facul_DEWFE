function calcular(){
    let peso = parseFloat (document.getElementById("peso").value);
    let altura = parseFloat (document.getElementById("altura").value);
    let exibir = document.getElementById("exibir");
    exibir.innerHTML = "";
    

    let imc = (peso/(altura * altura));

    console.log(imc)

    if (imc < 18.5){
        exibir.innerHTML = "Abaixo do peso";
    }
    else if(imc >= 18.5 && imc <= 24.9){
        exibir.innerHTML = "Peso normal";
    }

    else if(imc >= 25.0 && imc <= 29.9){
        exibir.innerHTML = "Sobrepeso";
    }

    else{
        exibir.innerHTML = "Obesidade";
    }
}