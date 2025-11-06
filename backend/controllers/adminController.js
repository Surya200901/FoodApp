const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { email, password, name, setupKey } = req.body;
  try {
    // If admins already exist, require a valid setup key
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      const requiredKey = process.env.ADMIN_SETUP_KEY;
      if (!requiredKey) {
        return res.status(403).json({ message: 'Admin registration disabled (setup key not configured)' });
      }
      if (setupKey !== requiredKey) {
        return res.status(403).json({ message: 'Invalid setup key' });
      }
    }

    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Admin already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashed, name });
    await admin.save();

    res.status(201).json({ message: 'Admin created' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating admin' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const ok = await bcrypt.compare(password, admin.password);
    if (!ok) return res.status(400).json({ message: 'Incorrect password' });

    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.status(200).json({ token, admin: { id: admin._id, email: admin.email, name: admin.name }, role: 'admin' });
  } catch (err) {
    res.status(500).json({ message: 'Login error' });
  }
};
