import { IChair } from '../interface/IChair'
import { ICreateFurnitureFactory } from '../interface/ICreateFurnitureFactory'
import { ISofa } from '../interface/ISofa'
import { ITable } from '../interface/ITable'
import { ModernChair } from './ModernChair'
import { ModernSofa } from './ModernSofa'
import { ModernTable } from './ModernTable'

export class CreateModernFurnitureFactory implements ICreateFurnitureFactory {
	createChair(): IChair {
    return new ModernChair();
  }

	createSofa(): ISofa {
    return new ModernSofa();
  }

	createTable(): ITable {
    return new ModernTable();
  }
}