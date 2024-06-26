// Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

var altura
var peso
var imc

altura = prompt("Digite sua altura")
peso = prompt("Digite seu peso")

imc = peso/(altura*altura)

alert("De acordo com as informações fornecidas, seu imc é de "+imc)