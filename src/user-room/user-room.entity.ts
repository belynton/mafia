import { Role } from 'src/role/role.entity';
import { Room } from 'src/room/room.entity';
import { User } from 'src/user/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, JoinColumn } from 'typeorm';

@Entity()
export class UserRoom {

  @PrimaryColumn({ name:"room_id" })
  roomId: number;

  @PrimaryColumn({ name:"user_id" })
  userId: number;

  @Column({ name:"role_id" })
  roleId: number;

  @OneToMany(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  users: User[];  

  @OneToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: "role_id" })
  role: Role;  

  @OneToOne(() => Room, (room) => room.id)
  @JoinColumn({ name: "room_id" })
  room: Room;  
}
