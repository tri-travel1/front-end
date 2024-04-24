const express= require('express')
const app =express();
const port =8008;

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json())






app.listen(port, ()=>{console.log(`app listining on ${port}`)})
