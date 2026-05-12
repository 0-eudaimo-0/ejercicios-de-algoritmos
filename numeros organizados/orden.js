let vectorA = [];
let vectorB = [];
let mezcla = [];
for(let i = 0; i < 5; i++) {
    let num = parseInt(prompt("ingrese numero " + (i+1) + " para el vector A"))
    if ( i > 0 ){
    while( num <= vectorA [ i - 1]) {
        alert ("¡Error! El número debe ser mayor al anterior para que sea ascendente.");
        num = parseInt(prompt("Ingrese un número mayor a" + vectorA[ i - 1]));
    }
    }
    vectorA.push(num);
}    
for(let i = 0; i < 5; i++) {
    let num = parseInt(prompt("ingrese numero " + (i+1) + " para el vector B"));
    if ( i > 0 ){
    while( num <= vectorB [ i - 1]) {
        alert ("¡Error! El número debe ser mayor al anterior para que sea ascendente.");
        num = parseInt(prompt("Ingrese un número mayor a " + vectorB[ i - 1]));
    }
    }
    vectorB.push(num);
}
let i = 0 ;
let j = 0 ;    
while (i < 5 && j < 5) {
    if(vectorA[i] < vectorB[j]) {
        mezcla.push(vectorA[i]);
        i++ ;
    }
    else {
        mezcla.push(vectorB[j])
        j++ ;
    }
}
while (i < 5) {
        mezcla.push(vectorA[i]);
        i++ ;
}
while (j < 5) {
        mezcla.push(vectorB[j]);
        j++ ;
}
alert("La mezcla ordenada es: " + mezcla.join(" "));