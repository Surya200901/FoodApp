const jwt = require('jsonwebtoken');

module.exports = function requireAdmin(req, res, next) {
  const auth = req.headers.authorization || '';
  const parts = auth.split(' ');
  if (parts.length === 2 && parts[0] === 'Bearer') {
    try {
      const payload = jwt.verify(parts[1], process.env.JWT_SECRET);
      if (payload && payload.role === 'admin') {
        req.adminId = payload.id;
        return next();
      }
    } catch (e) {}
  }
  return res.status(401).json({ message: 'Admin authorization required' });
};
