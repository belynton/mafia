import { Role } from 'src/role/role.entity';
import { Room } from 'src/room/room.entity';
import { User } from 'src/user/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, JoinColumn } from 'typeorm';

@Entity()
export class UserRoom {

  @PrimaryColumn()
  roomId: number;

  @OneToMany(() => User, (user) => user.id)
  users: User[];  

  @OneToOne(() => Role, (role) => role.id)
  role: Role;  

  @OneToOne(() => Room, (room) => room.id)
  @JoinColumn({ name: "roomId" })
  room: Room;  
}
