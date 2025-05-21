/*
Treinando a Criação de Classes

Product:

- um atributo name, atribuível na instanciação
- um atributo description, atribuível na instanciação
- um atributo price, atribuível na instanciação
- um atributo inStock, inicializado sempre em 0
- um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade 
  à variável inStock
- um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do 
  preço com o desconto aplicado
*/

class Product {
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(amount) {
        this.inStock += amount;
    }

    calculateDiscount(discount) {
        return this.price - (this.price / 100 * discount);
    }
}