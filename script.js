/*
const - constante = não é possivel alterar durante a execução do programa
letb - pode variar durante a execução do programa
var - está em desuso

Tipos de dados:
string=textos
numbers = numeros, inteiro ou real
boolean = lógico. verdadeiro ou falso, true ou false
null = nulo ou vazio
object = objeto, pode agrupar diversas informações
array = vetores
*/
const nome = "Maria"
let idade = 18
let salario = 15000
let casado = true
let conjugue = "Krisan"

/*Objeto */
const usuario = {
    nome: "Krisan",
    idade: 17,
    casado: true,
    conjuge: "Maria"

}

let frutas =  ["Maça", "Banana", "Laranja"]

/*console.log(usuario.nome) = só aparece o nome*/
console.log(usuario)
console.log(frutas[1])

let meuArray = [{
    nome: "Nick",
    idade: 18
},
{
    nome: "Flávia", 
    idade: 18
}
]
console.log(meuArray [1])

let nome1 = prompt ("Digite seu nome:") /*prompt= caixa de texto para a pessoa escrever*/
document.getElementById ('variavel').innerHTML = `Seja bem vindo ${nome1}` /* document... = aparecer o texto personalizado com o nome escrito*/ 
/*$= aparecer a variavel*/


/*operadores: +,-,*,/, %*/
/*operadores de comparação: 
> maior que
< menor que
== igual a (só compara valor)
=== igual (compara valor e tipo)
!=  retorna "true" se o valor E o tipo for diferentes
!== retorna "true se o valor OU o tipo for diferentes"
*/

let soma = 1+1
console.log(soma)

let sub = 1-1
console.log(sub)

let resto = 5%2  /*resto da divisão. no caso 1*/
console.log(resto)

console.log (22>18)
console,log (2<=0)

let a ="22" /*texto*/
let b = 22 /*valor numérico*/

console.log (a!=b)
console.log (a!==b)
console.log (a==b)
console.log (a===b)

/* condicionais
if - se
else if - senao se
else - senao
*/

let idade3 = 59
if(idade3 >= 60) {
    console.log("Idoso")

}
else if(idade3>=18) {
    console.log ( "Adulto")
}
else if(idade3>=14) {
    console.log ( "Jovem")
}
else{
    console.log ("Criança")
}