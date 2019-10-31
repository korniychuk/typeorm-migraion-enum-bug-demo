import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1572485973136 implements MigrationInterface {
  name = 'init1572485973136';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
        `CREATE TYPE "EExchangeCode" AS ENUM('binance', 'bitfinex', 'bitmex', 'bitstamp', 'bittrex', 'cexio', 'hitbtc', 'kraken')`,
        undefined,
    );
    await queryRunner.query(`CREATE TABLE "exchange"
                             (
                                 "id"   SMALLSERIAL            NOT NULL,
                                 "code" "EExchangeCode"        NOT NULL,
                                 "name" CHARACTER VARYING(255) NOT NULL,
                                 CONSTRAINT "UQ_0ca9da825c24810cc46f103c201" UNIQUE ("code"),
                                 CONSTRAINT "PK_cbd4568fcb476b57cebd8239895" PRIMARY KEY ("id")
                             )`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "exchange"`, undefined);
    await queryRunner.query(`DROP TYPE "EExchangeCode"`, undefined);
  }

}
