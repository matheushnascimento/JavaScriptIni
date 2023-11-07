// Exercício 1
alert(`Exercício 1
Hello World!`);

// Exercício 2
const number1 = 5;
const number2 = 7;

alert(`Exercício 2
A soma entre ${number1} e ${number2} é ${number1 + number2}`);

// Exercício 3
const value1 = 3.14;
const value2 = "valor de pi";

function verifNumber(number) {
  const result = typeof number == "number" ? "é um número" : "não é um número";

  return result;
}

alert(`Exercício 3
Value1 é do tipo ${typeof value1}, ele ${verifNumber(value1)}
Value2 é do tipo ${typeof value2}, ele ${verifNumber(value2)}`);

// Exercício 4
const string1 = true;
const string2 = "valor de pi";

function verifString(string) {
  const result =
    typeof string == "string" ? "é uma string" : "não é uma string";

  return result;
}

alert(`Exercício 4
string1 é do tipo ${typeof string1}, ele ${verifString(string1)}
string2 é do tipo ${typeof string2}, ele ${verifString(string2)}`);

//Exercício 5
const bool1 = false;
const bool2 = 123;

function verifBool(bool) {
  const result = typeof bool == "boolean" ? "é um boleano" : "não é um boleano";

  return result;
}

alert(`Exercício 5
bool1 é do tipo ${typeof bool1}, ele ${verifBool(bool1)}
bool2 é do tipo ${typeof bool2}, ele ${verifBool(bool2)}`);

//Exercício 6
const value3 = 360;
const value4 = 110;

alert(`Exercício 6
O valor de ${value3} menos ${value4} é igual a ${value3 - value4}`);

//Exercício 7
const value5 = 15;
const value6 = 3;

alert(`Exercício 7
O valor de ${value5} multiplicado por ${value6} é igual a ${value5 * value6}`);

//Exercício 8
const value7 = 32;
const value8 = 4;

alert(`Exercício 8
O valor de ${value7} multiplicado por ${value8} é igual a ${value7 / value8}`);

//Exercício 9
const value9 = 13;
const value10 = 282;

function EvenOdd(number) {
  result = number % 2 == 0 ? "é par" : "não é par";

  return result;
}

alert(`Exercício 9
O valor ${value9} ${EvenOdd(value9)}
O valor ${value10} ${EvenOdd(value10)}`);

//Exercício 10

const value11 = 13;
const value12 = 282;

function EvenOdd(number) {
  result = number % 2 != 0 ? "é impar" : "não é impar";

  return result;
}

alert(`Exercício 10
O valor ${value11} ${EvenOdd(value11)}
O valor ${value12} ${EvenOdd(value12)}`);
