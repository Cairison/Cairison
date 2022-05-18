let nome = prompt("qual é o seu nome?");
let idade = prompt("Qual sua idade");
let linguagem = prompt(
  "Que linguagem que você esta estudando no momento, se não estiver, digite 'nenhuma'"
);

if (nome === "" ||  idade === 0 ||  linguagem === "" ||  !nome.trim() ||  !linguagem.trim()
) {
  alert("Algum dado ficou vazio, preencha os corretamente");
} else {
  if (idade.length > 2 ) {
    alert("você não tem mais de 100 anos ");
  } else if (isNaN(parseFloat(idade)) && isFinite(idade)) {
    alert("você não digitou um número");
  } else {
    if (linguagem === "nenhuma") {
      alert(
        `Olá ${nome}, você tem ${idade} anos e não esta aprendendo nem uma linguagem`
      );
    } else {
      alert(
        `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`
      );
      let seEstaGostando = prompt(
        `Você está gostando de estudar essa linguagem: ${linguagem} ? Responda com o número 1 para SIM ou 2 para NÃO.`
      );
      if (seEstaGostando === "1") {
        alert(`1 > Muito bom! Continue estudando e você terá muito sucesso.`);
      } else if (seEstaGostando === "2") {
        alert(`2 > Ahh que pena... Já tentou aprender outras linguagens?`);
      } else {
        alert(`Você não pode digitar ou colocar outra coisa alem do 1 ou 2`);
      }
    }
  }
}