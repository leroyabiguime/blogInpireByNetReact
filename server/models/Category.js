const mongoose = require("mongoose")

const CategorytSchema = new mongoose.Schema({
   
   
   name: {
       type: string,
       required: true
   }
    
},{
    timestamps:true
})

module.exports = mongoose.model("Category", CategorytSchema)