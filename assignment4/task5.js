//    Observer / Pub-Sub

class EventBus {

    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {

        if (!this.events[event])
            this.events[event] = [];

        this.events[event].push(callback);
    }

    publish(event, data) {

        if (!this.events[event]) return;

        this.events[event].forEach(callback => callback(data));

    }

}

const bus = new EventBus();

bus.subscribe("orderPlaced", order =>
    console.log("Inventory Updated:", order.id)
);

bus.subscribe("orderPlaced", order =>
    console.log("Email Sent:", order.customer)
);

bus.subscribe("orderPlaced", order =>
    console.log("Analytics Recorded:", order.id)
);

bus.publish("orderPlaced", {id: 101, customer: "Divya"});