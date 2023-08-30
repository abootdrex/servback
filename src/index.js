
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const BlogData= require('./dataSc')


app.use(express.json());
app.use(cors());

  

mongoose.connect (`mongodb+srv://durgesh:Thehobby@cluster0.cieshmm.mongodb.net/registrations?`);

app.post('/registrations', async(req, res) => {

    const Name = req.body.Name
    const Email = req.body.Email
    const Image = req.body.Image
    const Title = req.body.Title;
    const Blog = req.body.Blog
  
    
    const formData  =  new BlogData(
        {
            title:Title,
            name: Name,
            email: Email,
            image:Image,
            blog:Blog,
           
        }
    )
    try{
     
        await formData.save();
        res.send("inserted data..")
       

    } catch(err){
        console.log(err)
    }
  });

const port = process.env.PORT ||4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});