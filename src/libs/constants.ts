// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SupportedChainId, Token } from '@uniswap/sdk-core'

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  '0x652e3Dc407e951BD0aFcB0697B911e81F0dDC876'
export const QUOTER_CONTRACT_ADDRESS =
  '0xe0b3133592CD29BaA7d958Bc7675C40E83071Ae1'
export const SWAP_ROUTER_ADDRESS = '0x9c0dF4b950ca19Db6fEC13ab79aD180a9C15a41E'
export const WETH_CONTRACT_ADDRESS =
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

// Currencies and Tokens

export const WETH_TOKEN = new Token(
  666666666,
  '0x0000000000000000000000000000000000000000',
  18,
  'DEGEN',
  'Degen Native'
)

export const USDC_TOKEN = new Token(
  666666666,
  '0xa051a2cb19c00ecdffae94d0ff98c17758041d16',
  6,
  'PROXY',
  'PROXY'
)

// ABI's

export const ERC20_ABI = [
  // Read-Only Functions
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',

  // Authenticated Functions
  'function transfer(address to, uint amount) returns (bool)',
  'function approve(address _spender, uint256 _value) returns (bool)',

  // Events
  'event Transfer(address indexed from, address indexed to, uint amount)',
]

export const WETH_ABI = [
  // Wrap ETH
  'function deposit() payable',

  // Unwrap ETH
  'function withdraw(uint wad) public',
]

// Transactions

export const MAX_FEE_PER_GAS = 100000000000
export const MAX_PRIORITY_FEE_PER_GAS = 100000000000
export const TOKEN_AMOUNT_TO_APPROVE_FOR_TRANSFER = 2000
