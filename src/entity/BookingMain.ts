import { Min, IsNotEmpty } from "class-validator";
import { Entity, Column, OneToMany, BeforeInsert, ManyToMany, JoinTable } from "typeorm";
import { Base } from "./Base";
import { BookingAvailability } from "./BookingAvailability";
import { BookingTransaction } from "./BookingTransaction";



@Entity()
export class BookingMain extends Base {

  @Column()
  @IsNotEmpty()
  restaurantId: string;

  @Column()
  @IsNotEmpty()
  layoutModuleIncluded: boolean;

  @Column()
  blackListAfterNoShowCount: number;

  @Column()
  status: number; // 0 - passive, 1 - active, 2 - suspended

  @OneToMany(() => BookingAvailability, bookingAvailability => bookingAvailability.bookingMain)
  bookingAvailabilty: Promise<BookingAvailability[]>;


  @OneToMany(() => BookingTransaction, bookingTransaction => bookingTransaction.bookingMain)
  bookingTransaction: Promise<BookingTransaction[]>;

  @BeforeInsert()
  beforeInsertActions() {

  }

}