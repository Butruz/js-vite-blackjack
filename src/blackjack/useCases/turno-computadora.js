

import { crearCartaHtml, pedirCarta, valorCarta} from './';


/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que debe superar la computadora
 * @param {Array<HTMLElement>} puntosHTML ELEMENTOS HTML que muestran los puntos
 * @param {Array<HTMLElement>} divCartasComputadora elemento HTML que muestran las cartas
 * @param {Array<String>} deck
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,
     deck = [] ) => {

    if (!puntosMinimos) throw new Error('El parametro puntosMinimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntossHTML son necesarios');
    


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}