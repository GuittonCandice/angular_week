import { Pokemon } from './Pokemon';

function whichOneAttacks (a: Pokemon, b: Pokemon) {
    if(a.speed > b.speed) {
        return a;
    }
    return b;
}
module.exports = whichOneAttacks;
