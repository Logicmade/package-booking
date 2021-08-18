import "reflect-metadata";
import { createConnection } from "typeorm";
import Booking from './business/booking';

import { BookingMain } from './entity/BookingMain';
import { BookingAvailability } from './entity/BookingAvailability';

import ReturnValue from './models/ReturnValue';


class BookingModule {
    private booking: Booking;

    constructor() {
        // createConnection().then(async connection => {});
        this.booking = new Booking;

    }
    // Main
    // public async LayoutMainList(restaurantId: string): Promise<LayoutMain[]> {
    //     await createConnection();
    //     return await this.layout.LayoutMainList(restaurantId);
    // }



}

export = BookingModule;

// console.log('test started')
// var ll = new LayoutModule();
// ll.LayoutTableList('705cc859-4378-4d12-acd1-039d5810303d').then(k => console.log(k));
 //ll.LayoutMainDelete('cb63b6dd-7c0f-441e-b11b-fe6432be7f87').then(k=> console.log(k));
