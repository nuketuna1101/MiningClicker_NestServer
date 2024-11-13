// =================================================
// user.entity.ts : 유저 로그인 정보
//=================================================
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userid: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({ type: 'timestamp' })
    last_visited: Date;
}