//#region INSTRUCCIONES:
    // Añadir al principio ' console.clear(); ' para limpiar la consola.
console.clear();

    //#region Para utilizar SwitchComments:
    //  Poner en la línea superior ' //*/ // título de lo que hace o se pretende hacer.'
    //   para descomentar el código: en la primera línea del SwitchComment añadir el primer '/'.
    //   para re-comentar el código: en la primera línea del SwitchComment quitar el primer '/'.
    //   Repetir en la línea inferior ' //*/ // título de lo que hace o se pretende hacer.'
    //   esto garantiza que al contraer el comentario se visualice lo que contiene.
    //   en modo comentado y contraído es fácil seleccionar el grupo y delete.
  //#endregion Para utilizar SwitchComments:

//#endregion INSTRUCCIONES:

//#region 1.   - Leer JSON
  /*/ //#region 1.- Leer JSON con let 'variable' = require('ruta')
     // NOTA: Teoría.
     // - require es una función sincrona y se llama solo una vez, lo que significa que las llamadas reciben un resultado en caché. Si el archivo está actualizado, no puede volver a leerlo con este método.
     // - Su archivo debe tener la extensión '.json', por lo que no puede ser tan flexible. Sin la extensión adecuada, require no trata el archivo como un archivo JSON.

    let jsonData = require( './data/personas.json' );
    console.log( jsonData );
    console.log( typeof ( jsonData ) );
  //*/ //end#region 1.- Leer JSON con let 'variable' = require('ruta')
//#endregion 1.   - Leer JSON

//#region 2.   - Leer JSON con require('fs')
  /*/ //Descomentar añadir una '/' al inicio, y para Recomentar quitarla.
      const fs = require( 'fs' );
      let dataRead = fs.readFileSync( './data/personas.json' );
  //*/ //Descomentar añadir una '/' al inicio, y para Recomentar quitarla.
//#endregion 2.   - Leer JSON con require('fs')

//#region 2.1. - Leer JSON con salida buffer
  /*/ // 2.1.  - Leer JSON con salida buffer
      const fs = require( 'fs' );
      let dataRead = fs.readFileSync( './data/personas.json' );
      console.log( dataRead );
  //*/ // 2.1.  - Leer JSON con salida buffer
//#endregion 2.1. - Leer JSON con salida buffer

//#region 2.2. - Leer JSON convertido en objeto JS
  /*/ // 2.2.- Leer JSON convertido en objeto JS
      const fs = require( 'fs' );
      let dataRead = fs.readFileSync( './data/personas.json' );
      let personas = JSON.parse( dataRead );
      console.log( personas );
      console.log( typeof ( personas ) );
  //*/ // 2.2.- Leer JSON convertido en objeto JS
//#endregion 2.2. - Leer JSON convertido en objeto JS

//#region 2.3. - Leer JSON accediendo a data.personas
  /*/ // 2.3.- Leer JSON accediendo a data.personas
      const fs = require( 'fs' );
      let dataRead = fs.readFileSync( './data/personas.json' );
      let personas = JSON.parse( dataRead ).personas;
      console.log( personas );
      console.log( typeof ( personas ) );
  //*/ // 2.3.- Leer JSON accediendo a data.personas
//#endregion 2.3. - Leer JSON accediendo a data.personas

//#region 2.4. - ¿Cómo...?
  /*/ // 2.4.- ¿Cómo...? Leer JSON accediendo al interior de data.personas[¿qué?]
      const fs = require( 'fs' );
      let dataRead = fs.readFileSync( './data/personas.json' );
      let personas = JSON.parse( dataRead ).personas;
      console.log( personas );
      console.log( typeof ( personas ) );
  //*/ // 2.4.- ¿Cómo...? Leer JSON accediendo al interior de data.personas[¿qué?]
//#endregion 2.4. - ¿Cómo...?

//#region 3.3. - Escribir en archivo JSON
/*/ // 3.3.- Escribir en archivo JSON
const fs = require( 'fs' );
let dataWrite = {
    "cursos": [
        {
            "codigo": "924813",
            "nombre": "Lenguaje"
        }, {
            "codigo": "824912",
            "nombre": "Matemática"
        }, {
            "codigo": "567132",
            "nombre": "Química"
        }, {
            "codigo": "392014",
            "nombre": "Programación"
        }
    ]
};

let jsonData = JSON.stringify( dataWrite );
console.log( jsonData );
console.log( typeof ( jsonData ) );

fs.writeFile( './data/cursos.json', jsonData, ( error ) => {
    if ( error ) {
        console.log( `Error: ${error}` );
    } else{
        console.log( "Archivo JSON generado correctamente" );
        }
} );

//*/ // 3.3.- Escribir en archivo JSON
//#endregion 3.3. - Escribir en archivo JSON
