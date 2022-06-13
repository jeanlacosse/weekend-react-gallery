const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gallery = require('./routes/gallery.router.js');
// environment variable changes port every time, configurable thing on my computer
// process.env is object that has all my environment varialbes in it
// below is done to set up a rotating port or 5000 if none chosen
const PORT = process.env.PORT || 5000;

console.log(`welcome ${process.env.USER} to this express app`)
// welcome jeanlacosse

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});