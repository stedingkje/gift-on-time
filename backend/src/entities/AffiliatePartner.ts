// AffiliatePartner.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AffiliatePartner {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  api_endpoint!: string;

  @Column()
  api_key!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  added_at!: Date;
}
