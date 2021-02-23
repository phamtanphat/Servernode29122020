const express = require('express')
const bodyParser = require('body-parser')
const app = express()
 
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/cong/:a/:b', function (request, response) {
    const {a , b} = request.params
    if(isNaN(a) || isNaN(b)){
      return response.send({success : false , message : "Giá trị không phải là số"}).end();
    }
    return response.send({success : true , result : parseInt(a) + parseInt(b)}).end()
})

app.post("/tru" , function (req , res) {
    console.log(req.body)
})
 
app.listen(3000)