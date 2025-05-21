/*
Treinando a Criação de Classes

User:

- um atributo fullname, atribuível na instanciação
- um atributo email, atribuível na instanciação
- um atributo password, atribuível na instanciação
- um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha 
  do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não.
*/

class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password){
        if(email === this.email && password === this.password){
            console.log("Login efetuado com sucesso!");
        } else {
            console.log("Falha ao fazer login! Email ou senha incorretos.");
        }
    }
}