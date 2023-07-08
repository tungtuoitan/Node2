const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/home',(req,res)=>{
    res.send('hello world')
})
app.listen(port,()=>{
    console.log('>>>>>>>>> Runned port:' + port)
})