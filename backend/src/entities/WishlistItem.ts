// WishlistItem.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class WishlistItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Product)
  product!: Product;

  @Column({ default: false })
  purchased!: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  added_at!: Date;
}
