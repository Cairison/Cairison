var numeroAleatorio = Math.round(Math.random()*10);

function mostra(frase){
    document.write(frase);
    document.write("<br>");	
}

var tentativas =  1;


while(tentativas <= 3){
    var tentativa = 4 - tentativas;
    var chute = parseInt(prompt(`Digite um numero entre 0 e 10, você tem ${tentativa} tentativas`));

    if(chute == numeroAleatorio){
        mostra(`Parabens, você acertou, o numero era ${numeroAleatorio}`);
        break;
    }else{
        if(tentativas == 3){
            mostra(`Voce errou, o numero era ${numeroAleatorio}`)
        }else{
            mostra("Voce errou")
        }
    }
    tentativas++;
}
