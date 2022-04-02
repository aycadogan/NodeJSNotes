const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express();

//CONNECT TO MONGODDB
const dbURI = 'mongodb+srv://test:test@cluster0.srutc.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3001))
    .catch((err) => console.log(err))

//register view engine
app.set('view engine','ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true})) //accepting form data
app.use(morgan('dev'));

//routes
app.get('/', (req,res) => {
    res.redirect('/blogs')
})

app.get('/about', (req,res) => {
    res.render('about', {title: 'About'})
})
//blog routes
app.use('/blogs',blogRoutes)

//404 page
app.use((req,res) => {
    res.status(404).render('404',{title:'404'});
})