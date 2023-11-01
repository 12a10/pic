const {createConnections} = require('typeorm');
import { User, Post } from "./entity/index.js";

createConnections([{
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "blog_db",
    entities: [
        __dirname + "/entity/*.js"
    ],
    synchronize: true,
}]).then(connections => {
    // here you can start to work with your entities
}).catch(error => console.log(error));