# ⭐ Stellar Wallet History (Freighter)

![React](https://img.shields.io/badge/Frontend-React-blue)
![Stellar](https://img.shields.io/badge/Blockchain-Stellar-purple)
![Network](https://img.shields.io/badge/Network-Testnet-orange)
![Wallet](https://img.shields.io/badge/Wallet-Freighter-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A React-based decentralized application (dApp) that connects to the **Freighter Wallet** and displays the connected account’s **XLM balance** and **recent transaction history** on the **Stellar Testnet**.

---

## 🚀 Quick Start

### 📌 Prerequisites

- Node.js (v16+ recommended)
- Freighter browser extension
- Freighter set to **Stellar Testnet**

---

### 🔧 Installation


npm install
npm start

The app runs at:

http://localhost:3000
 ✨ Features

🔗 Connect to Freighter wallet

🔌 Disconnect wallet

🔑 Display connected public key (truncated)

💰 Fetch and show XLM balance

📜 Transaction History Viewer (via Horizon Testnet API)

⚠️ Error handling implemented

🎨 Clean and responsive UI

 📁 Project Structure
src/
│
├── components/
│   ├── Freighter.js
│   ├── Header.js
│   └── TransactionHistory.js
│
└── App.js
🔹 Key Files

Freighter.js → Freighter helpers + Horizon server setup

Header.js → Wallet connect/disconnect + balance display

TransactionHistory.js → Fetches and displays recent transactions

📸 Screenshots
🖥️ Wallet Connected State

Displays:

Connected public key

XLM balance

Recent transactions
<img width="1917" height="967" alt="app-ui" src="https://github.com/user-attachments/assets/059de837-189d-46d0-a5e6-31bd2869e8e4" />


🌐 Testnet Transaction Example

Example of a transaction confirmed on the Stellar Testnet explorer.

<img width="1912" height="970" alt="testnet-transaction" src="https://github.com/user-attachments/assets/f284d788-de82-4aef-885e-12a01a3b249d" />

🧪 Build & Test

Run tests:

npm test

Create production build:

npm run build
🔒 Security Notes

This app uses the Stellar Testnet Horizon endpoint

Freighter manages private keys securely in the browser

No private keys are stored in the application

All blockchain data is fetched directly from Stellar Horizon API

🌐 Network Details

Horizon Server: https://horizon-testnet.stellar.org

Network: Stellar Testnet

Wallet: Freighter
