// require express
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// require restaurant.json
const restaurants = require('./restaurant.json')

// setting static files
app.use(express.static('public'))

// --- routes setting ---
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

// routes --> search
app.get('/search', (req, res) => {
  // console.log(req.query.keyword)
  const keyword = req.query.keyword.toLowerCase()
  const filterRestaurants = restaurants.results.filter((item) =>
    item.name.toLowerCase().includes(keyword)
  )

  res.render('index', { restaurants: filterRestaurants, keyword: keyword })
})

// listen on
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
