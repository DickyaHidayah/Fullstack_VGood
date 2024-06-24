const db = require('../config/db');

// User Model
const User = {};

User.create = (userData, callback) => {
    const query = 'INSERT INTO Users SET ?';
    db.query(query, userData, callback);
};

User.findByEmail = (email, callback) => {
    const query = 'SELECT * FROM Users WHERE email = ?';
    db.query(query, [email], callback);
};

User.findById = (id, callback) => {
    const query = 'SELECT * FROM Users WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = User;
