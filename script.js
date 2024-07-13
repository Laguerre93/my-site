document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("calc-form");
    const nomeInput = document.getElementById("nome");
    const nomeError = document.getElementById("nome-error");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
         
        //VALIDAÇÃO Do NOME
        if (!nomeInput.value) {
            nomeError.style.display = "block";
            return;
        } else {
            nomeError.style.display = "none";
        }

        const nome = nomeInput.value;
        const altura = parseFloat(document.getElementById("altura").value);
        const peso = parseFloat(document.getElementById("peso").value);
        
        const imc = peso / (altura*altura);
        const resultaElement = document.getElementById("resultado");
        
        let categoria;

        if (imc < 18.5) {
            categoria = "Abaixo do peso";
            resultaElement.style.backgroundColor = "#ffff00";
        } else if(imc < 25) {
            categoria = "Peso normal";
            resultaElement.style.backgroundColor = "#00FF00";
        } else if (imc < 30) {
            categoria = "Sobrepeso";
            resultaElement.style.backgroundColor = "#FFA500";
        } else {
            categoria = "Obesidade";
            resultaElement.style.backgroundColor = "#ff0000";
        }

        resultaElement.innerHTML =`<p> ${nome}, seu IMC é ${imc.toFixed(2)}.</p><p>Você está na categoria: ${categoria}</P>`;
        
        //Atualizar a categoria-Input
        document.getElementById("categoria").value = categoria;
        let dados = new FormData(formulario);

        for (let [chave, valor] of dados.entries()) 
            console.log(chave + " : " + valor);
    });
});