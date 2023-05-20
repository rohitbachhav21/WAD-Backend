const mongoose = require("mongoose");
try {
  // mongoose.connect("mongodb://localhost:27017/Ecommerce", {
  mongoose.connect("mongodb+srv://desaiaishwarya48:aishwarya-48@cluster0.0qmafoj.mongodb.net/?retryWrites=true&w=majority", {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
