import { useContext } from "react";
import { transactionContext } from "../context/GlobalContext";

function Balance() {
  const { state } = useContext(transactionContext);

  const total = state.map((el) => el.amount).reduce((sum, el) => (sum += el));

  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
}

export default Balance;
