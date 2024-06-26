// Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

var ovos
var valorTotal

ovos = Number(prompt('Insira a quantidade de ovos a ser comprada'))

if (ovos <= 12) {

    valorTotal = ovos * 0.30
    alert('Valor total é de '+valorTotal)

} else if (ovos >= 13 && ovos <= 24) {

    valorTotal = ovos * 0.25
    alert('Valor total é de '+valorTotal)

} else {

    valorTotal = ovos * 0.40
    alert('Valor total é de '+valorTotal)
}