const express = require('express')
const app = express();

app.use(express.json())


const mc = require('./controllers/messages_controller');

const messagesBaseUrl = '/api/messages';
app.post(messagesBaseUrl, mc.create)
app.get(messagesBaseUrl, mc.read)
app.put(`${messagesBaseUrl}/:id`, mc.update)
app.delete(`${messagesBaseUrl}/:id`, mc.delete)

app.use(express.static(__dirname + '/../public/build'));









const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});