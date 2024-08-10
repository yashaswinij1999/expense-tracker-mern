import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const transactionContext = createContext();

const intialState = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <transactionContext.Provider value={{ state, dispatch }}>
        {children}
      </transactionContext.Provider>
    </div>
  );
}

export default GlobalContext;
