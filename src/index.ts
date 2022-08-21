import express from 'express'
import bodyParser from 'body-parser' 

const app = express()
const PORT = 5200

console.log('rawr')
console.log('boo')

app.listen(PORT, (): void => {
  console.log(`port: ${PORT}`)
})
