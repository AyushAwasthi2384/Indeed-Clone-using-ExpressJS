const express = require('express');
const app = express();
const routerapp = require('./router/routerapp');

app.use(routerapp)

app.use(express.static('public'));
app.set('views engine','ejs');
app.listen(3000, ()=>{
    console.log("started");
})