const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://developer_2000:test123@mern-stack.e1vni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true         
        });

        console.log("Database connection successful");
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;