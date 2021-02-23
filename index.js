const express = require('express')
const app = express()
 
app.get('/cong/:a/:b', function (request, response) {
    const {a , b} = request.params
    if(isNaN(a) || isNaN(b)){
      return response.send({success : false , message : "Giá trị không phải là số"}).end();
    }
    return response.send({success : true , result : parseInt(a) + parseInt(b)}).end()
})
 
app.listen(3000)