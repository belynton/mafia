import { UserRoom } from 'src/user-room/user-room.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export enum StatusType {
    OPEN = 'USER',
    CLOSED = 'CHANNEL',
    IN_GAME = 'IN_GAME',
  }

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: StatusType,
    name: 'status_type'
  })
  status: StatusType;

  @Column({
    name: "player_count",
    nullable: true,
  })
  playerCount: number;

  @OneToMany(() => UserRoom, (userRoom) => userRoom.room)
  userRooms: UserRoom[];
}
