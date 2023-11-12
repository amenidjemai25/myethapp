import React from 'react';
import WalletConnect from '../components/WalletConnect';
import TokenInfo from '../components/TokenInfo';
import TokenTransfer from '../components/TokenTransfer';
import { useState } from 'react';

const Home: React.FC = () => {
  
  return (
    <div style={styles.all}>
      <h1 style={styles.title}>ETHEREUM WALLET APP</h1>
      <WalletConnect />
      <TokenInfo />
      <TokenTransfer/>
    </div>
  );
};

const styles = {
 
  title: {
    fontFamily: 'Arial, sans-serif', // Replace with the desired font family
    fontSize: '24px',
    color: '#000000',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '40px', // Align text to the center
    // Add some space at the bottom if needed
  },


  all: {
    color: 'red',
  }

 
  
  
 
};

export default Home;
