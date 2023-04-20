var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoehValido = validaPeso(peso);
    var alturaehValida = validaAltura(altura);

    if(!pesoehValido){
        console.log("Peso Inválido!");
        pesoehValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaehValida){
        console.log("Altura Inválida!");
        alturaehValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoehValido && alturaehValida){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }

    function validaPeso(peso){
        if(peso >= 0 && peso < 1000){
            return true;
        }else{
            return false;
        }
    }

    function validaAltura(altura){
        if(altura >= 0 && altura <= 3.0){
            return true;
        }else{
            return false;
        }
    }

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
}

