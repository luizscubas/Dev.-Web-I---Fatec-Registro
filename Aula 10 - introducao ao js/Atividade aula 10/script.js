if (confirmacao == true) {
  //janela para colocar a idade
  const idade = window.prompt("Quantos anos você tem?")

  //escrevendo no site
  document.writeln("Olá," + nome); // concatenação

  // concatenação - Template Strings
  // document.write("Você tem" + idade + "anos")
  document.writeln(`Você tem ${idade}`)
}
