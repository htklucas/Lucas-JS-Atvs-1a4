// Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.

let pessoasConvidadas = 45
let litrosChopp = 300
var QTDgasta
var QTDsobra
var resultadoChopp

var mediaPessoa

QTDgasta = Number(prompt("Qual foi a quantidade gasta de Chopp?"))
QTDsobra = Number(prompt("Qual foi a quantidade que sobrou de Chopp"))

resultadoChopp = litrosChopp - QTDgasta - QTDsobra
mediaPessoa = QTDgasta / pessoasConvidadas

alert("Média por pessoa: "+mediaPessoa.toFixed(2))