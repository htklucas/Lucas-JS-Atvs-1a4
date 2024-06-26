// Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são: a) Ter pelo menos 65 anos b) Ter trabalhado pelo menos 30 anos c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos

var idade
var idadeTrabalhada

idade = Number(prompt('Insira a sua idade'))
idadeTrabalhada = Number(prompt('Insira a idade trabalhada'))

if (idade >= 65 || idadeTrabalhada>= 30 || idade >= 60 && idadeTrabalhada >= 25) {

    alert('Você tem direito a aposentadoria!')
    
} else {

    alert('Você não tem direito a aposentadoria!')
    
}