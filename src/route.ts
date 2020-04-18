import express from 'express'

import {blogService} from './blogService';

export class Route{
    constructor(){}

    public static RegisterAPIs(app: express.Application)
    {
        app.get('/', (req: express.Request, res: express.Response)=>{
            res.json("server is running")
        });

        app.post('/createPost',blogService.createPost);
        app.get('/getAllPost',blogService.getAllPost);
        app.get('/getPostByDate/:getDate',blogService.getPostByDate);
        app.get('/getPostByAuthor/:authorName',blogService.getPostByAuthor);
        //getpostbytag
        app.put('/updateDescription/:postId',blogService.updateDescription);
        app.delete('/deletePost/:postId',blogService.deletePost);

    }
}