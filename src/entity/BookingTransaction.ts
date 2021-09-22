import { Entity, Column, OneToMany, BeforeInsert, ManyToOne, JoinTable } from "typeorm";
import { Base } from "./Base";

import { BookingMain } from "./BookingMain";



@Entity()
export class BookingTransaction extends Base {

  @Column()
  name: string;

  @Column()
  email: string;
 
  @Column()
  telephone: string;

  @Column()
  bookingDate: Date;

  @Column()
  bookingTime: string; // "00:00"

  @Column()
  pax:number;

  @Column()
  remarks: string;

  @Column()
  confirmed:boolean;

  @Column()
  stauts: number; //0 - unconfirmed , 1 - confirmed, 2 - noshow, 3 - cancelled by customer, 4 - cancelled by restaurant , 5 -happened

  @Column()
  statusRemarks: string; // cancelleation reason, etc


  @Column()
  resourceOfBooking: string; // web, phone, person, inhouse, walkin

  @Column()
  bookedBy: string; //if an employee made it who is it?

  @Column()
  layoutMainTableId: string;

  @ManyToOne(() => BookingMain, bookingMain => bookingMain.bookingTransactions)
  bookingMain: Promise<BookingMain>;

  @BeforeInsert()
  beforeInsertActions() {

  }

}