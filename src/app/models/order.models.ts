export class Order {
    title: string;
    quantity: number;
    date: Date;
    contact: string;

    constructor(title: string, quantity: number, date: Date, contact: string) {
        this.title = title;
        this.quantity = quantity;
        this.date = date
        this.contact = contact;
    }
}

