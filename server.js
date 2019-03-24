const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./app/routing/apiRoutes'))
app.use(require('./app/routing/htmlRoutes'))

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})