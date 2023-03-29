/********************************************************************
                                                                    *
                    O HTML USADO FOI O formulario.html              *
                                                                    *
*********************************************************************/


/*aqui eu instanciei a classe que eu criei no arquivo "class_media"*/

const media30 = new ObterMedia3(5,5,20)

media30.calcMedia() // resultado no console

//-------------------------------------------------------------------------------//

//aqui eu uso uma outra variável instanciada numa classe que foi criada a partir da classe "obtermedia" usando o recurso "extends";


const multi3 = new Multiplicar3(5,10,15)

multi3.calcMulti() // resultado no console


//-------------------------------------------------------------------------------//


const calcularMedia = notas => {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

//*** Alterei a função abaixo "aprovacao" instanciando uma variável usando uma arrow function.*** 

const aprovacao = notas => {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

// *** Novamente alterado a função recursiva "contagemRegressiva" para arrow function instanciando uma variável.***

const cR = numero => {

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        cR(proximoNumero);

}

cR(10)

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaUf(elemento){

    elemento.addEventListener('focusout', function (event){

        event.preventDefault();

        const ufValido = /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/i;
        if(this.value.match(ufValido) && !this.value == "") {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

            
        } else if (this.value == ""){
            alert('Os campos marcados em vermelho são obrigatórios!')
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            
        } else {
            
            alert('Formato inválido! Preencha como o exemplo a seguir: "RJ" ou "rj"')
            document.querySelector('.mensagem').innerHTML = "Por favor, preencha o campo UF corretamente";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for (let emFoco of camposUf){
    validaUf(emFoco)
}    


 











