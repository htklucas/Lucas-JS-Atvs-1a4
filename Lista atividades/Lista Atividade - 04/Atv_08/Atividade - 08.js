// Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

var altura
var peso

let IMC

altura = Number(prompt('Insira a altura (Metros)'))
peso = Number(prompt('Insira o peso (Kilos)'))

    IMC = peso/(altura*altura)

if (IMC > 25) {

    alert('Acima do peso')
    
} else if (IMC > 18 && IMC < 25) {

    alert('Peso ideal')
    
}
else if(IMC < 18){

    alert('Abaixo do peso')

}