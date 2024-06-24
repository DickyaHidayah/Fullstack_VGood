const db = require('../config/db');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // direktori tempat menyimpan file
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // nama file unik berdasarkan timestamp
    }
});

const upload = multer({ storage: storage });
exports.upload = upload.single('logo'); // 'logo' adalah nama field pada form untuk file logo

exports.createOrganization = (req, res) => {
    const {
        representative_name, email, phone, password, organization_name, founded_date, description,
        location, organization_email, organization_phone, website
    } = req.body;

    const logo = req.file ? req.file.filename : '';
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = {
        name: representative_name,
        email,
        password: hashedPassword,
        phone,
        role: 'organization'
    };

    db.query('INSERT INTO Users SET ?', user, (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Failed to register user' });
        }

        const organization = {
            user_id: result.insertId,
            representative_name,
            organization_name,
            organization_email,
            organization_phone,
            founded_date,
            description,
            logo,
            location,
            website
        };

        db.query('INSERT INTO Organizations SET ?', organization, (err, result) => {
            if (err) {
                console.error('Error inserting organization:', err);
                return res.status(500).json({ message: 'Failed to register organization' });
            }
            res.status(201).json({ message: 'Organization registered!', logoUrl: `/uploads/${logo}` });
        });
    });
};

exports.getOrganizations = (req, res) => {
    db.query('SELECT * FROM Organizations', (err, results) => {
        if (err) {
            console.error('Error fetching organizations:', err);
            return res.status(500).json({ message: 'Failed to retrieve organizations' });
        }
        res.status(200).json(results);
    });
};

exports.getOrganizationById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM Organizations WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error fetching organization:', err);
            return res.status(500).json({ message: 'Failed to retrieve organization' });
        }
        res.status(200).json(result);
    });
};

exports.updateOrganization = (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    db.query('UPDATE Organizations SET ? WHERE id = ?', [updateData, id], (err, result) => {
        if (err) {
            console.error('Error updating organization:', err);
            return res.status(500).json({ message: 'Failed to update organization' });
        }
        res.status(200).json({ message: 'Organization updated!' });
    });
};

exports.deleteOrganization = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM Organizations WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error deleting organization:', err);
            return res.status(500).json({ message: 'Failed to delete organization' });
        }
        res.status(200).json({ message: 'Organization deleted!' });
    });
};
