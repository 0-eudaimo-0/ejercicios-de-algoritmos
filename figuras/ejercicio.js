let continuar = "si" ;
while(continuar === "si"){
let eleccionfigura = prompt("Elige en numero de la figura que deseas calcular: (1) triangulo, (2) rectangulo, (3) cuadrado, (4) circulo.").toLowerCase ();
if (eleccionfigura === "1")  {
    alert("escogiste triangulo");
    let calculo = prompt("¿deseas calcular (a) area o el (p) perimetro?, escribe la letra.").toLowerCase()
    if (calculo === "a") {
        alert("escogiste area");
        let primero = prompt("porfavor, ingresa el primer numero");
        let numero1 = parseFloat(primero);
        let segundo = prompt("porfavor, ingresa el segundo numero");
        let numero2 = parseFloat(segundo);
        let resultado = (numero1 * numero2) / 2;
        alert("el resultado del area es: " + resultado);
    }
    else if (calculo === "p") {
        alert("escogiste perimetro");
        let primero = prompt("porfavor, ingresa el primer numero");
        let numero1 = parseFloat(primero);
        let segundo = prompt("porfavor, ingresa el segundo numero");
        let numero2 = parseFloat(segundo);
        let tercero = prompt("porfavor, ingresa el tercer numero");
        let numero3 = parseFloat(tercero);
        let resultado = numero1 + numero2 + numero3;
        alert("el resultado del perimetro es: " + resultado);
    }
}
else if (eleccionfigura === "2") {
    alert("escogiste rectangulo");
    let calculo = prompt("¿deseas calcular (a) area o el (p) perimetro?, escribe la letra.").toLowerCase()
     if (calculo === "a")  {
        alert("escogiste area");
        let primero = prompt("porfavor, ingresa el primer numero");
        let numero1 = parseFloat(primero);
        let segundo = prompt("porfavor, ingresa el segundo numero");
        let numero2 = parseFloat(segundo);
        let resultado = numero1 * numero2;
        alert("el resultado del area es: " + resultado);
    }
    else if (calculo === "p")  {
        alert("escogiste perimetro");
        let primero = prompt("porfavor, ingresa el primer numero");
        let numero1 = parseFloat(primero);
        let segundo = prompt("porfavor, ingresa el segundo numero");
        let numero2 = parseFloat(segundo);
        let resultado = 2 * (numero1 + numero2) ;
        alert("el resultado del perimetro es: " + resultado);
    }
}
else if (eleccionfigura === "3")  {
    alert("escogiste cuadrado");
    let calculo = prompt("¿deseas calcular (a) area o el (p) perimetro?, escribe la letra.").toLowerCase()
     if (calculo === "a") {
        alert("escogiste area");
        let primero = prompt("porfavor, ingresa el primer numero");
        let numero1 = parseFloat(primero);
        let resultado = Math.pow(numero1, 2);
        alert("el resultado del area es: " + resultado);
    }
    else if (calculo === "p") {
        alert("escogiste perimetro");
        let primero = prompt("porfavor, ingresa el primer numero");
        let numero1 = parseFloat(primero);
        let resultado = 4 * numero1 ;
        alert("el resultado del perimetro es: " + resultado);
    }
}
else if (eleccionfigura === "4") {
    alert("escogiste circulo"); 
    let calculo = prompt("¿deseas calcular (a) area o el (p) perimetro?, escribe la letra.").toLowerCase()
    if (calculo === "a") {
        alert("escogiste area");
        let primero = prompt("porfavor, ingresa el primer numero");
        let numero1 = parseFloat(primero);
        let resultado = Math.PI * Math.pow(numero1, 2);
        alert("el resultado del area es: " + resultado);
    }
    else if (calculo === "p")  {
        alert("escogiste perimetro");
        let primero = prompt("porfavor, ingresa el primer numero");
        let numero1 = parseFloat(primero);
        let resultado = 2 * Math.PI * Math.pow(numero1, 2);
        alert("el resultado del perimetro es: " + resultado);
    }
}
continuar = prompt("¿Deseas realizar otro calculo? escribe (si) para continuar o cualquier otra tecla para salir").toLowerCase();
}