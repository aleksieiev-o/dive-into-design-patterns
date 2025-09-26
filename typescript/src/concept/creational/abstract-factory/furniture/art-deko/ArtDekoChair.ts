import { IChair } from '../interface/IChair'

export class ArtDekoChair implements IChair {
  hasFourLegs(): boolean {
    return true;
  }

	sitOn(): void {
    console.log('Sitting on Art Deco chair');
  }
}