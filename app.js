const express = require('express')
const server = express();
server.use(express.json());


const helmet = require('helmet');
const cors = require('cors');

const morgan = require('morgan');


server.use(helmet());
server.use(cors());
server.use(morgan("dev"));


server.get('/', (req, res) => {
	    res.send("Server's Up Boss")
});

const port= process.env.PORT|| 3000;

server.listen(port,()=> console.log(`** Running on port ${port} **`));
