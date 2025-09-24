import { Transport } from './ITransport'

export interface ILogistic {
	createTransport: () => Transport;
	planDelivery: () => void;
}