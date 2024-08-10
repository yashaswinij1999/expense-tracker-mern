import { useContext } from "react";
import { transactionContext } from "../context/GlobalContext";
import Transactions from "./Transactions";

function TransactionList() {
  const { state } = useContext(transactionContext);

  console.log(state);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {state.map((el) => (
          <Transactions
            key={el.id}
            id={el._id}
            text={el.text}
            amount={el.amount}
          />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
