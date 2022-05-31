const mongoose=require('mongoose')

const BookSchema=new mongoose.Schema({
    bookName:{
        type:String,
        required:[true, 'Please enter a title']
    },
    author_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}

},
{timestamps:true})

const Book=mongoose.model('Book', BookSchema)
module.exports=Book