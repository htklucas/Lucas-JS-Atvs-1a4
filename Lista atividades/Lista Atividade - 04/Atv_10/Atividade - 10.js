// Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

var habitantesPorKm

var totalHabitantes
var area

totalHabitantes = Number(prompt('Insira a população (total de habitantes).'))
area = Number(prompt('Coloque a área (quilômetros quadrados).'))

habitantesPorKm = totalHabitantes/area

if (habitantesPorKm >= 100) {

    alert('Alta densidade')
    
} else if (habitantesPorKm < 100 && habitantesPorKm > 25) {

    alert('Média densidade')
    
} else if (habitantesPorKm < 25) {

    alert('Baixa densidade')

}