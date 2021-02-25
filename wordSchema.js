// Tạo ra collections cua word (table word)
// Schema cấu hình cho 1 Collection(table)


const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://abc:Reactnative29122020@cluster0.u5boy.mongodb.net/ProjectServerNode29122020?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

const wordSchema = new mongoose.Schema({
    en : {type : String , required : true , unique : true ,lowercase: true, trim: true  },
    vn : {type : String , required : true ,lowercase: true ,trim: true },
    isMemorized : {type : Boolean , required : true , default: false },
})
const Word = mongoose.model("Word",wordSchema);

module.exports = Word

const newWord = new Word({en : 'Two' , vn : "Hai"});

//INSERT
// newWord.save()
// .then(word => console.log(word))
// .catch(error => console.log(error))

// SELECT
// Word.find({})
// .then(word => console.log(word))
// .catch(error => console.log(error))

// UPDATE
// Word.findByIdAndUpdate('5fd7573dd594ed057877ed10', {ismemorized : true} , {new : true})
// .then(word => console.log(word))
// .catch(error => console.log(error))

// DELETE
// Word.findByIdAndDelete('5fd7573dd594ed057877ed10')
// .then(word => console.log(word))
// .catch(error => console.log(error))