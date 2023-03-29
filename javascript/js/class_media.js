
/*Neste exemplo eu criei uma classe onde seu construtor possue 3 parametros, com um método para calcular a média de 3 números,
então instanciei uma variável com a classe que eu criei e dei os parametros que eu gostaria que calculasse.*/

class ObterMedia3 {

  constructor(n1,n2,n3){

    this.n1 = n1
    this.n2 = n2
    this.n3 = n3

  }

  calcMedia() {

      let media = (this.n1 + this.n2 + this.n3) / 3

      return console.log("[classe instanciada] A média dos números é igual a: " + media)
  }

}










