const Port = require('../src/Port');

describe('Port', () => {
    describe('before', () => {
        let dover;
        let ship;
        beforeEach(() => {
            dover = new Port("Dover");
            ship = {};



        })
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
    it('initialises name property as a string', () => {     
        expect(dover.name.toString()).toBe("Dover");
    })
    it('Can add a ship', () => {

        dover.addShip(ship);

        expect(dover.ships).toContain(ship);

    })
    it('Can remove a ship', () => {
        
        const titanic = {};

        dover.addShip(ship)
        dover.addShip(titanic)
        dover.removeShip(titanic)

        expect(dover.ships).toEqual([ship]);
    })
})
})