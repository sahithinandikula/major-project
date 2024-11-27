const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review= require("./review.js");

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://media.istockphoto.com/id/968845818/photo/radhanagar-beach-havelock-island-andaman-islands.jpg?s=612x612&w=is&k=20&c=oN8ityGAzmkIhTSp7v8rjcwteBEo5eq6cvY4-MWh9ZI=",
        set: (v)=> v==="" ? 
        "https://media.istockphoto.com/id/968845818/photo/radhanagar-beach-havelock-island-andaman-islands.jpg?s=612x612&w=is&k=20&c=oN8ityGAzmkIhTSp7v8rjcwteBEo5eq6cvY4-MWh9ZI=": v,
    },
    
    price:Number,
    location:String,
    country:String,
    reviews: [
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ]
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;