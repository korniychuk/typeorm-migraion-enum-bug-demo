import * as path from 'path';

module.exports = {
  host: 'localhost',
  port: 5432,
  username: 'test_db_user',
  password: '111',
  database: 'test_db',

  type: 'postgres',
  synchronize: false,

  entities: [path.join(__dirname, 'src/**/*.entity.ts')],
  migrations: [path.join(__dirname, 'src/migrations/*.ts')],
  migrationsTableName: 'Migrations',
  cli: {
    migrationsDir: 'src/migrations',
  },
};
