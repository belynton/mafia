import { UserRoom } from 'src/user-room/user-room.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UserRoom, (userRoom) => userRoom.role)
  userRooms: UserRoom[];
}
