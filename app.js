/*
Server file for globe page representation
Using Node.js and Express for server
Software Engineering CS3340
Spring 2022
*/
const express = require('express') // imports express into express variable
const app = express()
const path = require('path')
const port = process.env.PORT || 3000 // saving port to be used in server into variable


// tells express to search for static files in views directory, static files are html files
app.use(express.static(__dirname + '/views')) 
//app.set('views', path.join(__dirname, '/views')) // this is another way of doing above statement, but i prefer above

// similar to above, tells express to search for static files in public directory
// in this case, static files are css and javascript
app.use(express.static(path.join(__dirname, 'public')))

// both of below statements are meant to incorporate three.js library for 3-d functionality
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));


// starts server, console.log is to ensure things worked properly
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);