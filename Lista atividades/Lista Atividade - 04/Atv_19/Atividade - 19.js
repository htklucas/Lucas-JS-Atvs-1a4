// Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, contém alimentos aos quais o paciente é intolerante!".

let celiaco
let lactose
var nome

var alimento1
var rAlimento1

var alimento2
var rAlimento2

var alimento3
var rAlimento3

nome = prompt('Qual seu nome?')

celiaco = prompt('Você possui intolerancia à glúten? \n[1]-Sim\n[2]-Não')
lactose = prompt('Você possui intolerancia à lactose? \n[1]-Sim\n[2]-Não')

alimento1 = prompt('Insira o nome do alimento 1')
rAlimento1 = prompt('O alimento '+alimento1+' contém algo? \n[1]-Glutén\n[2]-Lactose\n[3]-Nada')

alimento2 = prompt('Insira o nome do alimento 2')
rAlimento2 = prompt('O alimento '+alimento2+' contém algo? \n[1]-Glutén\n[2]-Lactose\n[3]-Nada')

alimento3 = prompt('Insira o nome do alimento 3')
rAlimento3 = prompt('O alimento '+alimento3+' contém algo? \n[1]-Glutén\n[2]-Lactose\n[3]-Nada')



if (rAlimento1 == 3 && rAlimento2 == 3 && rAlimento3 == 3) {

    alert('Dieta adequada!')
    
} else if (celiaco == 1 && rAlimento1 != 1 && rAlimento2 != 1 && rAlimento3 != 1 ) {
    
    alert('Dieta adequada!')

} else if (lactose == 1 && rAlimento1 != 2 && rAlimento2 != 2 && rAlimento3 != 2 ) {

    alert ('Dieta adequada!')

} else {

    alert('Dieta inadequada ou Dados incorretos!')

}