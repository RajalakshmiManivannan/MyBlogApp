import express from 'express'
import bodyParser from 'body-parser'
import {DB} from './db'
import {Route} from './route'

import cors from 'cors'


class BlogApp{

   app : express.Application;

   constructor (){
    this.app = express();

    this.app.listen(5000,'localhost',()=>{
        console.log("server running in port 5000");
    });

    DB.connectMongoDB();

    this.app.use(cors());

    this.configBodyParser();

    Route.RegisterAPIs(this.app);
   }

   private configBodyParser()
    {
        //middleware
        this.app.use(bodyParser.json());//Parses the text as JSON and exposes the resulting object on req.body.
        this.app.use(bodyParser.urlencoded({extended : false}));//Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body.
    }

}

let myBlogApp = new BlogApp();