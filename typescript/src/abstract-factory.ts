import { CreateArtDekoFurnitureFactory } from './concept/creational/abstract-factory/furniture/art-deko/CreateArtDekoFurnitureFactory'
import { ICreateFurnitureFactory } from './concept/creational/abstract-factory/furniture/interface/ICreateFurnitureFactory'
import { CreateModernFurnitureFactory } from './concept/creational/abstract-factory/furniture/modern/CreateModernFurnitureFactory'
import { CreateVictorianFurnitureFactory } from './concept/creational/abstract-factory/furniture/victorian/CreateVictorianFurnitureFactory'

let needFurnitureType = 'art-deko'; // Example: 'art-deko', 'modern', 'victorian'
const init = (factory: ICreateFurnitureFactory) => {
		switch (needFurnitureType) {
		case 'modern': {
			const modernFactory = new CreateModernFurnitureFactory();
			init(modernFactory);
			break;
		}
		case 'victorian': {
			const victorianFactory = new CreateVictorianFurnitureFactory();
			init(victorianFactory);
			break;
		}
		case 'art-deko': {
			const artDekoFactory = new CreateArtDekoFurnitureFactory();
			init(artDekoFactory);
			break;
		}
		default: {
			console.error('Invalid furniture type.');
		}
	}
};
