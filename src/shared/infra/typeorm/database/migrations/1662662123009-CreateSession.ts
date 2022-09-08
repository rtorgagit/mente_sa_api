import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSession1662662123009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'session',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'professional_id', type: 'uuid', isNullable: false },
          { name: 'patient_id', type: 'uuid', isNullable: false },
          { name: 'start_at', type: 'timestamp', isNullable: false },
          { name: 'end_at', type: 'timestamp', isNullable: false },
          { name: 'status', type: 'varchar' },
          { name: 'tema_abordado', type: 'varchar' },
          { name: 'tipo_agendamento', type: 'varchar' },
          { name: 'tipo_sessao', type: 'varchar' },
        ],
        foreignKeys: [
          {
            name: 'FK_ProfessionalSession',
            referencedTableName: 'professional',
            referencedColumnNames: ['id'],
            columnNames: ['professional_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FK_PatientSession',
            referencedTableName: 'patient',
            referencedColumnNames: ['id'],
            columnNames: ['patient_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('session');
  }
}
