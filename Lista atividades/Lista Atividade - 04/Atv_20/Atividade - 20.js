//  Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes. O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"

let nomeEquipe

var nomePessoa1
var tempoGastoPessoa1
var mediaPessoa1

var nomePessoa2
var tempoGastoPessoa2
var mediaPessoa2

var nomePessoa3
var tempoGastoPessoa3
var mediaPessoa3

var nomePessoa4
var tempoGastoPessoa4
var mediaPessoa4

var mediaGeral

nomeEquipe = prompt('Qual nome da equipe?')

nomePessoa1 = prompt('Olá 1º integrante, qual seu nome?')
tempoGastoPessoa1 = Number(prompt('Qual foi o tempo gasto na parte 1 "Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km)"? (Horas)'))
mediaPessoa1 = 30 / tempoGastoPessoa1 

nomePessoa2 = prompt('Olá 2º integrante, qual seu nome?')
tempoGastoPessoa2 = Number(prompt('Qual foi o tempo gasto na parte 2 "Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km)? (Horas)'))
mediaPessoa2 = 45 / tempoGastoPessoa2

nomePessoa3 = prompt('Olá 3º integrante, qual seu nome?')
tempoGastoPessoa3 = Number(prompt('Qual foi o tempo gasto na parte 3 "Trecho 3 Lagoa da Conceição até Pântano do Sul (30km)"? (Horas)'))
mediaPessoa3 = 30 / tempoGastoPessoa3

nomePessoa4 = prompt('Olá 4º integrante, qual seu nome?')
tempoGastoPessoa4 = Number(prompt('Qual foi o tempo gasto na parte 4 "Trecho 4 Pântano do Sul até Av. Beira-Mar (35km)"? (Horas)'))
mediaPessoa4 = 35 / tempoGastoPessoa4

mediaGeral = (mediaPessoa1 + mediaPessoa2 + mediaPessoa3 + mediaPessoa4) / 4

if (mediaGeral < 15) {

    alert(mediaGeral.toFixed(2)+'km/h. Desempenho pode melhorar bastante!')
    
} else if (mediaGeral >= 15 && mediaGeral <= 18) {

    alert(mediaGeral.toFixed(2)+'km/h. Desempenho bom, mas ainda pode melhorar!')
    
} else if (mediaGeral > 18) {

    alert(mediaGeral.toFixed(2)+'km/h. Desempenho excelente. Parabéns!')
    
}