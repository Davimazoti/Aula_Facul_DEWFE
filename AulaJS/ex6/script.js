function exibirHora(){
    var hora = new Date().getHours();
    document.getElementById('texto').innerHTML = hora;
}