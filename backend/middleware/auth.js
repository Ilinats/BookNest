const { verifyToken } = require('../utils/jwt');

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log('Auth header:', authHeader);
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false,
        message: 'No token provided' 
      });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token:', token);
    
    const decoded = verifyToken(token);
    console.log('Decoded token:', decoded);
    
    if (!decoded || !decoded.userId) {
      console.log('Invalid token payload:', decoded);
      return res.status(401).json({ 
        success: false,
        message: 'Invalid token payload' 
      });
    }

    req.user = { userId: decoded.userId };
    console.log('Set user in request:', req.user);
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(401).json({ 
      success: false,
      message: 'Invalid token',
      error: error.message 
    });
  }
};

module.exports = {
  authenticate,
}; 