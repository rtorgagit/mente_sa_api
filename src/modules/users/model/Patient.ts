import { v4 as uuidV4 } from 'uuid';

class Patient {
  id?: string;
  nome: string;
  cpf: string;
  email: string;
  genero: string;
  dataNascimento: Date;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Patient };
