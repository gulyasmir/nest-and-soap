import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palindrome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;
}
