import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
import axios from "axios";

export const transactionContext = createContext();

const intialState = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async function () {
    try {
      const response = await axios.get("http://localhost:5000/transactions/");
      dispatch({ type: "get", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <transactionContext.Provider value={{ state, dispatch }}>
        {children}
      </transactionContext.Provider>
    </div>
  );
}

export default GlobalContext;
