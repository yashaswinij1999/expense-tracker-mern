import "./App.css";
import AddTransactions from "./components/AddTransactions";
import Balance from "./components/Balance";
import Heading from "./components/Heading";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import GlobalContext from "./context/GlobalContext";

function App() {
  return (
    <>
      <GlobalContext>
        <Heading />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactions />
      </GlobalContext>
    </>
  );
}

export default App;
