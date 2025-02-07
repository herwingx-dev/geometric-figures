/*
 ! Square
*/
function perimeterOfSquare(side) {
  if (side <= 0) {
    alert(`Ingresa los datos correctos para calcular el perímetro`);
  } else {
    return side * 4;
  }
}

function areaOfSquare(side) {
  if (side <= 0) {
    alert(`Ingresa los datos correctos para calcular el área`);
  } else {
    return side * side;
  }
}

/*
 ! Triangle
*/

/*
* Actualizar para calcular todo tipo de triángulos
*/

/*
 ? Actualmente solo cálcula triángulo isóceles
*/

function perimeterOfTriangle(sideA, sideB, base) {
  if (sideA <= 0 || sideB <= 0 || base <= 0) {
    alert(`Ingresa los datos correctos para calcular el perímetro`)
  } else {
    return sideA + sideB + base;
  }

}

function areaOfTriangle(base, height) {
  return ((base * height) / 2).toFixed(2);
}

function isIsoceles(sideA, sideB, base) {
  if (sideA <= 0 || sideB <= 0 || base <= 0) {
    alert(`Ingresa los datos correctos para calcular el área`)
  } else if (((sideA == sideB) && (base != sideA && sideB))) {
    return Math.sqrt((sideA * sideA) - ((sideB * sideB) / 4));
  } else {
    alert(`Los datos ingresados no corresponden a un triángulo isóceles`);
  }
}
/*
 ! Circle
*/
const PI = Math.PI;

function diameterOfCircle(radio) {
  return radio * 2;
}

function perimeterOfCircle(radio) {
  const diameter = diameterOfCircle(radio);
  if (diameter <= 0) {
    alert(`El valor que ingresaste para el radio es incorrecto`)
  } else {
    return (diameter * PI).toFixed(2);
  }
}

function areaOfCircle(radio) {
  if (radio <= 0) {
    alert(`El valor que ingresaste para el radio es incorrecto`)
  } else {
    return ((radio * radio) * PI).toFixed(2);
  }
}

/*
 ? Functions of Square
*/

function calculatePerimeterOfSquare() {
  const $input = document.getElementById("input-square");
  const value = $input.value;
  const perimeter = perimeterOfSquare(value);
  if (perimeter == undefined) {
    document.getElementById("result-square").innerHTML = `No se pudo calcular el perímetro`;
  } else {
    document.getElementById("result-square").innerHTML = `Perimétro: ${perimeter} <var>cm</var>`;
  }
}

function calculateAreaOfSquare() {
  const $input = document.getElementById("input-square");
  const value = $input.value;
  const area = areaOfSquare(value);
  area.toFixed(2);
  if (area == undefined) {
    document.getElementById("result-square").innerHTML = `No se pudo calcular el área`;
  } else {
    document.getElementById("result-square").innerHTML = `Área: ${area} <var>cm<sup>2</sup></var>`;
  }
}

/*
 ? Functions of Triangle
*/

function calculatePerimeterOfTriangle() {
  const sideA = document.getElementById("side-a");
  const sideB = document.getElementById("side-b");
  const base = document.getElementById("base");

  const valueA = Number(sideA.value);
  const valueB = Number(sideB.value);
  const valueC = Number(base.value);

  const perimeter = perimeterOfTriangle(valueA, valueB, valueC);
  if (perimeter == undefined) {
    document.getElementById("result-triangle").innerHTML = `No se pudo calcular el perímetro`;
  } else {
    document.getElementById("result-triangle").innerHTML = `Perimétro: ${perimeter} <var>cm</var>`;
  }
}

function calculateAreaOfTriangle() {
  const sideA = document.getElementById("side-a");
  const sideB = document.getElementById("side-b");
  const base = document.getElementById("base")

  const valueA = Number(sideA.value);
  const valueB = Number(sideB.value);
  const valueC = Number(base.value);

  const altura = isIsoceles(valueA, valueB, valueC);
  console.log(altura);
  if (altura == undefined) {
    document.getElementById("result-triangle").innerHTML = `No se pudo calcular el área`;
  } else {
    const area = areaOfTriangle(valueC, altura);
    document.getElementById("result-triangle").innerHTML = `Área: ${area} <var>cm<sup>2</sup></var>`;
  }
}

/*
? Functions of Circle
*/

function calculatePerimeterOfCircle() {
  const $radio = document.getElementById("radio");
  const value = $radio.value;

  const perimeter = perimeterOfCircle(value);
  if (perimeter == undefined) {
    document.getElementById("result-circle").innerHTML = `No se pudo calcular el perímetro`
  } else {
    document.getElementById("result-circle").innerHTML = `Perímetro: ${perimeter} <var>cm</var>`;
  }
}

function calculateAreaOfCircle() {
  const $radio = document.getElementById("radio");
  const value = $radio.value;

  const area = areaOfCircle(value);
  if (area == undefined) {
    document.getElementById("result-circle").innerHTML = `No se pudo calcular el área`
  } else {
    document.getElementById("result-circle").innerHTML = `Área: ${area} <var>cm<sup>2</sup></var>`;
  }
}
