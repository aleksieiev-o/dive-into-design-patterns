import { IChair } from '../interface/IChair'

export class ModernChair implements IChair {
  hasFourLegs(): boolean {
    return true;
  }

	sitOn(): void {
    console.log('Sitting on Art Deco chair');
  }
}