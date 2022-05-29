const mongoose = require("mongoose");
const { Schema } = mongoose;
//const {Schema, model}=require ("mongoose") >> can be written in this way to require only one thing

const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  funds: { type: Number, default: 0 },
});

module.exports = mongoose.model("Account", accountSchema);
//we're telling it its a^model schema ^what im calling it^from here
