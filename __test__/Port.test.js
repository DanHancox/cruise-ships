const Port = require('../src/Port');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
    it('initialises name property as a string', () => {
        const Dover = new Port("Dover");
        expect(Dover.name.toString()).toBe("Dover");
    })
    it('Can add a ship', () => {
        const port = new Port ('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);

    })
    it('Can remove a ship', () => {
        const port = new Port ('Dover');
        const ship = {};
        const titanic = {};

        port.addShip(ship)
        port.addShip(titanic)
        port.removeShip(titanic)

        expect(port.ships).toEqual([ship]);
    })

})