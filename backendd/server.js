const express= require('express')
const path= require('path')
const app =express();
const port =8008;

app.set('views','views')
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));



app.use(express.json())






app.listen(port, ()=>{console.log(`app listining on ${port}`)})
