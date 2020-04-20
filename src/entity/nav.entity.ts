import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
@Entity()
export class Nav {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  content: string;

  @Column('int')
  price: number;

  @Column('int')
  status: number;
}