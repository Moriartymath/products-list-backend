const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const { PORT = 5000, URL = "localhost" } = process.env;

app.listen(PORT, URL, () => console.log(`Server listening on port ${PORT}`));
