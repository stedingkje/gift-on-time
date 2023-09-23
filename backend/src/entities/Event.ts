// Event.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Gift } from "./Gift";

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.events)
  user!: User;

  @Column()
  name!: string;

  @Column()
  date!: Date;

  @Column()
  location!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at!: Date;

  @OneToMany(() => Gift, (gift) => gift.event)
  gifts!: Gift[];
}
