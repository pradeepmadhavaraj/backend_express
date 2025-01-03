const express = require('express');
const app = express();
const userRoute=require('./routes/user');
app.get('/', (req,res) =>{
  res.render("index.ejs",{texts:"hai"});
});
app.use('/user',userRoute);
app.listen(3000);