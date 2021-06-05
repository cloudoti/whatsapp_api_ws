import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    name: "first_name"
  })
  firstName: string;

  @Column({
    name: "last_name"
  })
  lastName: string;

  @Column({
    name: "is_active",
    default: true
  })
  isActive: boolean;
}