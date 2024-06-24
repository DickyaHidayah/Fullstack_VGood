const db = require('../config/db');

// Organization Model
const Organization = {};

Organization.create = (organizationData, callback) => {
    const query = 'INSERT INTO Organizations SET ?';
    db.query(query, organizationData, callback);
};

Organization.findByUserId = (userId, callback) => {
    const query = 'SELECT * FROM Organizations WHERE user_id = ?';
    db.query(query, [userId], callback);
};

Organization.update = (id, organizationData, callback) => {
    const query = 'UPDATE Organizations SET ? WHERE id = ?';
    db.query(query, [organizationData, id], callback);
};

module.exports = Organization;
