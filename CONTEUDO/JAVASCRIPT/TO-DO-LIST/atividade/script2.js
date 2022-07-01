function verificar(){ 
        //Pegando o valor do campo preenchido.
    var valor1 = document.getElementById("param1").value,
        valor2 = document.getElementById("param2").value,
        //Calculando os valores.
        result = parseInt(valor1) + parseInt(valor2);
        //Informando os vaores digitado utilizando.
        alert("Os números digitado foi : " + valor1 + " e " + valor2);
        //Verificando se os valores iguais ou diferentes e se são maior que 10 e menor que vinte. 
        if(valor1 === valor2){
            alert("Os números " + valor1  + " e " + valor2 + " , são iguais. ");
        } 
        else {
            alert("Os números " + valor1 + " e " + valor2 + " são diferentes.");
        }
        if((result > 10) ||(result < 20)){
            if(result === 10){
                alert("A soma dos número digitado é igual a " + result + 
                " e serão fixado no resultado abaixo");
            }
            if(result === 20){
                alert("A soma dos número digitado é  igual a " + result + 
                " e serão fixado no resultado abaixo");
            }
        }
        else
        {
            alert("A soma dos número digitado é " + result + ", é maior que 10 e menor que 20," +
        " e serão fixado no resultado abaixo");
        }
        if((result < 10) ||(result > 20 )){
            alert("O número " + result + ", não se enquadra nos parâmetros(maior quer 10) ou (menor que 20), " +
              "o resultado será fixado abaixo.");
        }
        //Fixando o resultado da soma dos números. 
        document.getElementById("result").innerHTML = result;
}