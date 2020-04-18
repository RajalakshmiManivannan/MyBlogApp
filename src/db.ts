import mongoose from 'mongoose'

export class DB{
    constructor(){}
    
    public static connectionString : string = "mongodb://localhost:27017/myBlogDb"

    public static connectMongoDB(){
        mongoose.connect(this.connectionString,(err)=>{
            if(err){
                console.log("DB connection failed");
            }else{
                console.log("DB connected");
            }
        });
    }



}