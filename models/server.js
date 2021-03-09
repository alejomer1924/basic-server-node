const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();  
        this.port = process.env.PORT; 
        this.userpath = '/api/users';

        //middlewares
        this.middlewares();


        //rutas
        this.routes();
    }

    routes(){
        this.app.use(this.userpath, require('../routes/user.routes'));
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //STATIC
        this.app.use(express.static('public')); 
        //Reading data
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando peticiones en el puerto ${this.port}`);
        });
    }
}

module.exports = Server