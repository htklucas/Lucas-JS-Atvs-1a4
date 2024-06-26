// Em um jogo de tabuleiro com combinação de moeda e dado, temos possibilidades de cara ou coroa (moeda) e números de 1 a 6 (dado). Criar um programa que pergunte ao usuário qual foi o resultado da moeda e do dado, em seguida determinar o que acontece na rodada. Caso o resultado da moeda tenha sido cara, o jogador perde a vez, independente do dado. Mostrar mensagem de "Você perdeu sua vez!". Caso a moeda tenha sido coroa, o jogador pulará o número de casas no tabuleiro que sair na jogada do dado. Mostrar mensagens "Avance X casas no tabuleiro!", sendo X o número que saiu no dado.

var moeda
var dado

moeda = Number(prompt('Insira o lado da moeda \n [1]-Cara\n [2]-Coroa'))
dado = Number('Insira a quantidade tirada no dado [1 a 6]')

if (moeda == 1) {
    
    alert('Você perdeu su vez!')

} else if (moeda == 2) {

    alert('Avance '+dado+' casas no tabuleiro!')
    
} else if (moeda > 2 || moeda < 1 || dado > 6 || dado < 1){

    alert('Insira dados válidos!!')
    
}