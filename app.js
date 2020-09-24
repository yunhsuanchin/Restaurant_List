// require express
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// import restaurant.json
const restaurants = require('./restaurant.json')

// routes setting
// routes --> index page
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurants.results })
})

// routes --> show page
app.get('/restaurants/:id', (req, res) => {
  console.log(req.params.id)
  const findRestaurant = restaurants.results.find(
    (item) => item.id.toString() === req.params.id
  )
  res.render('show', { restaurant: findRestaurant })
})

// listen on
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
