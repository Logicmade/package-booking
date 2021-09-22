import { Entity, Column, OneToMany, BeforeInsert, ManyToMany, JoinTable } from "typeorm";
import { Base } from "./Base";
import { BookingAvailability } from "./BookingAvailability";
import { BookingTransaction } from "./BookingTransaction";



@Entity()
export class BookingMain extends Base {

  @Column()
  restaurantId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  layoutModuleIncluded: boolean;

  @Column()
  blackListAfterNoShowCount: number;

  @Column()
  status: number; // 0 - passive, 1 - suspended, 2 - active

  @OneToMany(() => BookingAvailability, bookingAvailability => bookingAvailability.bookingMain)
  bookingAvailabilties: Promise<BookingAvailability[]>;


  @OneToMany(() => BookingTransaction, bookingTransaction => bookingTransaction.bookingMain)
  bookingTransactions: Promise<BookingTransaction[]>;

  @BeforeInsert()
  beforeInsertActions() {

  }

}