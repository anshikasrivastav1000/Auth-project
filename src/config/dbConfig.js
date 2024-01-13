const mongoose=require('mongoose');

const monooseConnect=async()=>{
    await mongoose.connect('mongodb+srv://anshikasrivastav1000:QfePt4AQOoKT7HLm@cluster0.pzltwqc.mongodb.net/UserAuth')
}

module.exports=monooseConnect;