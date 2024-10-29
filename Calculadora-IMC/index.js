// Não foi colocado value no resultado pois quero o elemento e não o valor.
//value serve apenas para input, para div usamos o textContent que devolve o conteúdo dentro div.
//toFixed serve para arredondar as casas decimais.


const calcular = document.getElementById('calcular');



function imc(){


const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

if( nome !== '' && altura !== '' && peso !== ''){

    const calculoIMC = (peso / (altura * altura).toFixed(1));
    
       
    let classificacao = '';

        if (calculoIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (calculoIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (calculoIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (calculoIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (calculoIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${calculoIMC} e você está ${classificacao}`;

    
    
    
    

} else{

    resultado.textContent = "Preencha todos os campos!";

   
    
}
  
}

calcular.addEventListener('click', imc);