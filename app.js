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
	req.body.length<1?
	    res.send("Server's Up Boss")
	:res.status(403).json({errormessage:'straightenup big guy'})
});

server.get('/tucker',(req,res)=>{
	res.set('X-full-stack','4life');
	req.body.username?
	res.status(418):
	res.send('Iprefer dinos and fresh ground coffeebeans brotherman.')
	
});

server.get('/', (req,res)=>{
		res
		.status(418)
		.json({errormessage:`this is a teapot`})
		
});

const port= process.env.PORT|| 3000;

server.listen(port,()=> console.log(`** Running on port ${port} **`));
