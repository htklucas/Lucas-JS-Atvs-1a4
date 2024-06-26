// Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de quantidadePessoas, o número de diárias e quantas quantidadePessoas do grupo vão querer café diário. Mostrar na tela o total a pagar.

var diaria
var numdiaria
let cafe = 15
var qtdPessoa
var qtdPessoaCafe
var qtdPagaCafe
var totalpayable

alert("Olá, seja bem vindo a pousada")
qtdPessoa = Number(prompt("Quantas quantidadePessoas irão participar?"))
diaria = Number(prompt("Quantas dias irão ficar?"))

numdiaria = diaria * 280

qtdPessoaCafe = Number(prompt("Quantas quantidadePessoas irão querer café?"))

if(Number(qtdPessoaCafe > qtdPessoa)){

    alert("Dados incorretos!")
}
else{

    qtdPagaCafe = qtdPessoaCafe * 15
totalpayable = qtdPagaCafe + numdiaria
    alert("No total de " + qtdPessoa + " quantidadePessoas " + qtdPessoaCafe + " irão querer café, o que dá um custo de "+ qtdPagaCafe + "R$ a mais. a diaria ficaria " + numdiaria + "R$, No total ficaria " + totalpayable + "R$")
}