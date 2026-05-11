let edades = [];
let menores = 0;
let mayores = 0;
let adultosmayores = 0;
let sumatotal = 0;
for(let i=1;i<=10;i++){
    let edad = parseInt(prompt("porfavor, ingrese su edad"))
    while(edad <1||edad>120){
        alert("dato incorrecto, solo ingrese numeros del 1 al 120")
        edad = parseInt(prompt("intente de nuevo"))
    }

    if(edad<18){
        menores++;
    }
       else if(edad>=60){
       adultosmayores++;
    }
    else {
        mayores++;
    }
    sumatotal=sumatotal + edad;
    edades.push(edad);
}
let promedio = sumatotal/10;
let edadalta = Math.max(...edades)
let edadbaja = Math.min(...edades)
alert("---RESULTADOS FINALES---"+ "\nMenores de edad " + menores + "\nMayores de edad " + mayores + "\nAdulto mayor " + adultosmayores + "\nEdad mas baja " + edadbaja + "\nedad mas alta " + edadalta + "\npromedio de edades " + promedio);