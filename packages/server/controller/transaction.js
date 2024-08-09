const Transaction = require("../model/transaction");

const addTransaction = async (req, res) => {
  try {
    const response = await Transaction.create(req.body);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};

const getTransactions = async (req, res) => {
  try {
    const data = await Transaction.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

const deleteTransactions = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Transaction.findByIdAndDelete({ _id: id });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addTransaction, getTransactions, deleteTransactions };
