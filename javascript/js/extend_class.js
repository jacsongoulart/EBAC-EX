
/* Neste exemplo eu usei a classe ObterMedia3 como referencia para a criação de outra classe.
instanciei a classe nova na classe original e setei as mudanças que gostaria de fazer pra atingir 
meu objetivo de multiplicação por 3 e não mais divisão por 3.Finalmente isntanciei uma variável 
na minha nova classe com os parametros que eu gostaria e chamei a variável instanciada com o 
metodo alterado para multiplicar.   */

class Multiplicar3 extends ObterMedia3{

  calcMulti(){

    let multi = (this.n1 + this.n2 + this.n3) * 3

      return console.log("[classe extendida] A multiplicação dos números por 3 é igual a:  " + multi)

  }

}



