const Itinerary = require('../src/Itinerary')
const Port = require('../src/Port.js')

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })
})