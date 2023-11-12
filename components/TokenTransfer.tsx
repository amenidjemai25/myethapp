// TokenTransfer.js
import React, { useState } from 'react';
import { transferToken } from '../utils/web3';
import * as styles from './styles_tokentransfer'; 

const TokenTransfer: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [tokenQuantity, setTokenQuantity] = useState(0);
  const [transactionStatus, setTransactionStatus] = useState<string | null | void>(null);

  const handleTokenTransfer = async () => {
    try {
      const status = await transferToken(recipient, tokenQuantity);
      setTransactionStatus(status);

      if (status === 'success') {
        decrementTokenBalance(tokenQuantity);
      }
    } catch (error) {
      console.error('Error transferring tokens:', error);
    }
  };

  const handleIncrementTokenQuantity = () => {
    setTokenQuantity(tokenQuantity + 1);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button1} onClick={handleIncrementTokenQuantity}>
        +
      </button>
      <span style={styles.tokenQuantity}>{tokenQuantity} tokens</span>
      <button style={styles.button} onClick={handleTokenTransfer}>
        Transfer Token
      </button>
    </div>
  );
};

export default TokenTransfer;
