import mongoose from 'mongoose'


const blogSchema = new mongoose.Schema({
title : {type: String, required : true, unique : true},
description : {type : String},
author : {type : String},
date :{type : Date,default:Date.now},
tag : {type:[String]}
});

export const blogModel = mongoose.model("blog", blogSchema);


