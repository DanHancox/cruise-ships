const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
const Itinerary = require('../src/Itinerary')

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })
    
    it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
    
        expect(ship.currentPort).toBe(port);
    });
    
    it('can set sail from a port', () => {
        
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })
    it('Has a currentPort', () => {
        const port = new Port ("Dover")
        const ship = new Ship(port)
        expect(ship.currentPort).toBe(port)
    })
    it('can change ports and dock', () => {
        const dover = new Port ("Dover")
        const brighton = new Port("Brighton")
        const itinerary = new Itinerary([dover, brighton])

        const ship = new Ship(itinerary)

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toEqual(brighton);
        expect(dover.ships).toContain(ship);
    })
    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
    it('gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);
    
        expect(dover.ships).toContain(ship);
    });
})

