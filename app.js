const express = require("express");
const accountRouts = require("./apis/accounts/accounts.routs");
//db
const connectDB = require("./database/connections");
const app = express();
app.use(express.json());
// routs
app.use("/api/accounts", accountRouts);
connectDB();
const PORT = 8001;
app.listen(PORT, () => console.log(`this app is running on port ${PORT}`));
