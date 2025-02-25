import { UserRoom } from 'src/user-room/user-room.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({
    name: "avatar_url"
  })
  avatarUrl: string;

  @ManyToOne(() => UserRoom, (UserRoom) => UserRoom.users)
  users: UserRoom;
}
