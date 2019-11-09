const express = require('express')
const app = express()
const port = 3000
const expressHandlebars = require('express-handlebars')

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => console.log(`The server is listening on http://localhost:${port}`))