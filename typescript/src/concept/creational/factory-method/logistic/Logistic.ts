import { ILogistic } from './interface/ILogistic'
import { Transport } from './interface/ITransport'

export abstract class Logistic implements ILogistic {
	abstract createTransport(): Transport;

	planDelivery() {
		console.log('Default planning delivery...');
	}
}