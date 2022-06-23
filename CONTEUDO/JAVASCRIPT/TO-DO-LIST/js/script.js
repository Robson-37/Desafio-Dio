
function adicionar(){
    //Pegando o valor do campo peenchido
var valorCampo = document.getElementById("txt-afazeres"). value;
    //criando o elemento
var novaLista = document.createElement("li");
var txtConteudo = document.createTextNode(valorCampo);

novaLista.appendChild(txtConteudo);

document.getElementById("material").appendChild(novaLista);
}