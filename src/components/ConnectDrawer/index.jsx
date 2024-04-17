import React, { useEffect, useState } from 'react';
import './index.scss';
import { Drawer } from 'antd';
import { useWallet } from '@solana/wallet-adapter-react'; // 导入 useWallet
import { PhantomWalletName } from '@solana/wallet-adapter-phantom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


function ConnectDrawer(props) {
    const { isShow, onClose } = props;
    const { connect, connected, wallet, select, publicKey } = useWallet();
    const [isWalletReady, setIsWalletReady] = useState(false);

    useEffect(() => {

        if (window.solana && window.solana.isPhantom) {
            console.log("Phantom 钱包已检测到。");
            setIsWalletReady(true);
        } else {
            console.log("没有检测到 Phantom 钱包，请安装 Phantom 钱包扩展并在此浏览器中激活。");
        }
        // 检测 OKX 钱包
        if (window.okxwallet && window.okxwallet.solana) {
            console.log("OKX 钱包已检测到。");
            setIsWalletReady(true);
        } else {
            console.log("没有检测到 OKX 钱包，请确保 OKX 钱包扩展已安装并在此浏览器中激活。");
        }

        if (window.bitkeep && window.bitkeep.solana) {
            console.log("Bitkeep 钱包已检测到。");
            setIsWalletReady(true);
        } else {
            console.log("没有检测到 Bitkeep 钱包，请确保 Bitkeep 钱包扩展已安装并在此浏览器中激活。");
        }

    }, []);

    useEffect(() => {
        console.log(`Connection status: ${connected}`);
        console.log(`Wallet readyState: ${wallet?.adapter.readyState}`);
        console.log(`Public key: ${publicKey ? publicKey.toString() : 'undefined'}`);
    
        if (connected && publicKey) {
            console.log('Wallet is fully connected and public key is available.');
        } else {
            console.log('Wallet not fully connected or public key not available.');
        }
    }, [connected, wallet, publicKey]);


    const handleConnectPhantom = async () => {
        if (isWalletReady) {
            try {
                select(PhantomWalletName); 
                await connect(); 
                console.log("连接成功");
            } catch (error) {
                console.error('连接到Phantom钱包失败', error);
            }
        } else {
            console.log("钱包未准备好或未检测到钱包扩展。");
        }
    };

    const handleConnectOKX = async () => {
        if (isWalletReady) {
            try {
                const provider = window.okxwallet.solana;
                const resp = await provider.connect();
                console.log("连接成功:", resp.publicKey.toString());
            } catch (error) {
                console.error('连接到OKX钱包失败:', error);
            }
        } else {
            console.log("钱包未准备好或未检测到钱包扩展。");
        }
    };


    const handleConnectBitkeep = async () => {
        if (isWalletReady) {
            try {
                const provider = window.bitkeep.solana;
                await provider.connect();
                const accountInfo = await provider.getAccount();
                if (accountInfo && accountInfo.publicKey) {
                    console.log("连接成功:", accountInfo.publicKey.toString());
                } else {
                    console.log("连接成功，但未能获取 public key");
                }
            } catch (error) {
                console.error('连接到Bitkeep钱包失败:', error);
            }
        } else {
            console.log("钱包未准备好或未检测到钱包扩展。");
        }
    };
    

    return (
        <Drawer
            open={isShow}
            className='connect-drawer'
            onClose={onClose}
            placement='bottom'
            height={'101.733vw'}
            title="Connect Wallet"
        >
            <div className='connect-drawer-content'>
                <div className='drawer-content-top'>
                    <div className='top-item' onClick={handleConnectPhantom}>
                        <div className='top-item-icon'></div>
                        <div className='top-item-title'>TokenPocket</div>
                    </div>

                    <div className='top-item'>
                        <div className='top-item-icon' onClick={handleConnectOKX}></div>
                        <div className='top-item-title'>OKX</div>
                    </div>

                    <div className='top-item' onClick={handleConnectBitkeep}>
                        <div className='top-item-icon'></div>
                        <div className='top-item-title'>Phantom</div>
                    </div>

                    <div className='top-item'>
                        <div className='top-item-icon'></div>
                        <div className='top-item-title'>BinanceWallet</div>
                    </div>
                    <div className='top-item'>
                        <div className='top-item-icon'></div>
                        <div className='top-item-title'>MetaMask</div>
                    </div>
                </div>

                <div className='drawer-content-bottom'>
                    <div className='bottom-title'>
                        Connect Wallet
                    </div>
                    <div className='bottom-desc'>
                        Please keep your private key and seed phrase safe.
                        Select your wallet from the options to get started.
                    </div>
                    <div className='bottom-link'>{`I Don't Have A Wallet > `}</div>
                </div>
            </div>
            <WalletMultiButton className="wallet-adapter-dropdown" />
        </Drawer>
    )
};

export default ConnectDrawer;