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
    vn : {type : String , required : true , trim: true },
    isMemorized : {type : Boolean , required : true , default: false },
})
const Word = mongoose.model("Word",wordSchema);

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));