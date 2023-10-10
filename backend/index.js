const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http').Server(app);
const port = 3000;
const socketIO = require('socket.io');

const surveyRoutes = require('./routes/survey');
const userRoutes = require('./routes/user');
const questionRoutes = require('./routes/question');
const categoryRoutes = require('./routes/category');
const groupRoutes = require('./routes/group');
const suggestionRoutes = require('./routes/suggestion');
const messageRoutes = require('./routes/message');
const cors = require('cors');
const io = socketIO(http, {
  cors: {
    origin: 'http://localhost:3001', // Remplacez par l'URL de votre application front-end
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});
app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test").then(
  () => {
    console.log('Connecté à la base de données MongoDB');
  },
  err => {
    console.log('Erreur lors de la connexion à la base de données : ' + err);
  }
);

app.use('/api/survey', surveyRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/group', groupRoutes);
app.use('/api/suggestion', suggestionRoutes);
app.use('/api/message', messageRoutes);

io.on('connection', (socket) => {
  console.log('Un utilisateur s\'est connecté');

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });

  socket.on('chat:message', (message) => {
    console.log('Nouveau message :', message);

    // Enregistrer le message dans la base de données (MongoDB)

    // Envoyer le message à tous les clients connectés
    io.emit('chat:message', message);
  });
});

http.listen(port, () => {
  console.log(`App listening at http://127.0.0.1:${port}`);
});

module.exports = app;