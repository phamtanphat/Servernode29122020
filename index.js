const express = require('express')
const app = express()
 
app.get('/home/:a/:b', function (request, response) {
    const {a , b} = request.params
    console.log(a , b)
    response.send({a ,  b})
})
 
app.listen(3000)