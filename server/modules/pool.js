// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;


// if using heroku, set the DB URL that geroku gives us
// each environment can specify its own values for running on different places
if (process.env.DATABASE_URL) {
    pool = new Pool({
       connectionString: process.env.DATABASE_URL,
    //    heroku fails without this
       ssl: { rejectUnauthorized: false}
    });
}
// or default to using our local postgres db
else {
    pool = new Pool({
        database: 'react_gallery', // database name (this will change)
        host: 'localhost', // where to find the database
        port: 5432,        // port for finding the database
        max: 10,           // max number of connections for the pool
        idleTimeoutMillis: 30000 // 30 seconds before timeout/cancel query
    });
}

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;