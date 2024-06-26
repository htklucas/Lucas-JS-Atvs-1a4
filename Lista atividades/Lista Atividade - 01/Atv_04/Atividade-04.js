// Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.

var Semana1
var Semana2
var Semana3
var Semana4
var TotalSemana
var MediaSemana

Semana1 = Number(prompt ("Insira quantidade de horas estudada na semana 1"))
Semana2 = Number(prompt ("Insira quantidade de horas estudada na semana 2"))
Semana3 = Number(prompt ("Insira quantidade de horas estudada na semana 3"))
Semana4 = Number(prompt ("Insira quantidade de horas estudada na semana 4"))

TotalSemana = Semana1 + Semana2 + Semana3 + Semana4
MediaSemana = TotalSemana / 4

alert("O total estudado nas semanas foi: "+TotalSemana+" e a média foi de: "+MediaSemana)