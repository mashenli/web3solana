import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Button } from 'antd';
import { Connection, PublicKey, SystemProgram, Transaction,clusterApiUrl } from '@solana/web3.js';
import "./miner.scss";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
//import { OKXWalletAdapter } from '@okxweb3/coin-solana'; 

const wallets = [new PhantomWalletAdapter()]; 

const Miner = () => {
  const { publicKey, wallet, connected } = useWallet();
  const [loading, setLoading] = useState(false);
  const [transactionError, setTransactionError] = useState(null);

  useEffect(() => {
    console.log(`Wallet connection status: ${connected}`);
    console.log(`Wallet public key: ${publicKey ? publicKey.toString() : 'undefined'}`);
  }, [connected, publicKey]);

  const onMint = async () => {
    if (!connected || !publicKey) {
      console.log('Wallet not connected or public key not available');
      setTransactionError('Wallet not connected or public key not available');
      return;
    }
  
    setLoading(true);
    setTransactionError(null);
  
    try {
      const connection = new Connection('https://patient-flashy-choice.solana-devnet.quiknode.pro/d64cdc98b119bb21e95f598fb1e096a693b0eb61/', 'confirmed');
      
      // 获取最新的区块哈希
      const { blockhash } = await connection.getLatestBlockhash('finalized');
      console.log('Using blockhash:', blockhash);
  
      const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: publicKey, 
      });
  
      // 添加转账指令
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('692t84am6ygj6chLtec7LrsBtuKKVBh9HVjwXGtbPXjR'),
          lamports: 1e9
        })
      );
  
      console.log('Transaction prepared, blockhash set:', transaction.recentBlockhash);
  
      // 签名交易
      const signedTransaction = await wallet.adapter.signTransaction(transaction);
      console.log('Transaction signed');
  
      // 发送交易
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());
      console.log('Transaction sent, signature:', signature);
  
      // 确认交易
      const result = await connection.confirmTransaction(signature, 'confirmed');
      console.log('Transaction confirmed:', result);

      await recordTransactionInDatabase(publicKey.toString(), signature);
  
      setLoading(false);
    } catch (error) {
      console.error('Failed to send transaction:', error);
      setLoading(false);
      setTransactionError('Failed to send transaction');
    }
  };
  

  const recordTransactionInDatabase = async (publicKey, signature) => {
    try {
      const response = await fetch('http://localhost:3000/recordTransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey,
          signature,
          amount: 1 // SOL amount
        }),
      });
      const data = await response.json();
      console.log('Transaction recorded:', data);
    } catch (error) {
      console.error('Error recording transaction:', error);
    }
  };

  return (
    <div className="mint-wrapper">
      <div className="mint-wrapper-bg">
        <div className="bg-item"></div>
        <div className="bg-item"></div>
        <div className="bg-item"></div>
        <div className="bg-item"></div>
        <div className="bg-item"></div>
      </div>
      <div className="mint-wrapper-top">
        <div className="top-title">Embrace<br/> Start & Wealth</div>
        <div className="top-desc">Let’s set off from here<br/> To welcome the new ecology and agreement</div>
      </div>
      <div className="mint-wrapper-control">
        <div className="control-form">
          <div className="control-form-item">
            <span>Ticker</span>
            <span>SOL</span>
          </div>
          <div className="control-form-item">
            <span>Benchmarking</span>
            <span>1 SOL=1000000 Whale</span>
          </div>
          <div className="control-form-title">Amount</div>
          <input className="control-form-btn" value={'222'}/>
        </div>
        <div className="control-btn" onClick={onMint}></div>
      </div>
      <div className="mint-wrapper-protocol">
        <div className="protocol-item">
          <div className="protocol-item-img"></div>
          <div className="protocol-item-main">
            <div className="main-title">Manifestation Form</div>
            <div className="main-desc">No private placement, no pre-sale, no airdrop, global synchronous and fair launch</div>
          </div>
        </div>
        <div className="protocol-item">
          <div className="protocol-item-img"></div>
          <div className="protocol-item-main">
            <div className="main-title">Time Arrangement</div>
            <div className="main-desc">Planed fair launch for one week, once the time is up, we will go live directly</div>
          </div>
        </div>
        <div className="protocol-item">
          <div className="protocol-item-img"></div>
          <div className="protocol-item-main">
            <div className="main-title">Effort and Reward</div>
            <div className="main-desc">Whale is a complete system that combines numerous ecosystems.<br/> Your seemingly insignificant $100 participation today may turn the holder into a millionaire</div>
          </div>
        </div>
      </div>
      <div className="mint-wrapper-excellence">
          <div className="excellence-title">Not only the cloud，<br />but also the excellence</div>
          <div className="excellence-icons">
            <div className="icons-item"></div>
            <div className="icons-item"></div>
            <div className="icons-item"></div>
            <div className="icons-item"></div>
            <div className="icons-item"></div>
            <div className="icons-item"></div>
          </div>
      </div>
    </div>
  );
};

export default Miner;
