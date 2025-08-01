const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET ;

// const authMiddleware = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: 'Not authenticated' });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = decoded; // Store user info in request object
//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid or expired token' });
//   }
// };

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  
  console.log("Token received:", token);  // Add this log to check token in the request

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Store user info in request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};


module.exports = authMiddleware;
