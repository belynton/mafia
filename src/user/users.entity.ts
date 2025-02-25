import { UserRoom } from 'src/user-room/user-room.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({
    name: "avatar_url",
    nullable: true,
  })
  avatarUrl: string;

  @OneToMany(() => UserRoom, (userRoom) => userRoom.user)
  userRooms: UserRoom[];
}
