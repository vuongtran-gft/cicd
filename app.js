'user strict';
const express = require('express')
const os = require('os')

const app = express()
const port = 8080


app.get('/', (req, res) => {
  res.send(
    `<body style='background-color:#283E5B'><h1 style='color: orange;text-align:center'>Hello AWS version 2 ${os.hostname()}</h1>
    <h2>version 3</h2>
    </body>`
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${os.hostname}`)
})