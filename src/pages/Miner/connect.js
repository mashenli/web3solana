import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

function connect() {
    const { connect, connected } = useWallet();

    const handleConnectWallet = async () => {
        try {
            await connect();
        } catch (error) {
            console.error('连接到Phantom钱包失败', error);
        }
    };

    return (
        <div>
            {connected ? (
                <p>钱包已连接</p>
            ) : (
                <img
                    src="" // 换图片URL
                    alt="Connect to Phantom Wallet"
                    onClick={handleConnectWallet}
                    style={{ cursor: 'pointer' }}
                />
            )}
        </div>
    );
}

export default connect;
