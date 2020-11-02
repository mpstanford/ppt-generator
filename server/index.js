const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Example app listening on Port ${port}`)
})