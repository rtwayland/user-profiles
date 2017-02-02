const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const profileCtrl = require('./controllers/profileCtrl.js');
const userCtrl = require('./controllers/userCtrl.js');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true
}));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.get);

app.listen(3000, function() {
    console.log('listening on 3000');
})
