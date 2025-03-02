
import _ from "underscore"



/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales   Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} regresa un nuevo deck de cartas
  */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    let deck = [];

    if (!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error("tiposDeCarta es necesario como array de strings");
    
    if (!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error("Tipos especiales es necesario como array de strings");




    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}