import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ExchangeCode {
  /* eslint-disable no-multi-spaces */
  Binance  = 'binance',
  Bitfinex = 'bitfinex',
  BitMEX   = 'bitmex',
  Bitstamp = 'bitstamp',
  Bittrex  = 'bittrex',
  CexIO    = 'cexio',
  HitBTC   = 'hitbtc',
  Kraken   = 'kraken',
  /* eslint-enable no-multi-spaces */
}

@Entity()
export class Exchange {

  @PrimaryGeneratedColumn({ type: 'smallint', unsigned: true })
  public id!: number;

  /** Unique identifier to find exchange from the code */
  @Column({ type: 'enum', enum: ExchangeCode, enumName: 'EExchangeCode', unique: true })
  public code!: ExchangeCode;

  /**
   * Human readable exchange name
   */
  @Column({ length: 255 })
  public name!: string;
}
