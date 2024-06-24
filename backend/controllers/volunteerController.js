const db = require('../config/db');

exports.createVolunteerProfile = (req, res) => {
    const { user_id, bio, skills, address, city, state, country, zip_code, profile_picture } = req.body;

    const volunteer = {
        user_id,
        bio,
        skills,
        address,
        city,
        state,
        country,
        zip_code,
        profile_picture
    };

    db.query('INSERT INTO Volunteers SET ?', volunteer, (err, result) => {
        if (err) {
            console.error('Error creating volunteer profile:', err);
            return res.status(500).json({ message: 'Failed to create volunteer profile' });
        }
        res.status(201).json({ message: 'Volunteer profile created!' });
    });
};

exports.getVolunteers = (req, res) => {
    db.query('SELECT * FROM Volunteers', (err, results) => {
        if (err) {
            console.error('Error fetching volunteers:', err);
            return res.status(500).json({ message: 'Failed to fetch volunteers' });
        }
        res.status(200).json(results);
    });
};

exports.getVolunteerById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Volunteers WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error fetching volunteer by id:', err);
            return res.status(500).json({ message: 'Failed to fetch volunteer' });
        }
        res.status(200).json(result);
    });
};

exports.updateVolunteerProfile = (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    db.query('UPDATE Volunteers SET ? WHERE id = ?', [updateData, id], (err, result) => {
        if (err) {
            console.error('Error updating volunteer profile:', err);
            return res.status(500).json({ message: 'Failed to update volunteer profile' });
        }
        res.status(200).json({ message: 'Volunteer profile updated!' });
    });
};

exports.deleteVolunteerProfile = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM Volunteers WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error deleting volunteer profile:', err);
            return res.status(500).json({ message: 'Failed to delete volunteer profile' });
        }
        res.status(200).json({ message: 'Volunteer profile deleted!' });
    });
};

exports.getVolunteerProfile = (req, res) => {
    const { user_id } = req.user; // Ambil user_id dari data pengguna yang terautentikasi

    db.query('SELECT name, email, phone FROM Volunteers WHERE user_id = ?', [user_id], (err, result) => {
        if (err) {
            console.error('Error fetching volunteer profile:', err);
            return res.status(500).json({ message: 'Failed to fetch volunteer profile' });
        }
        
        if (result.length === 0) {
            return res.status(404).json({ message: 'Volunteer profile not found' });
        }

        res.status(200).json(result[0]);
    });
};