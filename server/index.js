const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const {User} = require('./usermodel');
const {Calendar} = require('./calendarModel')
const {BasicStrategy} = require('passport-http');

mongoose.Promise = global.Promise;

const app = express();

const basicStrategy = new BasicStrategy((username, password, callback) => {
  let user;
  User
    .findOne({username: username})
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, {message: 'Incorrect username'});
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        return callback(null, false, {message: 'Incorrect password'});
      }
      else {
        return callback(null, user)
      }
    })
    .catch(err => console.log('Invalid username or password'))
});

app.use(require('express-session') ({
  secret: 'alley cat',
  resave: false,
  saveUnitialized: false
}));

// API endpoints go here!

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

passport.use(basicStrategy);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


function loggedIn(req, res, next) {
	if (req.user) {
		next();
	} else {
		res.json({redirect: '/login', message: 'Please sign in'});
	}
}

app.get('/api/login',
    passport.authenticate('basic'), (req, res) => {
      res.json({user: req.user.apiRepr()}) ;
    })

app.get('/api/me', loggedIn, (req, res, next) => {
  res.json({user: req.user});
});

app.get('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if(err){
      res.json({err})
    }
    else{
      console.log(req.user)
      res.json({ loggedOut: true})
    }
  })
})

app.post('/api/createaccount', (req, res) => {
    console.log(req.body)
    let {username, password, email} = req.body;

    return User
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
        return User.hashPassword(password);
    })
    .then(hash => {
        return User
            .create({
                username: username,
                password: hash,
                email: email,
                role: email === "mthinton@gmail.com" ? "admin" : "client"
            })
    })
    .then(user => {
        return res.status(201).json(user.apiRepr());
    })
    .catch(err => {
        res.status(500).json({message: 'Internal server error'})
    });
});

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://Matthew:barbershop@ds157631.mlab.com:57631/barbershopclients', err => {
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
