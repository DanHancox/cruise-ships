const Ship = require('../src/Ship.js')

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })
    it('initialises startingPort property as a string', () => {
        const Cruise = new Ship("Dover");
        expect(Cruise.startingPort).toBe("Dover");
    })
})

