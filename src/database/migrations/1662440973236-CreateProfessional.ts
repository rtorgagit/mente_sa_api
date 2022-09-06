import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfessional1662440973236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'professional',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'nome', type: 'varchar' },
          { name: 'crp', type: 'varchar' },
          { name: 'abordagem', type: 'varchar' },
          { name: 'contato', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('professional');
  }
}
