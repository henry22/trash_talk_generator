const express = require('express')
const app = express()
const port = 3000
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trashtalk')

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  helpers: {
    is: function(arg1, arg2, options) {
      if (arg1 === arg2) {
        return options.fn(this)
      } else {
        return options.inverse(this)
      }
    }
  }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const occupation = req.body.occupation

  res.render('index', { trashTalk: generateTrashTalk(occupation), occupation: occupation})
})

app.listen(port, () => console.log(`The server is listening on http://localhost:${port}`))