const express = require('express');
const cors = require('cors')
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 8000;

const bodyParser = require('body-parser');


const api = require('./modules/api').api;
//const root = __dirname.replace("urban-art-server","urban-art-ionic")+"/www" // MAC
const root = __dirname.replace("miiart-server","miiart-mobile")+"\www" // windows


const log = (req,res,next) => {
	console.log("Route post /images reached: ", root);
	next();
}

app
	.use(express.static(root))
	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())
	.use(express.static('img'))
	.use(cors());

app
	.get('/works', api.get)
	.post('/works', api.add)
	.post('/images', log, api.saveImage) // Saves image Base64
	.delete('/:id', api.delete )
	.get('/categories', api.getCategory )
	.get('/artists', api.getArtist )
	.get("/img/:imgName", (req,res) => res.sendFile( __dirname + "/img/" + req.params.imgName)) // /img/1482255949367-1.jpeg
	.get('/users', api.getUser)
	.post('/users', api.addUser)
	



server.listen(port, ()=>{
	console.log("Listnening on port " + port)
});

