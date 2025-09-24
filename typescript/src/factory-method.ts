import { RoadLogistic } from './concept/creational/factory-method/logistic/road-logistic/RoadLogistic'
import { SeaLogistic } from './concept/creational/factory-method/logistic/sea-logistic/SeaLogistic';

const init = () => {
	const roadLogistic = new RoadLogistic();
	const seaLogistic = new SeaLogistic();

	roadLogistic.planDelivery();
	seaLogistic.planDelivery();

	const truck1 = roadLogistic.createTransport();
	const ship1 = seaLogistic.createTransport();

	truck1.delivery();
	ship1.delivery();
}

init();