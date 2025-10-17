import { RoundHole } from './concept/structural/adapter/shape-adapter/RoundHole'
import { RoundPeg } from './concept/structural/adapter/shape-adapter/RoundPeg'
import { SquarePeg } from './concept/structural/adapter/shape-adapter/SquarePeg'
import { SquarePegAdapter } from './concept/structural/adapter/shape-adapter/SquarePegAdapter'

const init = () => {
	const roundHole = new RoundHole(5);

	const roundPegBig = new RoundPeg(12);
	const roundPegSmall = new RoundPeg(3);

	const squarePegBig = new SquarePeg(7);
	const squarePegSmall = new SquarePeg(2);

	console.log(roundHole.getRadius()); // Output: 5
	
	console.log(roundHole.isFit(roundPegBig)); // Output: false
	console.log(roundHole.isFit(roundPegSmall)); // Output: true

	// console.log(roundHole.isFit(squarePegBig)); // Type error !

	const squarePegAdapterBig = new SquarePegAdapter(squarePegBig);
	const squarePegAdapterSmall = new SquarePegAdapter(squarePegSmall);

	console.log(roundHole.isFit(squarePegAdapterBig)); // Output: false
	console.log(roundHole.isFit(squarePegAdapterSmall)); // Output: true
};

init();
