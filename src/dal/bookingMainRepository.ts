import { BaseRepository } from "./baseRepository";
import { BookingMain } from '../entity/BookingMain';

export default class BookingMainRepository extends BaseRepository<BookingMain>{
    constructor() {
        super(BookingMain)
    }
} 