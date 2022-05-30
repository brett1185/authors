const Author=require('../models/author.model')

module.exports={
    createAuthor:(req, res)=>{
        Author.create(req.body)
            .then((newAuthor)=>{
                console.log(newAuthor)
                res.json(newAuthor)
            })
            .catch((err)=>{console.log(err)
            res.status(400).json(err)
            })
    },
    getAllAuthors:(req, res)=>{
        Author.find({})
            .then((authors)=>{
                console.log(authors);
                res.json(authors)
            })
            .catch((err)=>console.log(err),
            )
    },
    getAuthor:(req, res)=>{
        Author.findOne({_id:req.params.id})
        .then((author)=>{
            console.log(author);
            res.json(author)
        })
        .catch((err)=>res.status(400).json(err))
    },
    updateAuthor:(req, res)=>{
        Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
            .then((updatedAuthor)=>{
                console.log(updatedAuthor)
                res.json(updatedAuthor)
            })
            .catch((err)=>{console.log(err)
                res.status(400).json(err)
            })
    },
    deleteAuthor:(req, res)=>{
        Author.deleteOne({_id:req.params.id})
        .then((deletedAuthor)=>{
            console.log(deletedAuthor);
            res.json(deletedAuthor)
        })
        .catch((err)=>res.status(400).json(err))}
}
