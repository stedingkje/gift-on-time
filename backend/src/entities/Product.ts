// Product.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { AffiliatePartner } from "./AffiliatePartner";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => AffiliatePartner)
  affiliatePartner!: AffiliatePartner;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  image_url!: string;

  @Column("float")
  price!: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  added_at!: Date;
}
