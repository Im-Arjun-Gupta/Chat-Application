const express = require('express');
const chats = require('./data/data');
const app = express();

require('dotenv').config();

app.listen( process.env.PORT , () => {
    console.log('server is running on port', process.env.PORT);
})

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
});

