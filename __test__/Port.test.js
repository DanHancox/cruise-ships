const Port = require('../src/Port');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
    it('initialises name property as a string', () => {
        const Dover = new Port("Dover");
        expect(Dover.name.toString()).toBe("Dover");
    })
})