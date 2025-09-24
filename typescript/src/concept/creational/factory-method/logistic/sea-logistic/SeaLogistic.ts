import { Transport } from '../interface/ITransport'
import { Logistic } from '../Logistic'
import { Ship } from './transport/Ship'

export class SeaLogistic extends Logistic {
	planDelivery(): void {
    console.log('Planning delivery in the sea');
  }

	createTransport(): Transport {
    return new Ship();
  }
}