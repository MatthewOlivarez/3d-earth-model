
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/views'))
//app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.listen(3000, () =>
console.log(`App listening at http://localhost:${port}`)
);