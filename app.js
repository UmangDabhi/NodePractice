const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoute = require('./routes/blogRoutes')

app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://umang:Umang%401234@cluster0.yx7xkkd.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));



app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    res.render('about', { title: "about" });
});

app.use('/blogs',blogRoute);


app.use((req, res) => {
    res.status(404).render('404', { title: "404" });
})