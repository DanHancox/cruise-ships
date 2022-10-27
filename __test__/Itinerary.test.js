const Itinerary = require('../src/Itinerary')
const Port = require('../src/Port.js')

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })
    it('can have Ports', () => {
        const bristol = new Port('Bristol')
        const estonia = new Port('Estonia')

        const itinerary = new Itinerary([bristol, estonia]);
        expect(itinerary.ports).toEqual([bristol, estonia]);

    })
})