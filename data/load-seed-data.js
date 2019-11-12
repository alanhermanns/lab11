require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const todos = require('./todos.js');
// import seed data:

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
        
        await Promise.all(
            todos.map(async todo => {
                const result = await client.query(`
                    INSERT INTO todo (todo)
                    VALUES ($1)
                    RETURNING *;
                `,
                [todo]);
                return result.rows[0];
            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
    
}
