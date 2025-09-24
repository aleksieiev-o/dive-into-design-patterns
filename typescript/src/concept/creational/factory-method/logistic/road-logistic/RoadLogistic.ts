import { Transport } from '../interface/ITransport'
import { Logistic } from '../Logistic'
import { Truck } from './transport/Truck'

export class RoadLogistic extends Logistic {
	planDelivery(): void {
    console.log('Planning delivery on road');
  }

  createTransport(): Transport {
    return new Truck();
  }
}