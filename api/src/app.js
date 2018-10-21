//Dependencies npm
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const moment = require('moment');
const SteamApi = require('steam-api');
// Require file.
const config = require('./db');
const users = require('./routes/user');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();

// Passport
app.use(passport.initialize());
require('./passport')(passport);
//Express bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/users', users);

const User = require('./models/Users.js')

const addWeatherServiceCity = async (req, res, next) => {
	User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
			req.body.userID = user._id;
		}});
	try {	
		const updatedUser = await User.findOneAndUpdate(
			{_id: req.body.userID},
			{ $push: { 'services.weather.city': req.body.city }} // Push new city which backend sent into your array located in services.weather.city
		)	
		res.json(updatedUser);
	} catch(err) { next(err) }
	User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
			console.log(user);
		}});
}

app.put('/newCity', addWeatherServiceCity)

app.get('/', function (req, res) {
    res.send('hello');
});

app.get('/about.json', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.substr(0, 7) == "::ffff:") {
      ip = ip.substr(7)
    }
	return res.json({
		client: {
			host: ip
		},
		server: {
			current_time: moment().unix(),
			services: [{
				name: "weather",
				widgets: [{
					name: "city_temperature",
					description: "Affichage de la température pour une ville",
					params: [{
						name: "city",
						type: "string"
					}]
				}]
			}, {
				name: "stock_exchange",
				widgets: [{
					name: "monney_convertissor",
					description: "Convertit une devise de monnaie en crypto monnaie",
					params: [{
						name: "monney_type",
						type: "string"
					},{
						name: "cypto_type",
						type: "string"
					}]
				}]
			}]
		}
	});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});