// Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 

var plastico
var papel
var metal

var VTplastico
var VTpapel
var VTmetal

var valorTotal

plastico = Number(prompt("Insira a quantidade de Plástico(KG)"))
papel = Number(prompt("Insira a quantidade de Papel(KG)"))
metal = Number(prompt("Insira a quantidade de Metal(KG)"))

VTplastico = (plastico/10) * 2
VTpapel = (papel/30) * 3
VTmetal = (metal/50) * 5

valorTotal = VTplastico + VTpapel + VTmetal

alert("Quantidade recebida: \n\nValor pelo Plástico: R$"+VTplastico.toFixed(2)+"\nValor pelo Papel: R$"+VTpapel.toFixed(2)+"\nValor pelo Metal: R$"+VTmetal.toFixed(2))