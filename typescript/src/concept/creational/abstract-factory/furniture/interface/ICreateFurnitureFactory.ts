import { IChair } from './IChair'
import { ISofa } from './ISofa'
import { ITable } from './ITable'

export interface ICreateFurnitureFactory {
	createChair: () => IChair;
	createSofa: () => ISofa;
	createTable: () => ITable;
}