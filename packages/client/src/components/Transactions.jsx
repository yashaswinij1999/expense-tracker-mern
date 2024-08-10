import { useContext } from "react";
import { transactionContext } from "../context/GlobalContext";
import axios from "axios";

function Transactions({ id, text, amount }) {
  const sign = amount > 0 ? "+" : "-";
  const { dispatch } = useContext(transactionContext);

  async function deleteTransaction(id) {
    dispatch({ type: "delete", payload: id });
    const data = await axios.delete(`http://localhost:5000/transactions/${id}`);
    console.log(data);
  }

  return (
    <li className={amount > 0 ? "plus" : "minus"} key={id}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
}

export default Transactions;
