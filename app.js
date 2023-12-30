const express = require('express');
const app = express();

app.set('view engine','ejs');

//listen to request
app.listen(3000);

const blogs = [
    {title: "First", snippet: "First blog"},
    {title: "Second", snippet: "Second blog"},
    {title: "Third", snippet: "Third blog"},
];

app.get('/', (req, res) => {
    res.render('index', { title: "Home" ,blogs });
});
app.get('/about', (req, res) => {
    res.render('about',{ title: "about"});
});
app.get('/blogs/create',(req,res)=>{
    res.render('create',{ title: "Create a new Blog"});
})

app.use((req, res) => {
    res.status(404).render('404',{ title: "404"});
})