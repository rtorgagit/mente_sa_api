import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePatient1662441593619 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'patient',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'nome', type: 'varchar' },
          { name: 'cpf', type: 'varchar' },
          { name: 'email', type: 'varchar' },
          { name: 'genero', type: 'varchar' },
          { name: 'data_nascimento', type: 'date' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patient');
  }
}
