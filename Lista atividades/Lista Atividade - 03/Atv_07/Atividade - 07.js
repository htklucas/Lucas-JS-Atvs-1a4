// Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.

var atvIndividual
var seminarioEquipe
var projetoFinal

var media

atvIndividual = Number(prompt("Atividade Individual, Insira a nota"))
seminarioEquipe = Number(prompt("Seminário em equipe, Insira a nota"))
projetoFinal = Number(prompt("Projeto final, Insira a nota"))

media = (atvIndividual+seminarioEquipe+projetoFinal) / 3

alert("Sua média é de "+media)