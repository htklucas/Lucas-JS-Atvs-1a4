// Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.

var Livro1
var Livro2
var Livro3

var TLivros

var Desconto

Livro1 = Number(prompt("Olá, qual valor do livro 1?"))
Livro2 = Number(prompt("Olá, qual valor do livro 2?"))
Livro3 = Number(prompt("Olá, qual valor do livro 3?"))

TLivros = Livro1 + Livro2 + Livro3



Desconto = TLivros * (0.85)

alert("O valor total foi: "+TLivros+ "R$ e com o desconto de 15% aplicado foi: "+Desconto+"R$")