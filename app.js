const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');

app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://umang:Umang%401234@cluster0.yx7xkkd.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));



app.use(express.static('public'));


app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about new blog',
        body: 'more about my new blog'
    });
    blog.save()
    .then((result)=>{
        res.send(result)
    }).catch((err)=> console.log(err));
});

app.get('/all-blogs',(req,res)=>{
    Blog.find().then((result)=>{
        res.send(result);
    }).catch((err)=>console.log(err));
});
app.get('/single-blog',(req,res)=>{
    Blog.findById('659058d265a83780e2e77250').then((result)=>{
        res.send(result);
    }).catch((err)=>console.log(err));
});

const blogs = [
    { title: "First", snippet: "First blog" },
    { title: "Second", snippet: "Second blog" },
    { title: "Third", snippet: "Third blog" },
];

app.get('/', (req, res) => {
    res.render('index', { title: "Home", blogs });
});
app.get('/about', (req, res) => {
    res.render('about', { title: "about" });
});
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create a new Blog" });
})

app.use((req, res) => {
    res.status(404).render('404', { title: "404" });
})