// alert("O primeiro alert");
// console.log('Primeiro console.log');
// alert('10*6556 é igual a: '+ 10*6556);
// console.log('O resultado de (60/3)+5 é: ', (60/3)+5);

let saldoDisponivel = 1000;
alert('Insira seu cartão');
alert('Seu saldo disponível é de R$'+saldoDisponivel);
let valorSaque= window.prompt('Quanto tu quer sacar?');

if(valorSaque<=saldoDisponivel)
    {   
        saldoDisponivel=saldoDisponivel-valorSaque;

        alert('Seu novo saldo é de R$'+saldoDisponivel);
    }

else
    {
        alert('Saldo insulficiente');
    }

