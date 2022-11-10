
class Ship
{
    constructor (Itinerary)
    {
        this.itinerary = Itinerary;
        this.currentPort = Itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
    }
    setSail() {
        const Itinerary = this.itinerary;
        const currentPortIndex = Itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === (Itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
    }     
        this.currentPort.removeShip(this);
        this.previousPort = this.currentPort;
        this.currentPort = null;
        
    }
    dock() {
        const Itinerary = this.itinerary;
        const previousPortIndex = Itinerary.ports.indexOf(this.previousPort);

        this.currentPort = Itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }
};

module.exports = Ship;

