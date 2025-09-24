import { Transport } from '../../interface/ITransport'

export class Ship implements Transport {
	delivery(): void {
    console.log('Ship is delivering goods');
  }
}