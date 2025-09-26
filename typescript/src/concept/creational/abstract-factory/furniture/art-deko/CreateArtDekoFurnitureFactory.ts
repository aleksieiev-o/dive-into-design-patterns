import { IChair } from '../interface/IChair'
import { ICreateFurnitureFactory } from '../interface/ICreateFurnitureFactory'
import { ISofa } from '../interface/ISofa'
import { ITable } from '../interface/ITable'
import { ArtDekoChair } from './ArtDekoChair'
import { ArtDekoSofa } from './ArtDekoSofa'
import { ArtDekoTable } from './ArtDekoTable'

export class CreateArtDekoFurnitureFactory implements ICreateFurnitureFactory {
	createChair(): IChair {
    return new ArtDekoChair();
  }

	createSofa(): ISofa {
    return new ArtDekoSofa();
  }

	createTable(): ITable {
    return new ArtDekoTable();
  }
}