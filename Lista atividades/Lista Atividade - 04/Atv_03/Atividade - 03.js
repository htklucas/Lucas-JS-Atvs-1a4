// Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

var numero1
var numero2

numero1 = Number(prompt('Insira o 1 Número'))
numero2 = Number(prompt('Insira o 2 Número'))

if (numero1 > numero2) {
    
    alert(numero1+' é maior que '+numero2)

} else if (numero2 > numero2) {

    alert(numero1+' é menor que '+numero2)
    
} else if(numero1 == numero2) {

    alert(numero1+' é igual a '+numero2)

}