import { DataBase } from './concept/creational/singleton/database-example/Database'

const init = () => {
	const database = DataBase.getInstance();
	const databaseTwo = DataBase.getInstance();

	console.log(database === databaseTwo); // Output: true
	

	console.log(database.query('SELECT * FROM users'));
}

init();