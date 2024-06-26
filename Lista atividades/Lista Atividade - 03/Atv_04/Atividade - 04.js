// Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.

var largura
var comprimento
var metrosQuadrados
var caixaAzulejo
var qtdAzulejo
var precoAzulejo

largura = Number(prompt("Digite a largura (Metros)"))
comprimento = Number(prompt("Digite o comprimento (Metros)"))

metrosQuadrados = largura * comprimento

qtdAzulejo = 120 * metrosQuadrados

caixaAzulejo = qtdAzulejo / 60

precoAzulejo = caixaAzulejo * 45.50

alert("Sua piscina terá "+metrosQuadrados+"M²\nSerá necessário uma quantidade de "+qtdAzulejo+" Azulejos.\n Será nessesário uma quantida de "+caixaAzulejo+" caixas de azulejo.\n No total será gasto "+precoAzulejo+"R$")