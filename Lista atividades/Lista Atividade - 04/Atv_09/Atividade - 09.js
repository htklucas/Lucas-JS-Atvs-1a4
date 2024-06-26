// Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

let usuarioLogin
let usuarioSenha

usuarioLogin = prompt('Insira o nome do usuário')
usuarioSenha = prompt('Insira a senha do usuário')

if (usuarioLogin == 'admin' && usuarioSenha == '123') {

    alert('Login efetuado.')
    
} else {

    alert('Não foi possivel efetuar o Login')
    
}