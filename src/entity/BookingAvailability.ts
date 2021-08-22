import { Entity, Column, OneToMany, BeforeInsert, OneToOne, JoinTable, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { BookingMain } from "./BookingMain";


@Entity()
export class BookingAvailability extends Base {

 

  @Column()
  availabilityName: string;

  @Column()
  description: string;

  @Column()
  validFrom!: Date;

  @Column()
  validUntil!: Date;

  @Column()
  bookingStartDate!: Date;

  @Column()
  bookingEndDate!: Date;

  @Column()
  startTime!: Date;

  @Column()
  endTime!: Date;
 
  @Column()
  isMaster:boolean;

  @Column()
  maxCapacity:number;

  @Column()
  status:number; // 0 : passive, 1 :active

  @Column()
  stopBookingCapacity:number;

  @Column()
  maxPaxToAutoConfirm:number;

  @Column()
  bookingInterval:number; // 15-> 9:00, 9:15, 9:30 ...

  @Column()
  maxTableOccupationMinutePerPax:number;

  @ManyToOne(() => BookingMain, bookingMain => bookingMain.bookingAvailabilties)
  bookingMain: Promise<BookingMain>;
}