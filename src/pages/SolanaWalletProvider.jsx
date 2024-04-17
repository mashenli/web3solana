import React, { createContext, useContext, useState } from 'react';


const WalletConnectionContext = createContext();


export const SolanaWalletProvider = ({ children }) => {
    const [wallet, setWallet] = useState({
        connected: false,
        publicKey: null
    });

    const connectWallet = (publicKey) => {
        setWallet({
            connected: true,
            publicKey
        });
    };

    return (
        <WalletConnectionContext.Provider value={{ wallet, connectWallet }}>
            {children}
        </WalletConnectionContext.Provider>
    );
};


export const useSolanaWallet = () => useContext(WalletConnectionContext);
