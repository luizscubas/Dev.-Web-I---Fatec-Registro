let n1 = Number(window.prompt(`Digite um número:`))
let n2 = Number(window.prompt(`Digite outro número:`))
const soma = n1 + n2
window.alert(`A soma dos valores é ${soma}`)

// potencia

let pot = n1**n2
document.writeln(`<br> a potência de ${n1} elevado a ${n2} é igual a ${pot}.`)

// Subtração

let sub = n1 - n2
document.writeln(`<br> a Subtração de ${n1} menos ${n2} é igual a ${sub}.`)

// Divisão real

let divr = n1 / n2
document.writeln(`<br> a divisão real de ${n1} divido por ${n2} é igual a ${divr}.`)

// Resto da divisão

let rdiv = n1 % n2
document.writeln(`<br> O resto da divisão de ${n1} por ${n2} é igual a ${rdiv}.`)

// Operador de atribuição
n1+= n2
document.writeln(`<br> ${n1}`)
n1+= n2
document.writeln(`<br> ${n1}`)
n1+= n2
document.writeln(`<br> ${n1}`)