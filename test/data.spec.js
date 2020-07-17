import { sortOrder } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('sortOrder', () => {
    it('is a object', () => {
        expect(typeof sortOrder).toBe('object')
    });
});


describe('sortOrder.chooseOrder', () => {
    it('ordena pokemones A-Z', () => {
        sortOrder.chooseOrder(data.pokemon, 'aToZ');
        expect(data.pokemon[0].name).toBe('abra');
    });

    it('ordena pokemones Z-A', () => {
        sortOrder.chooseOrder(data.pokemon, 'zToA');
        expect(data.pokemon[0].name).toBe('zubat');
    });

    it('ordena pokemones por número ascendente', () => {
        sortOrder.chooseOrder(data.pokemon, 'numberAsc');
        expect(data.pokemon[0].num).toBe('001');
    });

    it('ordena pokemones por número descendente', () => {
        sortOrder.chooseOrder(data.pokemon, 'numberDesc');
        expect(data.pokemon[0].num).toBe('251');
    });

    it('ordena pokemones por poder de combate ascendente', () => {
        sortOrder.chooseOrder(data.pokemon, 'pcAsc');
        expect(data.pokemon[0].stats['max-cp']).toBe('274');
    });

    it('ordena pokemons por poder de combate descendente', () => {
        sortOrder.chooseOrder(data.pokemon, 'pcDesc');
        expect(data.pokemon[0].stats['max-cp']).toBe('4178');
    });
});

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });