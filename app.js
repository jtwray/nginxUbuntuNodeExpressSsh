const express = require('express')
const server = express();
server.use(express.json());


const helmet = require('helmet');
const cors = require('cors');

const morgan = require('morgan');


server.use(helmet());
server.use(cors());
server.use(morgan("dev"));


server.get('/demo', (req, res) => {

	    res.send("Server's Up Boss")

});

server.get('/tucker',(req,res)=>{
	res.set('X-full-stack','4life');

	res.status(200).send('Iprefer dinosaurs and fresh ground coffeebeans brotherman.')

});

server.get('/', (req,res)=>{
		res
		.status(200)
		.json({message:`this is a teapot`})

});

const port= process.env.PORT|| 3000;

server.listen(port,()=> console.log(`** Running on port ${port} **`));
