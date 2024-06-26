// Uma cidadePessoa pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

var VotosCandidatoX
var VotosCandidatoY
var VotosBrancos
var VotosNulos

var percentualX
var percentualY
var percentualBrancos
var percentualNulos

var TotalEleitores

TotalEleitores = Number(prompt("Qual o total de eleitores?"))

VotosCandidatoX = Number(prompt("Qual o total de votos para o candidato X?"))
VotosCandidatoY = Number(prompt("Qual o total de votos para o candidato Y?"))
VotosBrancos = Number(prompt("Qual o total de votos brancos?"))
VotosNulos = Number(prompt("Qual total de votos nulos?"))

percentualX = (VotosCandidatoX / TotalEleitores)*100 
percentualY = (VotosCandidatoY / TotalEleitores)*100
percentualBrancos = (VotosBrancos / TotalEleitores)*100
percentualNulos = (VotosNulos / TotalEleitores)*100

alert("Percentual de votos: \n\nTotal de votos do candidato X: "+percentualX+"%\n\nTotal de votos no candidato Y: "+percentualY+"%\n\nTotal de votos em branco: "+percentualBrancos+"%\n\nTotal de votos nulos: "+percentualNulos+"%")