import { v4 as uuidV4 } from 'uuid';

class Professional {
  id?: string;
  nome: string;
  crp: string;
  abordagem: string;
  contato: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Professional };
