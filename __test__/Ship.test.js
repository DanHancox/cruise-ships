const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })
    
    it('initialises startingPort property as a string', () => {
        const Cruise = new Ship("Dover");
        expect(Cruise.currentPort).toBe("Dover");
    })
    it('can set sail from a port', () => {
        const bigBoat = new Ship();
        bigBoat.setSail();
        expect(bigBoat.currentPort).toBeFalsy();
    })
    it('Has a currentPort', () => {
        const port = new Port ("Dover")
        const ship = new Ship(port)
        expect(ship.currentPort).toBe(port)
    })
    it('can change ports and dock', () => {
        const Dover = new Port ("Dover")
        const ship = new Ship(Dover)

        const brighton = new Port("Brighton")
        ship.dock(brighton);

        expect(ship.currentPort).toEqual(brighton)
    })   
})

