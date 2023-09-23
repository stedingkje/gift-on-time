// LoyaltyPoint.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class LoyaltyPoint {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.loyaltyPoints)
  user: User;

  @Column()
  points: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  earned_at: Date;

  @Column({ nullable: true })
  description: string;
}
