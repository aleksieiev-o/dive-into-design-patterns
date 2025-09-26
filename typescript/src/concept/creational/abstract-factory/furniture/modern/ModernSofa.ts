import { ISofa } from '../interface/ISofa'

export class ModernSofa implements ISofa {
	getLength(): number {
    return 30;
  }

	getTopMaterial(): string {
    return 'Material A';
  }
}