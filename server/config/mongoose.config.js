const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/authorDB', {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('You are connected to authorDB')
    })
    .catch((err)=>{
        console.log(err)
    })
