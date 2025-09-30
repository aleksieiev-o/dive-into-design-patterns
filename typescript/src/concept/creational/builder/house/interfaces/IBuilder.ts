export interface IBuilder {
	reset(): void;

	// Here must be all possible methods to build an object
	buildBasement: () => void;
	buildWalls: () => void;
	buildRoof: () => void;
	buildWindows: () => void;
	buildDoors: () => void;
	buildHall: () => void;
	buildTower: () => void;
}