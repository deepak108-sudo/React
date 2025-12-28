import Counting from "./Counting";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Stores";
import CustomCounter from "./CustomCounter";

function App() {
  return (
    //To give accesss of store to all component from starting of file
    <Provider store={store}>
      <Counting />
      <CustomCounter/>
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(<App />);
