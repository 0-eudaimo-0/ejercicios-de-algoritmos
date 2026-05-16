 let encuestados = [];
 for(let i=1;i<=6;i++) {
    let nombre = prompt("escriba porfavor su nombre");
    let identificacion = parseInt(prompt("escriba porfavor su identificacion"));
    while( isNaN(identificacion)){
        alert("dato incorrecto, solo ingrese numeros sin puntos ni comas")
        identificacion = parseInt(prompt("intente de nuevo"));
    }
    let fechadenacimiento = prompt("ingrese su fecha de nacimiento en el orden dia/mes/año");
    let correo = prompt("ingrese su correo electronico");
    let ciudadderesidencia = prompt("ingrese su ciudad de residencia");
    let ciudaddenacimiento = prompt("ingrese su ciudad de nacimiento");
    let artistafavorito = prompt("escriba porfavor su artista favorito de musica");
    let cancion1 = prompt("escriba porfavor una cancion que le guste del cantante");
    let cancion2 = prompt("escriba porfavor otra cancion que le guste del cantante");
    let cancion3 = prompt("escriba porfavor otra cancion que le guste del cantante");
    let encuesta = {
        nombreUsuario: nombre,
        cedula: identificacion,
        fechaNac: fechadenacimiento,
        email: correo,
        residecia: ciudadderesidencia,
        origen: ciudaddenacimiento,
        artista: artistafavorito,
        canciones: [cancion1, cancion2, cancion3]
    };
    encuestados.push(encuesta);
 }
 let busqueda = parseInt(prompt("ingresa la posicion de la persona que deseas buscar (0 - 5): "));
 while (isNaN(busqueda) || busqueda < 0 || busqueda >= encuestados.length) {
    alert("¡Error! Posición inválida. Ingrese un número entre 0 y " + (encuestados.length - 1));
    busqueda = parseInt(prompt("intente de nuevo: "))
 }
 let personaEncontrada = encuestados[busqueda];
 alert("--- INFORMACIÓN DE LA PERSONA ---\n" +
      "Nombre: " + personaEncontrada.nombreUsuario + "\n" +
      "Cédula: " + personaEncontrada.cedula + "\n" +
      "Fecha de Nacimiento: " + personaEncontrada.fechaNac + "\n" +
      "Correo: " + personaEncontrada.email + "\n" +
      "Ciudad Residencia: " + personaEncontrada.residencia + "\n" +
      "Ciudad Origen: " + personaEncontrada.origen + "\n" +
      "Artista Favorito: " + personaEncontrada.artista + "\n" +
      "Canciones Favoritas: " + personaEncontrada.canciones.join(", ")
);
let continuarConsultando = "si";
while (continuarConsultando === "si") {
    let busqueda = parseInt(prompt("Ingrese la posición de la persona que desea buscar (0 a 5):"));
 while (isNaN(busqueda) || busqueda < 0 || busqueda >= encuestados.length) {
    alert("¡Error! Posición inválida. Ingrese un número entre 0 y " + (encuestados.length - 1));
    busqueda = parseInt(prompt("intente de nuevo: "))
 }
 let personaEncontrada = encuestados[busqueda];
 alert("--- INFORMACIÓN DE LA PERSONA ---\n" +
      "Nombre: " + personaEncontrada.nombreUsuario + "\n" +
      "Cédula: " + personaEncontrada.cedula + "\n" +
      "Fecha de Nacimiento: " + personaEncontrada.fechaNac + "\n" +
      "Correo: " + personaEncontrada.email + "\n" +
      "Ciudad Residencia: " + personaEncontrada.residencia + "\n" +
      "Ciudad Origen: " + personaEncontrada.origen + "\n" +
      "Artista Favorito: " + personaEncontrada.artista + "\n" +
      "Canciones Favoritas: " + personaEncontrada.canciones.join(", ")
);
    continuarConsultando = prompt("¿Desea consultar a otra persona? Escriba 'si' para continuar o 'no' para salir:").toLowerCase();
    while (continuarConsultando !== "si" && continuarConsultando !== "no") {
        alert("Por favor, responda únicamente 'si' o 'no'.");
        continuarConsultando = prompt("¿Desea consultar a otra persona? ('si' / 'no'):").toLowerCase();
    }
}
alert("Saliendo del módulo de consultas...");