import { validate } from 'class-validator';
import { BookingMain } from '../entity/BookingMain'
import ReturnValue from '../models/ReturnValue';
import BookingMainRepository from '../dal/bookingMainRepository';
import BookingTransactionRepository from '../dal/bookingTransactionRepository'
import { Like } from 'typeorm';
import { BookingTransaction } from '../entity/BookingTransaction';
import moment from 'moment';
import { BookingAvailability } from '../entity/BookingAvailability';
import BookingAvailabilityRepository from '../dal/bookingAvailabilityRepository';
import { AvailabilityModel } from '../models/AvailabilityModel';

export default class BookingModule {
    private bookingMainRepository: BookingMainRepository;
    private bookingAvailabilityRepository: BookingAvailabilityRepository;
    constructor() {
        this.bookingMainRepository = new BookingMainRepository();
        this.bookingAvailabilityRepository = new BookingAvailabilityRepository();
    }

    public async BookingMainSave(bookingMain: BookingMain): Promise<ReturnValue> {
        let result: BookingMain;
        validate(bookingMain).then(errors => {
            return new ReturnValue(false, errors, null, null);
        })
        try {
            if (bookingMain.id) {
                result = await this.bookingMainRepository.update(bookingMain);
            } else {
                result = await this.bookingMainRepository.create(bookingMain);
            }
        } catch (error) {
            //TODO:log the error
            return new ReturnValue(false, null, error, null);
        }
        return new ReturnValue(true, null, null, result);
    }
    public async BookingMainGet(restaurantId: string): Promise<ReturnValue> {
        const bookingMains = await this.bookingMainRepository.find({ 'restaurantId': restaurantId });
        if (bookingMains) {
            return new ReturnValue(true, null, null, bookingMains[0]);
        } else {
            return new ReturnValue(false, null, ['No Booking settings found for this restaurant'], null);
        }
    }
    public async AvailabilityCreate(model: AvailabilityModel): Promise<ReturnValue> {
        var main = await this.bookingMainRepository.findOne(model.bookingMainID);
        if (main) {

        }
        return new ReturnValue(false, null, ["Main booking settings not found with thi id"], null);
    }

    public async AvailabilitySave(bookingAvailability: BookingAvailability): Promise<ReturnValue> {
        let result: BookingAvailability;
        try {
            result = await this.bookingAvailabilityRepository.update(bookingAvailability);
            return new ReturnValue(true, null, null, result);
        } catch (err) {
            return new ReturnValue(false, null, [err], null);
        }
    }

    public async Book(restaurantId: string, booking: BookingTransaction): Promise<ReturnValue> {
        let retVal: ReturnValue;
        const bookingMains = await this.bookingMainRepository.find({ 'restaurantId': restaurantId })
        if (bookingMains) {
            // check bookingMain to see if it can be booked
            const main = bookingMains[0];
            if (await this.IsRestaurantBookable(main)) {

            }
            // check availability 


            // check other bookings to see if it's available
        }
        retVal = new ReturnValue(false, null, ["No booking settings found for given restaurantId"], null);
        return retVal;
    }

    public async IsRestaurantBookable(bookingMain: BookingMain): Promise<boolean> {
        let retVal = false;
        if (bookingMain.status == 2) {
            retVal = true;
        }
        return retVal;
    }

    public async IsAvailable(bookingMain: BookingMain, booking: BookingTransaction): Promise<boolean> {
        let retVal = true;
        const today = new Date();
        const availablities = await bookingMain.bookingAvailabilties;
        const slaveAvailability = availablities.find(k =>
            (k.status == 1)
            && (k.isMaster == false)
            && (moment(k.validFrom) <= moment(booking.bookingDate))
            && (moment(k.validUntil) >= moment(booking.bookingDate))
        )
        if (slaveAvailability){

        }



        return retVal;
    }

}