import { useContext } from "react";
import { transactionContext } from "../context/GlobalContext";

function IncomeExpenses() {
  const { state } = useContext(transactionContext);

  const incomeAmt = state.filter((el) => el.amount > 0);
  const income = incomeAmt.reduce((total, el) => (total += el.amount), 0);

  const expense = state
    .filter((el) => el.amount < 0)
    .reduce((sum, el) => (sum += el.amount), 0);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            ${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            ${Math.abs(expense)}
          </p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;
