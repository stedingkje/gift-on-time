// User.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Reminder } from "./Reminder";
import { Event } from "./Event";
import { LoyaltyPoint } from "./LoyaltyPoint";
import { Referral } from "./Referral";
import { WishlistItem } from "./WishlistItem";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  password!: string; // This should be hashed before storing

  @Column({ type: "date", nullable: true })
  birthday!: Date;

  @Column({ nullable: true })
  address!: string;

  @Column({ nullable: true })
  city!: string;

  @Column({ nullable: true })
  postalCode!: string;

  @Column({ nullable: true })
  country!: string;

  @OneToMany(() => Reminder, (reminder) => reminder.user)
  reminders!: Reminder[];

  @OneToMany(() => Event, (event) => event.user)
  events!: Event[];

  @OneToMany(() => LoyaltyPoint, (loyaltyPoint) => loyaltyPoint.user)
  loyaltyPoints!: LoyaltyPoint[];

  @OneToMany(() => Referral, (referral) => referral.referrer)
  referralsMade!: Referral[];

  @OneToMany(() => Referral, (referral) => referral.referred)
  referralsReceived!: Referral[];

  @OneToMany(() => WishlistItem, (wishlistItem) => wishlistItem.user)
  wishlistItems!: WishlistItem[];
}
