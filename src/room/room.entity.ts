import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('player_count')
  playerCount: number;
}
