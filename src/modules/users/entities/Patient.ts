import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('patient')
class Patient {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  genero: string;

  @Column({ name: 'data_nascimento' })
  dataNascimento: Date;

  @Column()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Patient };
