import "./App.css";
import AddTransactions from "./components/AddTransactions";
import Balance from "./components/Balance";
import Heading from "./components/Heading";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <>
      <Heading />
      <Balance />
      <IncomeExpenses />
      <AddTransactions />
    </>
  );
}

export default App;
