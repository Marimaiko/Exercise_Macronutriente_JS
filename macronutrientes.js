let TMB=0;

let nome = window.prompt('Seja bem vindo! Informe seu nome');
let idade = window.prompt('Olá ' + nome + '! Informe sua idade');
let peso = window.prompt(nome + ', agora informe seu peso');
let sexo = window.prompt(nome + ', infome se você é homem ou mulher, indicando (1) para masculino ou (2) para mulher');
// alert('Okay, vou gerar seus dados');
sexo=parseFloat(sexo);
idade=parseFloat(idade);
peso=parseFloat(peso);
// alert('sexo é variável tipo: '+typeof sexo)


if (sexo === 1) 
    {
    if (idade >= 10 && idade <=18)
    {
        TMB = 17.5 * peso + 651;
        alert('Sua taxa metabólica basal é de:'+TMB);
    }

    else if (idade >= 19 && idade <=30)
    {
        TMB = 15.3 * peso + 679;
        alert('Sua taxa metabólica basal é de:'+TMB);
    }

    else if (idade >= 31 && idade <=60)
    {
        TMB = 8.7 * peso + 879;
        alert('Sua taxa metabólica basal é de:'+TMB);
    }

    else if (idade >60)
    {
        TMB = 13.5 * peso + 487;
        alert('Sua taxa metabólica basal é de:'+TMB);
    }

    else if(idade<10)
    {
        alert('Você ainda é muito novo para esses dados!');
    }
}

if (sexo===2)
{
    if (idade >= 10 && idade <=18)
    {
        TMB = 12.2 * peso + 746;
        alert('Sua taxa metabólica basal é de:'+TMB);
    }

    else if (idade >= 19 && idade <=30)
    {
        TMB = 14.7 * peso + 496;
        alert('Sua taxa metabólica basal é de:'+TMB);
    }

    else if (idade >= 31 && idade <=60)
    {
        TMB = 8.7 * peso + 829;
        alert('Sua taxa metabólica basal é de:'+TMB);
    }

    else if (idade >60)
    {
        TMB = 10.5 * peso + 596;
        alert('Sua taxa metabólica basal é de:'+TMB);
    }

    else if(idade<10)
    {
        alert('Você ainda é muito nova para esses dados!');
    }
}

alert('Para dar continuidade, digite o número da opção que mais lhe define: Opção 1-Fica a maior parte do tempo sentada e não pratica atividades físicas programadas. Opção 2: Dia movimentado – dirige, cozinha, caminha até o ponto de ônibus, mas sem atividades físicas programadas OU dia-a-dia sedentário e exercícios físicos três vezes por semana, cerca de 30 minutos por dia. Opção 3: Rotina movimentada e atividades físicas três vezes por semana, cerca de 30 minutos por dia. Opção 4: De uma a duas horas e meia de atividades físicas diárias. Opção 5: Atividade física diária por mais de três horas.');

let caloria=0
let opcao =window.prompt('Digite sua opção: ');
opcao=parseFloat(opcao);
// alert('sexo:'+sexo+'opção:'+opcao);


if(sexo===1)
{
    if(opcao===1)
    {
        caloria=TMB*1.2;
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente');
    }
    else if(opcao===2)
    {
        caloria=TMB*1.4;
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente');
    }
    else if(opcao===3)
    {
        caloria=TMB*1.5;
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente');
    }
    else if(opcao===4)
    {
        caloria=TMB*1.6;
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente');
    }
    else if(opcao===5)
    {
        caloria=TMB*1.8;
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente');
    }
    else 
    {
        alert('Opção inválida');
    }
}

if (sexo===2)
{
    if (opcao===1)
    {
        caloria = TMB *1.2;
        alert('Seu organismo necessita de '+ caloria +' calorias diariamente');
    }
    else if(opcao===2)
    {
        caloria=TMB*1.3;
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente');
    }
    else if(opcao===3)
    {
        caloria=TMB*1.45;
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente');
    }
    else if(opcao===4)
    {
        caloria=TMB*1.5;
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente');
    }
    else if(opcao===5)
    {
        caloria=TMB*1.7
        alert('Seu organismo necessita de '+ caloria+' calorias diariamente')
    }
    else 
    {
        alert('Opção inválida');
    }
}