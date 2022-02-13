const apiRoutes = require('./routes/apiRoutes')
const express = require('express')
const db = require('./db/connection')

// ports
const PORT = process.env.PORT || 3001
const app = express()

// middlewear
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', apiRoutes)

// default route
app.use((req, res)=> {
  res.status(404).end()
})

db.connect(err => {
  if (err) throw err
  console.log('database connected')
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
