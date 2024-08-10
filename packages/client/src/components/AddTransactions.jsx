import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { transactionContext } from "../context/GlobalContext";
import axios from "axios";
function AddTransactions() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { dispatch } = useContext(transactionContext);

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add", payload: { id: uuidv4(), text, amount } });
    const data = await axios.post("http://localhost:5000/transactions/", {
      id: uuidv4(),
      text,
      amount,
    });
    reset();
  }

  function reset() {
    setText("");
    setAmount(0);
  }

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
}

export default AddTransactions;
