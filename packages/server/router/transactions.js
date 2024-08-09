const express = require("express");
const router = express.Router();
const {
  addTransaction,
  getTransactions,
  deleteTransactions,
} = require("../controller/transaction");

router.post("/", addTransaction);
router.get("/", getTransactions);
router.delete("/:id", deleteTransactions);

module.exports = router;
