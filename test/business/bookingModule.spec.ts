import request from "supertest";
import { expect } from 'chai';

import BookingModule from "../../src/business/bookingModule";
import { BookingMain } from "../../src/entity/BookingMain";
import { BookingAvailability } from '../../src/entity/BookingAvailability';

describe('Booking Module', function () {
    let sut: BookingModule; 
    
    let bookingMain: BookingMain;
    let availlabilty2: BookingAvailability;
    let availabilities : BookingAvailability[];

    before(async function () {
        sut = new BookingModule();
        //BookingMain
        bookingMain = new BookingMain();
        bookingMain.isDeleted = false;
        bookingMain.id = 'test';
        bookingMain.layoutModuleIncluded = false;
        bookingMain.restaurantId = 'test';

        //BookingAvailability 
        availabilities = new Array();

        let availability = new BookingAvailability();
        availability.isMaster = true
        availability.maxCapacity = 10;
        availability.maxPaxToAutoConfirm = 6;
        availability.maxTableOccupationMinutePerPax = 90;
        availability.startTime = new Date
        availabilities.push(availability);

        bookingMain.bookingAvailabilties = Promise.resolve(availabilities);
 
    });

    it('IsRestaurantBookable returns false if status is passive', async function () {
       
        const result = await sut.IsRestaurantBookable(bookingMain);
        expect(result).to.equal(false);
    });

 
});
