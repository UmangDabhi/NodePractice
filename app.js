const express = require('express');
const app = express();

//listen to request
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    res.sendFile('./Views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.sendFile('./Views/about.html', { root: __dirname });
});

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 error page
app.use((req, res) => {
    res.status(404).sendFile('/Views/404.html', { root: __dirname });
})