const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./Routes/authRoutes');
const authMiddleware = require('./config/authMiddleware');
const contactRoutes = require('./Routes/contactRoutes');
const emailRoutes = require('./Routes/emailRoutes');
const userRoutes = require('./Routes/CostumersRoutes');
const Service = require('./Routes/serviceRoutes');
const profile = require('./Routes/ProfileRouter');
const paymentRoutes = require('./Routes/paymentRoutes');
const paypalRoutes = require("./Routes/paymentRoutes");
const order = require('./Routes/orderRoutes');
const chatRoutes = require("./Routes/chatRoutes");

const cron = require('node-cron');
const http = require('http');
const { WebSocketServer } = require('ws');
const chatbotRoutes = require('./Routes/chatbotRoutes');
const { getResponse } = require('./models/chatbot');

const app = express();

// Connect to database
connectDB();

// Create HTTP server
const server = http.createServer(app);

// WebSocket server setup
const wss = new WebSocketServer({ server });

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Allow your frontend to access WebSocket
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  credentials: true // Allow cookies and credentials to be sent with requests
}));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false, // secure: false لأنك في بيئة تطوير HTTP
    maxAge: 60 * 60 * 1000, // صلاحية الجلسة ساعة واحدة
  },
}));

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cookieParser()); // To parse cookies

// Define routes
app.use('/api/email', emailRoutes);
app.use('/api', order);
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api', Service);
app.use('/api', contactRoutes);
app.use('/api', profile);
app.use('/api', paymentRoutes);
app.use('/api', chatRoutes);
app.use('/api/chatbot', chatbotRoutes);

// A protected route example
app.get('/api/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'You have access to this protected route', user: req.user });
});

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('A new client has connected');

  // Handle incoming messages
  ws.on('message', (message) => {
    console.log('Received message:', message);
    const response = getResponse(message);
    ws.send(response); // Send the response to the client
  });

  // Handle disconnections
  ws.on('close', () => {
    console.log('A client has disconnected');
  });
});

// Clean up old messages using cron job
cron.schedule('0 0 * * *', async () => {
  try {
    const deleteDate = new Date();
    deleteDate.setDate(deleteDate.getDate() - 3); // Set the date 3 days ago

    await Message.deleteMany({ createdAt: { $lt: deleteDate } });
    console.log('Deleted messages older than 3 days');
  } catch (error) {
    console.error('Error deleting old messages:', error);
  }
});



// Start the server
server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
