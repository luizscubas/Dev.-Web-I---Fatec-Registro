const nome = window.prompt(`Qual é o seu nome?`);
const idade = Number(window.prompt(`Qual é a sua idade?`));
const hobby = window.prompt(`Qual é o seu hobby?`);
const sexo = window.prompt(
  `Qual é o seu sexo? Digte M (Masculino) F (Feminino)`,
);

document.writeln(`Olá ${nome}!`);

// Operador ternário
let resultado = idade < 18 ? "menor" : "maior";
document.writeln(`você é <strong>${resultado}<strong> de idade.`);

resultado =
  hobby.toLowerCase() != "estudar"
    ? "legal eim"
    : "parabéns você será um ótimo uber";
document.writeln(`<br> Seu hobby é ${hobby}. ${resultado}`);

resultado = sexo.toUpperCase() == "M" ? "o" : "a";
document.writeln(`<br> Prazer em conhece-l${resultado}`);
