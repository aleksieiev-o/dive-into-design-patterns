import { Transport } from '../../interface/ITransport'

export class Truck implements Transport {
	delivery(): void {
    console.log('Truck is delivering goods');
  }
}