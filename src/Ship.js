const Port = require("./Port");

class Ship
{
    constructor (currentPort)
    {
        this.currentPort = currentPort;
        this.passengers = [];
    }
    setSail() {

    }
    dock(port) {
        this.currentPort = port;
    }
};

module.exports = Ship;
// getters for passengers
