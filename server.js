const path = require('path')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})