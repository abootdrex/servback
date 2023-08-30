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
    const Title = req.body.Title
    const Reflinks = req.body.Reflinks
    const About = req.body.About
    const Blog = req.body.Blog
    
    const formData  =  new BlogData(
        {
            title:Title,
            name: Name,
            email: Email,
            image:Image,
            about:About,
            blog:Blog,
            reflinks:Reflinks,
           
        }
    )
    try{
     
        await formData.save();
        res.send("inserted data..") 
       

    } catch(err){
        console.log(err)
    }
  });
  
app.get('/blogdata', async (req, res) => {
    try {
      const blogdatas = await BlogData.find();
      res.json(blogdatas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

const port = process.env.PORT ||4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
