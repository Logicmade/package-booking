import { validate } from 'class-validator';
import { BookingMain } from '../entity/BookingMain'
import ReturnValue from '../models/ReturnValue';
import BookingMainRepository from '../dal/bookingMainRepository';
import { Like } from 'typeorm';

export default class Booking {
    private layoutMainRepository: BookingMainRepository;
    constructor() {
        this.layoutMainRepository = new BookingMainRepository();
    }

    public async LayoutMainAdd(layout: BookingMain): Promise<ReturnValue> {
        let result: BookingMain;
        validate(layout).then(errors => {
            return new ReturnValue(false, errors, null, null);
        })
        try {
            result = await this.layoutMainRepository.create(layout);
        } catch (error) {
            return new ReturnValue(false, null, error, null);
        }
        return new ReturnValue(true, null, null, result);
    }


}