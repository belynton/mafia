import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('login')
  login: string;

  @Column('password')
  password: string;

  @Column('avatar_url')
  avatarUrl: string;
}
