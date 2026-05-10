let edades = [];
for(let i=1;i<=10;i++){
    let edad = parseInt(prompt("porfavor, ingrese su edad"))
    while(edad <1||edad>120){
        alert("dato incorrecto, solo ingrese numeros del 1 al 120")
        edad = parseInt(prompt("intente de nuevo"))
    }
    edades.push(edad);
}