// TokenInfo.js
import React, { useState } from 'react';
import * as styles from './styles_tokeninfo'; 

const TokenInfo: React.FC = () => {
  const [tokenAddress, setTokenAddress] = useState<string>('');
  const [tokenInfo, setTokenInfo] = useState<{ name: string; balance: number; symbol: string } | null>(null);

  const handleGetTokenInfo = () => {
    const mockTokenInfo = {
      name: 'MasoDidi',
      balance: 25,
      symbol: '🦄',
    };
    setTokenInfo(mockTokenInfo);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Token Information</h2>
      <input
        type="text"
        placeholder="Enter your Token address"
        style={styles.input}
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
      />
      <button style={styles.button} onClick={handleGetTokenInfo}>
        Get Token Info
      </button>

      {tokenInfo && (
        <div style={styles.infoText}>
          <p>Name: {tokenInfo.name}</p>
          <p>Balance: {tokenInfo.balance}</p>
          <p>Symbol: {tokenInfo.symbol}</p>
        </div>
      )}
    </div>
  );
};

export default TokenInfo;
