import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSessionPatient1662663865623 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'session_patient',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'session_id', type: 'uuid', isNullable: false },
          { name: 'patient_id', type: 'uuid', isNullable: false },
        ],
        foreignKeys: [
          {
            name: 'FK_SessionSessionPatient',
            referencedTableName: 'session',
            referencedColumnNames: ['id'],
            columnNames: ['session_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FK_PatientSessionPatient',
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
    await queryRunner.dropTable('session_patient');
  }
}
