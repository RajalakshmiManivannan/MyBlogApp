import express from 'express'
import {blogModel} from './blogModel'


export class blogService{
    constructor(){}

    //create post
    public static async createPost(req:express.Request,res:express.Response){
        try{
            console.log(req.body);
            let postItem = new blogModel(req.body);
            await postItem.save();

            res.json(postItem);
        }catch(err){
            res.json(err);
        }
    }

    //getAllPost
    public static async getAllPost(req:express.Request,res:express.Response){
        try{
            let blogItem = await blogModel.find({});
            res.json(blogItem);
        }catch(err){
            res.json(err);
        }
    }

    //getPostByDate
    public static async getPostByDate(req:express.Request,res:express.Response){
        try{
            let blogItem = await blogModel.find({"date" : req.params.getDate});
            res.json(blogItem);
        }catch(err){
            res.json(err);
        }
    }
    //getPostByAuthor
    public static async getPostByAuthor(req:express.Request,res:express.Response){
        try{
            let blogItem = await blogModel.find({"author" : req.params.authorName});
            res.json(blogItem);
        }catch(err){
            res.json(err);
        }
    }

    //getPostBy tag
    public static async getPostByTag(req:express.Request,res:express.Response){
        try{
           
        }catch(err){
            res.json(err);
        }
    }


    //updatePostDescription
    public static async updateDescription(req:express.Request,res:express.Response){
        try{
            //let blogItem :any = await blogModel.find({"title" : req.params.title});
            let blogItem : any = await blogModel.findById(req.params.postId);

            blogItem.description = req.body.description;
            blogItem.save();
            res.json(blogItem)
        }catch(err){
            res.json(err);
        }
    }

    //deletePost
    public static async deletePost(req:express.Request,res:express.Response){
        try{
           let blogItem = await blogModel.findByIdAndDelete({"_id": req.params.postId});
           res.json(blogItem)
        }catch(err){
            res.json(err);
        }
    }
}