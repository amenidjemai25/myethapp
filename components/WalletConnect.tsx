// WalletConnect.js
import React, { useState } from 'react';
import ethers from 'ethers';
import { MetaMaskInpageProvider } from "@metamask/providers";
import * as styles from './styles_walletconnect'; 

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const WalletConnect: React.FC<{ onConnect: (address: string) => void }> = ({ onConnect }) => {
  const [walletAddress, setWalletAddress] = useState('');

  async function requestAccount() {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install Meta Mask or a compatible Web3 provider');
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const address = accounts[0];
      setWalletAddress(address);
      onConnect(address);
    } catch (error) {
      console.log('Error connecting...');
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log('Connected to Ethereum network');
    }
  }

  const isConnected = walletAddress !== '';

  return (
    <div style={isConnected ? styles.connectedContainer : styles.container}>
      <p style={styles.addressText}>
        <span style={styles.connection}>Connected Wallet Address: </span>
        {isConnected ? walletAddress : 'Not Connected'}
      </p>
      {!isConnected && (
        <button style={styles.connectButton} onClick={requestAccount}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
