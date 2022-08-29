const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'appikacja',
        name: 'me'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ooo',
        name: 'still me'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'pls help',
        name: 'still me'
    })
})


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you must search for st'
        })
    }
    
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'me me',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'me me',
        errorMessage: 'My 404 page' 
    })
})

app.listen(3000, () => {
    console.log('server is runing')
})