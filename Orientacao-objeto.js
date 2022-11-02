//Programa de cadastro de bancos,utilizando orientação a objetos.


function Banco (nome,idade,quantia){

    this.nome = nome;
    this.idade = idade;
    this.quantia = quantia;
    this.sacar = function(){
            let x = prompt('Quanto você quer sacar: ')
            return (this.quantia-=x);

    }
}

isaias = new Banco('Isaias',24,5000)
console.log(isaias.sacar());