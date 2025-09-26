import { IChair } from '../interface/IChair'
import { ICreateFurnitureFactory } from '../interface/ICreateFurnitureFactory'
import { ISofa } from '../interface/ISofa'
import { ITable } from '../interface/ITable'
import { VictorianChair } from './VictorianChair'
import { VictorianSofa } from './VictorianSofa'
import { VictorianTable } from './VictorianTable'

export class CreateVictorianFurnitureFactory implements ICreateFurnitureFactory {
	createChair(): IChair {
    return new VictorianChair();
  }

	createSofa(): ISofa {
    return new VictorianSofa();
  }

	createTable(): ITable {
    return new VictorianTable();
  }
}