// javaScript
// VÁRIAVEIS
/* Variáveis podem ser declaradas de 3 formas:
VAR, LET, CONST*/

//var:
var nome = "Luiz";
var numero = 2;

//let:
let cidade = "registro";
cidade = "Sete Barras";

//Const:
const user = "luiz.cubas@gmail.com";
//user = "luiz.cubas@gmail.com" -> não pode

//funções do elemento window

//disparando uma janela de alerta no site
window.alert("Bem-vindo ao meu site");

//disparando uma janela de confirmação
const confirmacao = window.confirm("Vamos começar?");


if (confirmacao == true) {
  //dispara uma janela de entrada de dados
  const nome = window.prompt("Qual é o seu nome?");
  const idade = window.prompt("Quantos anos você tem?")

  //escrevendo no site
  document.writeln("Olá," + nome); // concatenação

  // concatenação - Template Strings
  // document.write("Você tem" + idade + "anos")
  document.writeln(`Você tem ${idade}`)
}
