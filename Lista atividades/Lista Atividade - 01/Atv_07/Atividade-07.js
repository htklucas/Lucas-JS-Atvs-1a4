// Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. O cálculo utilizado é de 1 banheiro para cada 50 quantidadePessoas e 1 bar para cada 150 quantidadePessoas. Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.

var TotalquantidadePessoas
let Banheiro
let Bar

TotalquantidadePessoas = Number(prompt("Digite o total de quantidadePessoas"))

Banheiro = TotalquantidadePessoas/50
Bar = TotalquantidadePessoas/150

alert("O total de quantidadePessoas é "+TotalquantidadePessoas+", o total de banheiros será "+Banheiro+" e o total de bares será "+Bar)