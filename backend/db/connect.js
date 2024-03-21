import mongoose from "mongoose";
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://bala:bala@cluster0.eirzlqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to the database!!!");
  } catch (error) {
    console.log(error);
  }
}

export default connect;
