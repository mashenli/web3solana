export const chainId = import.meta.env.VITE_CHAIN_ID;
export const apiUri = "https://api.wbdoge.com";

const networkConfigMap = {
  31337: {
    name: "localhost",
    gasLimit: 100 * 10000,
    pancakeV2Factory: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    pancakeV2Router: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    WBNBToken: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    USDTToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  },
  56: {
    name: "bsc",
    gasLimit: 100 * 10000,
    pancakeV2Factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
    pancakeV2Router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    WBNBToken: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    USDTToken: "0x55d398326f99059fF775485246999027B3197955",
  },
};

export const networkConfig = networkConfigMap[chainId];
