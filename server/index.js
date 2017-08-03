const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const {Client} = require('./clientmodel');

mongoose.Promise = global.Promise;

const app = express();

// API endpoints go here!

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.post('/api/login', (req, res) => {
    return Client
    .find({username})
    .count()
    .exec()
    .then(count => {
        if(count > 0){
            return Promise.reject({
                name: 'Authentication Error',
                message: 'username already taken'
            });
        }
        return Client.hashPassword(password);
    })
    .then(hash => {
        return Client
            .create({
                username: username,
                password: hash,
                email: email
            })
    })
    .then(client => {
        return res.status(201).json(client);
    })
    .catch(err => {
        res.status(500).json({message: 'Internal server error'})
    });
});

app.get('/api/login', (req, res) => {
    return Client
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(err => console.log(err) && res.status(500).json({message: 'Internal server error'}));
})

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://Barber:1234Europe!@ds157631.mlab.com:57631/barbershopclients', err => {
            if(err){
                return reject(err);
            }

            server = app.listen(port, () => {
            resolve();
            })
            .on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    })
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
