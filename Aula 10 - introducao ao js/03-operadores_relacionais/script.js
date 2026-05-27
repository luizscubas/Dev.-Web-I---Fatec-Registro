const nome = window.prompt(`Qual é o seu nome?`);
const idade = Number(window.prompt(`Qual é a sua idade?`));
const hobby = window.prompt(`Qual é o seu hobby?`);

document.writeln(`Olá ${nome}!`);

// Operador ternário
const resultado = idade < 18 ? 'menor' : 'maior'
document.writeln(`você é <strong>${resultado}<strong> de idade.`);
