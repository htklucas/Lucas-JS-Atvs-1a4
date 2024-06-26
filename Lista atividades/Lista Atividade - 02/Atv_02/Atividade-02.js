// Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.

var anoNasc
var ano
var idade
var meses = 12
var mesesshow
var semana = 52
var semanasshow
var dias = 365
var diasshow


anoNasc = Number(prompt("Digite o ano de seu nascimento"))
ano = Number(prompt("Digite o ano atual"))

idade = ano - anoNasc

mesesshow = idade * meses
semanasshow = idade * semana
diasshow = idade * dias



alert("Faz "+idade+ " anos desde que você nasceu \nFaz "+mesesshow+" meses desde que você nasceu. \nFaz "+semanasshow+" semanas desde que você nasceu. \nFaz "+diasshow+" dias desde que você nasceu. ")