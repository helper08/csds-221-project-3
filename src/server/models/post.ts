import { BaseEntity, Entity, Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity()

export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'datetime' })
    date: Date;

    @Column()
    text: String

    @Column()
    poster: String
}