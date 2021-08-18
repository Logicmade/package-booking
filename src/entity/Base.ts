import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export abstract class Base {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column('boolean', {default:false})
  isDeleted: boolean = false;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
  
  @DeleteDateColumn()
  deletedAt?: Date;

  
}