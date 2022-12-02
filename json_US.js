//#region INSTRUCTIONS:
// Add to top ' console.clear(); ' To clean your console.
console.clear();

    //#region To use SwitchComments:
    //  Put on top line ' //*/ // Title of what you do or intend to do.'
    //   To uncomment the code: in the first line of the SwitchComment add the first '/' to '//*/'.
    //   to re-comment the code: in the first line of the SwitchComment remove the first '/'.
    //   Repeat on the bottom line ' //*/ // title of what you do or intend to do.'
    //   This ensures that when you collapse the comment, what it contains is displayed.
    //   In commented and collapsed mode it is easy to select the group and delete.
  //#endregion To use SwitchComments:

//#endregion INSTRUCTIONS:

//#region 1.   - Read JSON
  /*/ //#region 1.- Read JSON with let 'variable' = require('rout')
     // NOTE: Theory.
     // - require It is a synchronous function and is called only once, which means that calls receive a cached result. if the file is up to date you cannot read it again by using this method.
     // - Your file should have the '.json' extension, so it can't be as flexible. Without the proper extension, require does not treat the file as a JSON file.

    let jsonData = require( './data/personas.json' );
    console.log( jsonData );
    console.log( typeof ( jsonData ) );
  //*/ //end#region 1.- Read JSON with let 'variable' = require('rout')
//#endregion 1.   - Read JSON

//#region 2.   - Read JSON with require('fs')
  /*/ Uncomment add a '/' to startup, and to Recomment remove it
      const fs = require( 'fs' );
      let dataRead = fs.readFileSync( './data/personas.json' );
  //*/ Uncomment add a '/' to startup, and to Recomment remove it;
//#endregion 2.   - Read JSON with require('fs')

//#region 2.1. - Read JSON with buffer output
/*/ // 2.1.  - Read JSON with buffer output
    const fs = require( 'fs' );
    let dataRead = fs.readFileSync( './data/personas.json' );
    console.log( dataRead );
//*/ // 2.1.  - Read JSON with buffer output
//#endregion 2.1. - Read JSON with buffer output

//#region 2.2. - Read JSON converted to JS object
/*/ // 2.2.- Read JSON converted to JS object
    const fs = require( 'fs' );
    let dataRead = fs.readFileSync( './data/personas.json' );
    let personas = JSON.parse( dataRead );
    console.log( personas );
    console.log( typeof ( personas ) );
//*/ // 2.2.- Read JSON converted to JS object
//#endregion 2.2. - Read JSON converted to JS object

//#region 2.3. - Read JSON accessingdata.personas
/*/ // 2.3.- Read JSON accessingdata.personas
    const fs = require( 'fs' );
    let dataRead = fs.readFileSync( './data/personas.json' );
    let personas = JSON.parse( dataRead ).personas;
    console.log( personas );
    console.log( typeof ( personas ) );
//*/ // 2.3.- Read JSON accessingdata.personas
//#endregion 2.3. - Read JSON accessingdata.personas

//#region 2.4. - How...?
/*/ // 2.4.- How...? Read JSON accessing the inside of data.personas[what?]
    const fs = require( 'fs' );
    let dataRead = fs.readFileSync( './data/personas.json' );
    let personas = JSON.parse( dataRead ).personas;
    console.log( personas );
    console.log( typeof ( personas ) );
//*/ // 2.4.- How...? Read JSON accessing the inside of data.personas[what?]
//#endregion 2.4. - How...?

//#region 3.3. - Write to JSON file
/*/ // 3.3.- Write to JSON file
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

//*/ // 3.3.- Write to JSON file
//#endregion 3.3. - Write to JSON file