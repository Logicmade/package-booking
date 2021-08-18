import { BaseRepository } from "./baseRepository";
import { BookingAvailability} from '../entity/BookingAvailability';

export default class BookingAvailabilityRepository extends BaseRepository<BookingAvailability>{
    constructor() {
        super(BookingAvailability)
    }
} 