import express from 'express'

const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Hola c4')
})

app.listen(port, () => {
  console.log(`Escuchando localhost puerto ${port}`)
})
