// Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

let nomePessoa
let idadePessoa
let comorbidade

nomePessoa = prompt('Insira seu nome')
idadePessoa = Number('Insira sua idade')
comorbidade = Number(prompt('Você tem comorbidade? \n [1] Sim \n [2] Não'))

if (idadePessoa >= 60 || comorbidade == 1) {

    alert('Pode se vacinar!')
    
} else {

    alert('Não pode vacinar!')
    
}