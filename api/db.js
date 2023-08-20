import mysql from 'mysql';

export const db = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'wil',
	password: 'waxt',
	database: 'todaysblogger',
});

db.connect(function (err) {
	if (err) {
		console.log('ERROR!! occurred while connecting to MySQL Server.');
		console.log('error:' + err.message);
	} else {
		console.log('Connection with Mysql successful!');
	}
});

// connection string: root@localhost:3306
// JDBC string: jdbc:mysql://localhost:3306/?user=root
