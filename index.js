const express = require('express')
const app = express()
 
app.get('/home', function (request, response) {
    const a = request.query.a
    const b = request.query.b
    console.log(a , b)
    response.send({a ,  b})
})
 
app.listen(3000)