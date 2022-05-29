// let accounts = require("../../accounts");
// const res = require("express/lib/response");
const { findById } = require("../../database/models/Account");
const Account = require("../../database/models/Account");

exports.fetchAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.status(200).json(accounts);
};

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(501).json(error);
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const foundAccount = await Account.findById(req.params.accountId);
    if (foundAccount) {
      await Account.findByIdAndUpdate(req.params.accountId, req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account deosn't exist!" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const foundAccount = await Account.findById(req.params.accountId);
    if (foundAccount) {
      await Account.remove(foundAccount);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account deosn't exist!" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//the no database version
// exports.fetchAccounts = (req, res) => {
//   res.json(accounts);
// };

// exports.createAccount = (req, res) => {
//   const id = accounts.length + 1;
//   req.body.id = id;
//   accounts.push(req.body);
//   res.status(201).json(req.body);
// };

// exports.updateAccount = (req, res) => {
//   const account = accounts.find(
//     (_account) => _account.id === +req.params.accountId
//   );
//   if (account) {
//     for (const key in req.body) {
//       account[key] = req.body[key];
//     }
//     res.status(202).json(req.body);
//   } else {
//     res.status(404).json({ message: "Account deosn't exist!" });
//   }
// };

// exports.deleteAccount = (req, res) => {
//   const account = accounts.find(
//     (_account) => _account.id === +req.params.accountId
//   );
//   if (account) {
//     const account = accounts.filter(
//       (_account) => _account.id !== +req.params.accountId
//     );
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Account deosn't exist!" });
//   }
// };
//the no database version
