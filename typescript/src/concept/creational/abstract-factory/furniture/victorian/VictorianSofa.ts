import { ISofa } from '../interface/ISofa'

export class VictorianSofa implements ISofa {
	getLength(): number {
    return 30;
  }

	getTopMaterial(): string {
    return 'Material A';
  }
}