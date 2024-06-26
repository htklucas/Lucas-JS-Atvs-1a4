// Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.

let leaoTerritorio = 320
let leaoCasalTerritorio = 400

let leaoFemea = 9
let leaoMacho = 5

var individuoFemea
var individuoMacho

var territorioSolo
var territorioCasal
var territorioTotal

var casal


casal = Number(prompt("Insira a quantidade de casais"))

territorioCasal =  casal * leaoCasalTerritorio

individuoFemea = leaoFemea - casal
individuoMacho = leaoMacho - casal

territorioSolo = (individuoFemea+individuoMacho) * leaoTerritorio

territorioTotal = territorioCasal + territorioSolo

alert("A área total é de "+territorioTotal+"Km² sendo um total de "+casal+" casais")