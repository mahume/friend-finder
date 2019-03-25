const apiRoutes = require('./app/routing/apiRoutes')
const htmlRoutes = require('./app/routing/htmlRoutes')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))