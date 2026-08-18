// Factory Pattern

class CreditCard {
    pay(amount) {
        console.log(`Paid ₹${amount} using Credit Card`);
    }
}

class UPI {
    pay(amount) {
        console.log(`Paid ₹${amount} using UPI`);
    }
}

class Cash 
{
    pay(amount) {
        console.log(`Paid ₹${amount} using Cash`);
    }
}

class PaymentFactory {

    static createPayment(type) 
    {
        switch (type) 
        {
            case "credit":
                return new CreditCard();

            case "upi":
                return new UPI();

            case "cash":
                return new Cash();

            default:
                throw new Error("Invalid Payment");
        }
    }
}

const payment = PaymentFactory.createPayment("upi");
payment.pay(600);