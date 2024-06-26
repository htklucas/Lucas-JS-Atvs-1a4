//  Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir. CEREJA - CEREJA - CEREJA -> R$100 LARANJA - LARANJA - LARANJA -> R$80 CEREJA - LARANJA - CEREJA -> R$50 LARANJA - CEREJA - LARANJA -> R$25

var fruta1
var fruta2
var fruta3

fruta1 = Number(prompt('Que fruta deseja na posição 1? \n [1]-Cereja\n [2]-Laranja'))
fruta2 = Number(prompt('Que fruta deseja na posição 2? \n [1]-Cereja\n [2]-Laranja'))
fruta3 = Number(prompt('Que fruta deseja na posição 3? \n [1]-Cereja\n [2]-Laranja'))

if (fruta1 == 1 && fruta2 == 1 && fruta3 == 1) {

    alert('Você ganhou R$100')
    
} else if (fruta1 == 2 && fruta2 == 2 && fruta3 == 2) {
    
    alert('Você ganhou R$80')

} else if (fruta1 == 1 && fruta2 == 2 && fruta3 == 1) {

    alert('Você ganhou R$50')
    
} else if (fruta1 == 2 && fruta2 == 1 && fruta3 == 2) {

    alert('Você ganhou R$50')
    
} 