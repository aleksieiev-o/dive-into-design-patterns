import { ITable } from '../interface/ITable'

export class ModernTable implements ITable {
	getShape(): string {
    return 'Round';
  }

	getHeight(): number {
    return 2.5;
  }
}