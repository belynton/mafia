import { Role } from 'src/role/role.entity';
import { Room } from 'src/room/room.entity';
import { User } from 'src/user/users.entity';
import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';

@Entity()
export class UserRoom {

  @PrimaryColumn({ name:"room_id" })
  roomId: number;

  @PrimaryColumn({ name:"user_id" })
  userId: number;

  @Column({ 
    name:"role_id",
    nullable: true,
  })
  roleId: number;

  @ManyToOne(() => User, (user) => user.userRooms)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Room, (room) => room.userRooms)
  @JoinColumn({ name: "room_id" })
  room: Room;

  @ManyToOne(() => Role, (role) => role.userRooms)
  @JoinColumn({ name: "role_id" })
  role: Role;
}
