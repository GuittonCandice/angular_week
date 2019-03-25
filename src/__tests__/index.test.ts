import {Pokemon} from "../Pokemon";

const whichOneAttacks = require('../index');

test('which pokemon attacks first', () => {
    const a = new Pokemon('a', 30);
    const b = new Pokemon('b', 14);
    expect(whichOneAttacks(a, b)).toBe(a);
});
