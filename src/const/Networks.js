import { ethers } from "ethers"
import { chainId } from "@/config"

const explorerMap = {
  56: "https://www.bscscan.com",
}

const rpcMap = {
  56: "https://light-distinguished-film.bsc.quiknode.pro/d59726d730f14db9e1b8215d1f02ca4d5cac9e49",
  31337: "http://localhost:8545",
}

const wsRpcMap = {
  56: "wss://light-distinguished-film.bsc.quiknode.pro/d59726d730f14db9e1b8215d1f02ca4d5cac9e49",
  31337: "ws://localhost:8545",
}

export const explorer = explorerMap[chainId]

export const provider = new ethers.providers.JsonRpcProvider(rpcMap[chainId])
export const wsProvider = new ethers.providers.WebSocketProvider(
  wsRpcMap[chainId]
)
