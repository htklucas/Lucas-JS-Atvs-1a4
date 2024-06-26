// Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 quantidadePessoas. O cálculo do valor do passeio é feito somando o valor gastoGas em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas quantidadePessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.

var quantidadePessoas
var tempoPasseio
var valorMetroGas
var gastoGas
var taxaPessoa
var valorPasseio
var precoPessoa

alert("Bem vindo ao festival de balonismo.")

quantidadePessoas = prompt("Quantas pessoas irão participar?")

if (quantidadePessoas <= 4){ 

tempoPasseio = prompt("Quantos minutos será a viagem?")

valorMetroGas = tempoPasseio * 2

gastoGas = valorMetroGas * 15

taxaPessoa = quantidadePessoas * 20

valorPasseio = gastoGas + taxaPessoa

precoPessoa = valorPasseio / quantidadePessoas

alert("Logo será gasto " + valorMetroGas + "m³ de gás, " + gastoGas + "R$, então o valor total cobrado seria de " + valorPasseio + "R$ e " + precoPessoa + "R$ por pessoa")
}

else {
    alert("Pessoas demais !!")
}