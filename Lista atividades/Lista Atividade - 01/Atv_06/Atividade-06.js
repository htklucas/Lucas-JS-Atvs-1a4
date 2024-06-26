// Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gastoGas (litros), mostrando o resultado ao final.

var KmCombustivel
var KmPercorrido
var CombusgastoGas

KmPercorrido = Number(prompt("Quantos Quilômetros foram percorridos?"))
CombusgastoGas = Number(prompt("Quantos litros de combustível foram gastoGass?"))

KmCombustivel = KmPercorrido / CombusgastoGas

alert("O total de combustivel comsumido por quilómetro é: "+ KmCombustivel)