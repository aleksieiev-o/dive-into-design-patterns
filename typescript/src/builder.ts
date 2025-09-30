import { CasteBuilder } from './concept/creational/builder/house/builders/CastleBuilder'
import { HotelBuilder } from './concept/creational/builder/house/builders/HotelBuilder'
import { Director } from './concept/creational/builder/house/Director'
import { Castle } from './concept/creational/builder/house/products/Castle'
import { Hotel } from './concept/creational/builder/house/products/Hotel'

const init = () => {
	// Hotel
	const hotelBuilder = new HotelBuilder();
	const directorHotelBuilder = new Director(hotelBuilder);
	directorHotelBuilder.buildHotel();
	const hotelOne: Hotel = hotelBuilder.getResult();
	console.log(hotelOne.hall);

	// Castle
	const castleBuilder = new CasteBuilder();
	const directorCastleBuilder = new Director(castleBuilder);
	directorCastleBuilder.buildHotel();
	const castleOne: Castle = castleBuilder.getResult();
	console.log(castleOne.towers);
}

init();