const db = require('../db');

const createUser = (name, email, password )=>{
    const query = `
        INSERT INTO users
        (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING *
    `;
    return db.on(query, [name, email, password])
}

module.export = {createUser}