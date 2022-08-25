// server.js

const express = require('express')
const app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors')
app.use(cors({ optionSuccessStatus: 200 })) // some legacy browsers choke on 204

// Use ejs for html templates
app.set('view engine', 'ejs')

// static files are served from public
app.use(express.static('public'))

// The root url servers the demo homepage
app.get('/', function (request, response) {
  response.render('index', { date: null, url: 'home' })
})

// Handles get requests that include at least one param
app.get('/:date', function (request, response) {
  const { params } = request
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  let date = params.date === 'now' ? new Date().getTime() : new Date(params.date)

  // Handle unix timestamp,
  if (!/[^\d]/.test(params.date)) {
    date = new Date(parseInt(params.date) * 1000)
  }

  date = (date instanceof Date) ? date : new Date(parseInt(date))

  let natural
  try {
    natural = date.toLocaleDateString('en-us', options)
  } catch (error) {
    console.log(error)
  }
  const unix = date.getTime() / 1000
  // Sends the JSON response
  const iso = date.toISOString()
  const db = [iso.split("T")[0], iso.split("T")[1].split(".")[0]].join(" ")

  response.json({
    iso,
    db,
    unix: Math.floor(unix) || null,
    natural: natural === 'Invalid Date' ? null : natural
  })
})

// listen for requests :)
const listener = app.listen(process.env.PORT || 8080, 'localhost', function () {
  const { address, port } = listener.address()
  console.log(`Your app is listening on http://${address}:${port}`)
})
