const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    _id: Number, 
    photos: [Number],
    title : String,
    datePosted: Date,
    address: String,
	pos : {
		type: [Number],  // [<longitude>, <latitude>]
    	index: '2d'      // create the geospatial index
	},    
    description: String,
    idCat: String,
    artists: [String]
});

const categorySchema = mongoose.Schema({
    catName: String
});

const artistSchema = mongoose.Schema({
    name: String,
    biography: String,
    email: String,
    website: String
});

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    favorite: [String]
});

const Work = mongoose.model('work', workSchema); // work est un modèle Mongoose.
												 // 'work' indique à Mongoose d'utiliser la collection 'works'
const Category = mongoose.model('category', categorySchema);

const Artist = mongoose.model('artist', artistSchema);

const User = mongoose.model('user', userSchema);

// mongoose.connect('mongodb://localhost/urban', (err) => {
/*mongoose.connect('mongodb://test:test@ds055782.mlab.com:55782/urban', (err) => {
	if (err) {return console.error("Error connecting to MongoDB!");}
});*/

module.exports = {
	Work, Category, Artist, User
}