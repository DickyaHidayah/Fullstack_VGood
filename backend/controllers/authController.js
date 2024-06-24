const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = async (req, res) => {
    const { name, email, password, phone, role } = req.body;

    // Default role jika tidak disediakan
    const userRole = role || 'relawan';

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = { name, email, password: hashedPassword, phone, role: userRole };
        const query = 'INSERT INTO Users SET ?';
        
        db.query(query, user, (err, result) => {
            if (err) {
                console.error('Error in registration:', err);
                return res.status(500).json({ success: false, message: 'Error in registration' });
            }

            const token = jwt.sign({ id: result.insertId, role: userRole }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });

            res.status(201).json({ success: true, token });
        });
    } catch (error) {
        console.error('Error in registration:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}
exports.login = (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM Users WHERE email = ?';

    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Error in login:', err);
            return res.status(500).json({ success: false, message: 'Error in login' });
        }

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({ success: true, token, role: user.role });
    });
};
exports.logout = (req, res) => {
    // Optionally, you can implement server-side logout logic
    res.status(200).json({ message: 'Logged out successfully' });
};