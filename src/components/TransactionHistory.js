import React, { useEffect, useState } from "react";
import * as StellarSdk from "@stellar/stellar-sdk";
import { retrievePublicKey } from "./Freighter";

const server = new StellarSdk.Horizon.Server(
  "https://horizon-testnet.stellar.org"
);

const TransactionHistory = () => {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const address = await retrievePublicKey();

        const txs = await server
          .transactions()
          .forAccount(address)
          .limit(5)
          .order("desc")
          .call();

        setTransactions(txs.records);

      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
    <div className="card">
      <h3>Recent Transactions</h3>
      {transactions.map((tx) => (
        <div className="transaction" key={tx.id}>
          <p>Hash: {tx.hash}</p>
          <p>Created: {tx.created_at}</p>
          <hr />
        </div>
      ))}
      </div> 
    </div>
  );
};

export default TransactionHistory;