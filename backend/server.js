const express = require('express');
const chats = require('./data/data');
const app = express();

app.listen(5000, () => {
    console.log('server is running on port 5000');
})

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/chats', (req, res) => {
    res.send(chats);
});

