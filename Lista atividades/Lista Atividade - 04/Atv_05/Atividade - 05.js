// Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7, e "Reprovado" apenas para médias abaixo de 5)

var nota1
var nota2
var nota3
var media

nota1 = Number(prompt('Insira a 1 Nota'))
nota2 = Number(prompt('Insira a 2 Nota'))
nota3 = Number(prompt('Insira a 3 Nota'))

media = (nota1 + nota2 + nota3) / 3

if (media > 7) {

    alert('Aprovado!')
    
} else if (media < 5) {

    alert('Reprovado!')
    
}

else if (media < 7 && media > 5) {

    alert('Recuperação!')

}