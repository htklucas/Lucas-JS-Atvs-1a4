// Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

var salario
var anosServico
var salarioDefinitivo

salario = Number(prompt('Insira seu salário'))
anosServico = Number(prompt('Insira seus anos de serviço'))

if (anosServico > 5) {
    
    salarioDefinitivo = salario * 1.05
    
    alert('Com bônus, seu salário é de '+salarioDefinitivo)

} else {

    alert('Sem bônus, seu salário é de '+salario)

}