const express = require("express");

const {
  fetchAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("./account.controllers");

const router = express.Router();

//fetch
router.get("/", fetchAccounts);
//create
router.post("/", createAccount);
//update
router.put("/:accountId", updateAccount);
//delete
router.delete("/:accountId", deleteAccount);

module.exports = router;
