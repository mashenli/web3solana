import { ethers } from "ethers"
import abiPancakeV2Factory from "./abi/PancakeV2Factory.json"
import abiPancakeV2Pair from "./abi/PancakeV2Pair.json"
import abiPancakeV2Router from "./abi/PancakeV2Router.json"
import abiERC20 from "./abi/ERC20.json"
import abiBNB from "./abi/WBNB.json"
import { networkConfig, chainId } from "@/config"
import { provider, wsProvider } from "./Networks"

const ABIMap = {
  pancakeV2Factory: abiPancakeV2Factory,
  pancakeV2Router: abiPancakeV2Router,
  pancakeV2Pair: abiPancakeV2Pair,
  ERC20: abiERC20,
  WBNB: abiBNB,
}

const contractsMap = {
  pancakeV2Factory: networkConfig.pancakeV2Factory,
  pancakeV2Router: networkConfig.pancakeV2Router,
  WBNB: networkConfig.WBNBToken,
}

export const getContract = ({ address, contractType }) => {
  const abi = ABIMap[contractType]
  if (!address) {
    address = contractsMap[contractType]
  }
  return new ethers.Contract(address, abi, provider)
}

export const getContractWithWs = ({ address, contractType }) => {
  const abi = ABIMap[contractType]
  if (!address) {
    address = contractsMap[contractType]
  }
  return new ethers.Contract(address, abi, wsProvider)
}

export const getContractWithWallect = ({
  address,
  contractType,
  privateKey,
}) => {
  const abi = ABIMap[contractType]
  if (!address) {
    address = contractsMap[contractType]
  }
  const wallet = new ethers.Wallet(privateKey, provider)
  return new ethers.Contract(address, abi, wallet)
}

export const getContractWithWallectWs = ({
  address,
  contractType,
  privateKey,
}) => {
  const abi = ABIMap[contractType]
  if (!address) {
    address = contractsMap[contractType]
  }
  const wallet = new ethers.Wallet(privateKey, wsProvider)
  return new ethers.Contract(address, abi, wallet)
}

export const getTxCount = async (address) => {
  const txCount = await provider.getTransactionCount(address)
  return txCount
}

export const getBlockTime = async () => {
  let blockNum = await provider.getBlockNumber()
  let block = await provider.getBlock(blockNum)
  return block.timestamp
}

export const getGasPrice = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    networkConfig[chainId].rpc
  )
  return await provider.getGasPrice()
}
