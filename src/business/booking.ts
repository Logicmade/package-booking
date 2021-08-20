import { validate } from 'class-validator';
import { BookingMain } from '../entity/BookingMain'
import ReturnValue from '../models/ReturnValue';
import BookingMainRepository from '../dal/bookingMainRepository';
import { Like } from 'typeorm';

export default class Booking {
    private bookingMainRepository: BookingMainRepository;
    constructor() {
        this.bookingMainRepository = new BookingMainRepository();
    }

    public async BookingMainSave(layout: BookingMain): Promise<ReturnValue> {
        let result: BookingMain;
        validate(layout).then(errors => {
            return new ReturnValue(false, errors, null, null);
        })
        try {
            result = await this.bookingMainRepository.create(layout);
        } catch (error) {
            return new ReturnValue(false, null, error, null);
        }
        return new ReturnValue(true, null, null, result);
    }


}