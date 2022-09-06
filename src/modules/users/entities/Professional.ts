import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('professional')
class Professional {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  crp: string;

  @Column()
  abordagem: string;

  @Column()
  contato: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Professional };
