// import { useState } from "react"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "@/pages/Home/index";
import NotFound from "@/pages/NotFound/index";
import Miner from "@/pages/Miner/index";
import AboutUs from "@/pages/AboutUs/index";
import Story from "@/pages/Story/index";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import Navbar from "@/components/Navbar/index";
import Footer from "@/components/Footer/index";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation } from "react-router-dom";
import { clusterApiUrl } from '@solana/web3.js';
//import { OKXWalletAdapter } from '@okxweb3/coin-solana'; 


// import { MetaMaskConnector } from "wagmi/connectors/metaMask"

function App() {

  const network = 'https://patient-flashy-choice.solana-devnet.quiknode.pro/d64cdc98b119bb21e95f598fb1e096a693b0eb61/';


  const wallets = [new PhantomWalletAdapter() ];

 

  return (
   
   
      <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
      <ToastContainer />
      
        {/* <div
          className={`
            page-wrapper
            ${currentRoute === '/' ? 'page-wrapper-home' : ''}
            ${currentRoute === '/mint' ? 'page-wrapper-mint' : ''}
            ${currentRoute === '/about_us' ? 'page-wrapper-about' : ''}
            ${currentRoute === '/story' ? 'page-wrapper-story' : ''}
          `}
        >
          <div className="page-wrapper-bg">
            <div className="bg-item"></div>
            <div className="bg-item"></div>
            <div className="bg-item"></div>
            <div className="bg-item"></div>
            <div className="bg-item"></div>
          </div> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mint" element={<Miner />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/story" element={<Story />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  
  );
}


export default App; 