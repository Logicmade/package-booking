import { BaseRepository } from "./baseRepository";
import { BookingTransaction} from '../entity/BookingTransaction';

export default class BookingTransactionRepository extends BaseRepository<BookingTransaction>{
    constructor() {
        super(BookingTransaction)
    }
} 