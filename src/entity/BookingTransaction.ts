import { Min, IsNotEmpty, isEmail } from "class-validator";
import { Entity, Column, OneToMany, BeforeInsert, ManyToOne, JoinTable } from "typeorm";
import { Base } from "./Base";

import { BookingMain } from "./BookingMain";



@Entity()
export class BookingTransaction extends Base {

  @Column()
  @IsNotEmpty()
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

  @Column('boolean', {default:false})
  noShow: boolean = false;

  @ManyToOne(() => BookingMain, bookingMain => bookingMain.bookingTransaction)
  bookingMain: Promise<BookingMain>;

  @BeforeInsert()
  beforeInsertActions() {

  }

}