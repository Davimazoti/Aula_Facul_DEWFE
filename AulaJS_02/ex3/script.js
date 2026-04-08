function validarIdade(){
    let idade = parseInt(document.getElementById("idade").value);
    console.log(idade)
    if (idade <= 18){
        alert("Acesso negado")
    }
    else{
        alert("Acesso liberado")
        location.href = 'home.html'
    }
}