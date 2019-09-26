// ****** Set up default mongoose connection START ****** //
const mongoose = require('mongoose');
var mongoDB = process.env.mongoDBURL;
mongoose.connect(mongoDB);

// mongoose.connection.on('error', (err)=>{
//     if(err){
//         console.log("Error in database connection "+err);
//     }
// });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
    console.log('conneted to MONGODB- visitor_app database');
});
module.exports = mongoose;
// ****** Set up default mongoose connection END ****** //