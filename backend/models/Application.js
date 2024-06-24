const db = require('../config/db');

// Application Model
const Application = {};

Application.create = (applicationData, callback) => {
    const query = 'INSERT INTO Applications SET ?';
    db.query(query, applicationData, callback);
};

Application.findByProjectId = (projectId, callback) => {
    const query = 'SELECT * FROM Applications WHERE project_id = ?';
    db.query(query, [projectId], callback);
};

Application.findByVolunteerId = (volunteerId, callback) => {
    const query = 'SELECT * FROM Applications WHERE volunteer_id = ?';
    db.query(query, [volunteerId], callback);
};

Application.updateStatus = (id, status, callback) => {
    const query = 'UPDATE Applications SET status = ? WHERE id = ?';
    db.query(query, [status, id], callback);
};

module.exports = Application;
