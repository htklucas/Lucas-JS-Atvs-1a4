// Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

var dolar
var conotacaoDolar
var real

dolar = Number(prompt('Insira o valor em dolar'))
conotacaoDolar = Number(prompt('Insira a conotação do dolar'))

real = dolar * conotacaoDolar

if (real > 5) {

    alert(real+' Real, está caro')
    
}

else {

    alert(real+' Real, está barato')

}