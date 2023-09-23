// Referral.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "./User";

@Entity()
export class Referral {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.referralsMade)
  referrer!: User;

  @ManyToOne(() => User, (user) => user.referralsReceived)
  referred!: User;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  referral_date!: Date;
}
