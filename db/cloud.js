const {database, default: mongoose} = require("mongoose") 
function connectDatabase(database){
  mongoose
  .connect(database)
  .then(() => {
    console.log("Mongoose Connected");
 
  })
  .catch(console.error);

}

module.exports = connectDatabase
