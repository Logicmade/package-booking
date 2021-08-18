import { BaseRepository } from "./baseRepository";
import { BookingMain } from '../entity/BookingMain';

export default class LayoutMainRepository extends BaseRepository<BookingMain>{
    constructor() {
        super(BookingMain)
    }
} 