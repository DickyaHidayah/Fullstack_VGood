const db = require('../config/db');

// Volunteer Model
const Volunteer = {};

Volunteer.create = (volunteerData, callback) => {
    const query = 'INSERT INTO Volunteers SET ?';
    db.query(query, volunteerData, callback);
};

Volunteer.findByUserId = (userId, callback) => {
    const query = 'SELECT * FROM Volunteers WHERE user_id = ?';
    db.query(query, [userId], callback);
};

Volunteer.update = (id, volunteerData, callback) => {
    const query = 'UPDATE Volunteers SET ? WHERE id = ?';
    db.query(query, [volunteerData, id], callback);
};

module.exports = Volunteer;
