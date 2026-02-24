import "./App.css";
import React from "react";
import Header from "./components/header";
import TransactionHistory from "./components/TransactionHistory";
// import SendTransaction from "./components/SendTransaction";

function App() {
  return (
    <div>
      <Header />
      {/* <SendTransaction /> */}
      <TransactionHistory />
    </div>
  );
}

export default App;