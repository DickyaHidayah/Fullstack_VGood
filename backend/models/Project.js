const db = require('../config/db');

// Project Model
const Project = {};

Project.create = (projectData, callback) => {
    const query = 'INSERT INTO Projects SET ?';
    db.query(query, projectData, callback);
};

Project.findByOrganizationId = (organizationId, callback) => {
    const query = 'SELECT * FROM Projects WHERE organization_id = ?';
    db.query(query, [organizationId], callback);
};

Project.findById = (id, callback) => {
    const query = 'SELECT * FROM Projects WHERE id = ?';
    db.query(query, [id], callback);
};

Project.update = (id, projectData, callback) => {
    const query = 'UPDATE Projects SET ? WHERE id = ?';
    db.query(query, [projectData, id], callback);
};

Project.delete = (id, callback) => {
    const query = 'DELETE FROM Projects WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = Project;
