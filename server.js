require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/api/todo', async(req, res) => {
    const newTodo = req.body;
    try {
        const result = await client.query(`
        INSERT INTO buildings
                (name,
                 body,
                 done)
            VALUES($1, $2, $3)
            RETURNING *;
        `, 
        [newTodo.name, newTodo.body, newTodo.done]);
        res.json(result.rows[0]);
    }
    catch (err){
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log('server running on port ' + PORT);
});