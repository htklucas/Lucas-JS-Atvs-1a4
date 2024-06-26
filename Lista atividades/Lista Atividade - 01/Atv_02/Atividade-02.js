// Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).

let VArroz = 15.99
var Arroz
var RArroz

let VBatataPalha = 10.99
var BatataPalha
var RBatataPalha

let VSucoDeGarrafa = 7.50
var SucoDeGarrafa
var RSucoDeGarrafa

const Dinheiro = 100
var Troco
var Total

Arroz = prompt("Quantos sacos de arroz irá querer? (1 kilo)")

BatataPalha = prompt("Quantos sacos de Batata palha irá querer? (500g)")

SucoDeGarrafa = prompt("Quantos Sucos de Garrafa irá querer? (400ml)")

RArroz = Arroz * VArroz
RBatataPalha = BatataPalha * VBatataPalha
RSucoDeGarrafa = SucoDeGarrafa * VSucoDeGarrafa
Total = RArroz + RBatataPalha + RSucoDeGarrafa

Troco = Dinheiro - Total

alert ("O valor no total foi: "+Total+"R$ e o troco será de: "+Troco+"R$")
