const mongoose = require("mongoose");
const { log } = require("./utils");

module.exports = async function ({ _, database }) {
  mongoose.Promise = global.Promise;
  try {
    const { connection } = await mongoose.connect(database, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    log(
      `Argus connected to "${connection.name}" database at ${connection.host}:${connection.port}`
    ).info();
    return connection;
  } catch (error) {
    log(
      `%s MongoDB connection error. Please make sure MongoDB is running.`
    ).error();
    console.log(error);
    process.exit(1);
  }
};
