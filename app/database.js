const mongoose = require("mongoose");
const chalk = require("chalk");

module.exports = async function ({ _, database }) {
  mongoose.Promise = global.Promise;
  try {
    const { connection } = await mongoose.connect(database, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(
      `${chalk.green("✓")} ${chalk.bold(
        chalk.gray(
          `Logger connected to "${connection.name}" database at ${connection.host}:${connection.port}`
        )
      )}`
    );
    return connection;
  } catch (error) {
    console.log(
      `${chalk.red("X")} ${chalk.bold(
        chalk.gray(
          `%s MongoDB connection error. Please make sure MongoDB is running.`
        )
      )}`
    );
    console.log(error);
    process.exit(1);
  }
};
