import { describe, expect, test } from 'vitest'

import * as chains from './chains'

test('exports chains', () => {
  expect(chains).toMatchInlineSnapshot(`
    {
      "arbitrum": {
        "blockExplorers": {
          "default": {
            "name": "Arbiscan",
            "url": "https://arbiscan.io",
          },
          "etherscan": {
            "name": "Arbiscan",
            "url": "https://arbiscan.io",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 7654707,
          },
        },
        "id": 42161,
        "name": "Arbitrum One",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "arbitrum",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://arb-mainnet.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://arb-mainnet.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://arb1.arbitrum.io/rpc",
            ],
          },
          "infura": {
            "http": [
              "https://arbitrum-mainnet.infura.io/v3",
            ],
            "webSocket": [
              "wss://arbitrum-mainnet.infura.io/ws/v3",
            ],
          },
        },
      },
      "arbitrumGoerli": {
        "blockExplorers": {
          "default": {
            "name": "Arbiscan",
            "url": "https://arbiscan.io",
          },
          "etherscan": {
            "name": "Arbiscan",
            "url": "https://arbiscan.io",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 7654707,
          },
        },
        "id": 421613,
        "name": "Arbitrum Goerli",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Arbitrum Goerli Ether",
          "symbol": "ETH",
        },
        "network": "arbitrum-goerli",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://arb-goerli.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://arb-goerli.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://arb1.arbitrum.io/rpc",
            ],
          },
          "infura": {
            "http": [
              "https://arbitrum-goerli.infura.io/v3",
            ],
            "webSocket": [
              "wss://arbitrum-goerli.infura.io/ws/v3",
            ],
          },
        },
        "testnet": true,
      },
      "avalanche": {
        "blockExplorers": {
          "default": {
            "name": "SnowTrace",
            "url": "https://snowtrace.io",
          },
          "etherscan": {
            "name": "SnowTrace",
            "url": "https://snowtrace.io",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 11907934,
          },
        },
        "id": 43114,
        "name": "Avalanche",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Avalanche",
          "symbol": "AVAX",
        },
        "network": "avalanche",
        "rpcUrls": {
          "default": {
            "http": [
              "https://api.avax.network/ext/bc/C/rpc",
            ],
          },
        },
      },
      "avalancheFuji": {
        "blockExplorers": {
          "default": {
            "name": "SnowTrace",
            "url": "https://testnet.snowtrace.io",
          },
          "etherscan": {
            "name": "SnowTrace",
            "url": "https://testnet.snowtrace.io",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 7096959,
          },
        },
        "id": 43113,
        "name": "Avalanche Fuji",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Avalanche Fuji",
          "symbol": "AVAX",
        },
        "network": "avalanche-fuji",
        "rpcUrls": {
          "default": {
            "http": [
              "https://api.avax-test.network/ext/bc/C/rpc",
            ],
          },
        },
        "testnet": true,
      },
      "bsc": {
        "blockExplorers": {
          "default": {
            "name": "BscScan",
            "url": "https://bscscan.com",
          },
          "etherscan": {
            "name": "BscScan",
            "url": "https://bscscan.com",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 15921452,
          },
        },
        "id": 56,
        "name": "Binance Smart Chain",
        "nativeCurrency": {
          "decimals": 18,
          "name": "BNB",
          "symbol": "BNB",
        },
        "network": "bsc",
        "rpcUrls": {
          "default": {
            "http": [
              "https://rpc.ankr.com/bsc",
            ],
          },
        },
      },
      "bscTestnet": {
        "blockExplorers": {
          "default": {
            "name": "BscScan",
            "url": "https://testnet.bscscan.com",
          },
          "etherscan": {
            "name": "BscScan",
            "url": "https://testnet.bscscan.com",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 17422483,
          },
        },
        "id": 97,
        "name": "Binance Smart Chain Testnet",
        "nativeCurrency": {
          "decimals": 18,
          "name": "BNB",
          "symbol": "tBNB",
        },
        "network": "bsc-testnet",
        "rpcUrls": {
          "default": {
            "http": [
              "https://bsctestapi.terminet.io/rpc",
            ],
          },
        },
        "testnet": true,
      },
      "celo": {
        "formatters": {
          "block": [Function],
          "transaction": [Function],
          "transactionRequest": [Function],
        },
        "id": 42220,
        "name": "Celo",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Celo",
          "symbol": "CELO",
        },
        "network": "celo",
        "rpcUrls": {
          "default": {
            "http": [
              "https://rpc.ankr.com/celo",
            ],
          },
        },
      },
      "defineBlock": [Function],
      "defineChain": [Function],
      "defineTransaction": [Function],
      "defineTransactionReceipt": [Function],
      "defineTransactionRequest": [Function],
      "fantom": {
        "blockExplorers": {
          "default": {
            "name": "FTMScan",
            "url": "https://ftmscan.com",
          },
          "etherscan": {
            "name": "FTMScan",
            "url": "https://ftmscan.com",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 33001987,
          },
        },
        "id": 250,
        "name": "Fantom",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Fantom",
          "symbol": "FTM",
        },
        "network": "fantom",
        "rpcUrls": {
          "default": {
            "http": [
              "https://rpc.ankr.com/fantom",
            ],
          },
        },
      },
      "fantomTestnet": {
        "blockExplorers": {
          "default": {
            "name": "FTMScan",
            "url": "https://testnet.ftmscan.com",
          },
          "etherscan": {
            "name": "FTMScan",
            "url": "https://testnet.ftmscan.com",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 8328688,
          },
        },
        "id": 250,
        "name": "Fantom Testnet",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Fantom",
          "symbol": "FTM",
        },
        "network": "fantom-testnet",
        "rpcUrls": {
          "default": {
            "http": [
              "https://rpc.testnet.fantom.network",
            ],
          },
        },
      },
      "foundry": {
        "id": 31337,
        "name": "Foundry",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "foundry",
        "rpcUrls": {
          "default": {
            "http": [
              "http://127.0.0.1:8545",
            ],
          },
        },
      },
      "goerli": {
        "blockExplorers": {
          "default": {
            "name": "Etherscan",
            "url": "https://goerli.etherscan.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://goerli.etherscan.io",
          },
        },
        "contracts": {
          "ensRegistry": {
            "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 6507670,
          },
        },
        "id": 5,
        "name": "Goerli",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Goerli Ether",
          "symbol": "GOR",
        },
        "network": "goerli",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://eth-goerli.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://eth-goerli.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://rpc.ankr.com/eth_goerli",
            ],
          },
          "infura": {
            "http": [
              "https://goerli.infura.io/v3",
            ],
            "webSocket": [
              "wss://goerli.infura.io/ws/v3",
            ],
          },
        },
        "testnet": true,
      },
      "hardhat": {
        "id": 31337,
        "name": "Hardhat",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "hardhat",
        "rpcUrls": {
          "default": {
            "http": [
              "http://127.0.0.1:8545",
            ],
          },
        },
      },
      "localhost": {
        "id": 1337,
        "name": "Localhost",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "localhost",
        "rpcUrls": {
          "default": {
            "http": [
              "http://127.0.0.1:8545",
            ],
          },
        },
      },
      "mainnet": {
        "blockExplorers": {
          "default": {
            "name": "Etherscan",
            "url": "https://etherscan.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://etherscan.io",
          },
        },
        "contracts": {
          "ensRegistry": {
            "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 14353601,
          },
        },
        "id": 1,
        "name": "Ethereum",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "homestead",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://eth-mainnet.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://eth-mainnet.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://cloudflare-eth.com",
            ],
          },
          "infura": {
            "http": [
              "https://mainnet.infura.io/v3",
            ],
            "webSocket": [
              "wss://mainnet.infura.io/ws/v3",
            ],
          },
        },
      },
      "optimism": {
        "blockExplorers": {
          "default": {
            "name": "Etherscan",
            "url": "https://optimistic.etherscan.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://optimistic.etherscan.io",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 4286263,
          },
        },
        "id": 10,
        "name": "Optimism",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Ether",
          "symbol": "ETH",
        },
        "network": "optimism",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://opt-mainnet.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://opt-mainnet.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://mainnet.optimism.io",
            ],
          },
          "infura": {
            "http": [
              "https://optimism-mainnet.infura.io/v3",
            ],
            "webSocket": [
              "wss://optimism-mainnet.infura.io/ws/v3",
            ],
          },
        },
      },
      "optimismGoerli": {
        "blockExplorers": {
          "default": {
            "name": "Etherscan",
            "url": "https://goerli-optimism.etherscan.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://goerli-optimism.etherscan.io",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 49461,
          },
        },
        "id": 420,
        "name": "Optimism Goerli",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Goerli Ether",
          "symbol": "ETH",
        },
        "network": "optimism-goerli",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://opt-goerli.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://opt-goerli.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://goerli.optimism.io",
            ],
          },
          "infura": {
            "http": [
              "https://optimism-goerli.infura.io/v3",
            ],
            "webSocket": [
              "wss://optimism-goerli.infura.io/ws/v3",
            ],
          },
        },
        "testnet": true,
      },
      "polygon": {
        "blockExplorers": {
          "default": {
            "name": "PolygonScan",
            "url": "https://polygonscan.com",
          },
          "etherscan": {
            "name": "PolygonScan",
            "url": "https://polygonscan.com",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 25770160,
          },
        },
        "id": 137,
        "name": "Polygon",
        "nativeCurrency": {
          "decimals": 18,
          "name": "MATIC",
          "symbol": "MATIC",
        },
        "network": "matic",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://polygon-mainnet.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://polygon-mainnet.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://polygon-rpc.com",
            ],
          },
          "infura": {
            "http": [
              "https://polygon-mainnet.infura.io/v3",
            ],
            "webSocket": [
              "wss://polygon-mainnet.infura.io/ws/v3",
            ],
          },
        },
      },
      "polygonMumbai": {
        "blockExplorers": {
          "default": {
            "name": "PolygonScan",
            "url": "https://mumbai.polygonscan.com",
          },
          "etherscan": {
            "name": "PolygonScan",
            "url": "https://mumbai.polygonscan.com",
          },
        },
        "contracts": {
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 25770160,
          },
        },
        "id": 80001,
        "name": "Polygon Mumbai",
        "nativeCurrency": {
          "decimals": 18,
          "name": "MATIC",
          "symbol": "MATIC",
        },
        "network": "maticmum",
        "rpcUrls": {
          "alchemy": {
            "http": [
              "https://polygon-mumbai.g.alchemy.com/v2",
            ],
            "webSocket": [
              "wss://polygon-mumbai.g.alchemy.com/v2",
            ],
          },
          "default": {
            "http": [
              "https://matic-mumbai.chainstacklabs.com",
            ],
          },
          "infura": {
            "http": [
              "https://polygon-mumbai.infura.io/v3",
            ],
            "webSocket": [
              "wss://polygon-mumbai.infura.io/ws/v3",
            ],
          },
        },
        "testnet": true,
      },
      "sepolia": {
        "blockExplorers": {
          "default": {
            "name": "Etherscan",
            "url": "https://sepolia.etherscan.io",
          },
          "etherscan": {
            "name": "Etherscan",
            "url": "https://sepolia.etherscan.io",
          },
        },
        "contracts": {
          "ensRegistry": {
            "address": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          "multicall3": {
            "address": "0xca11bde05977b3631167028862be2a173976ca11",
            "blockCreated": 6507670,
          },
        },
        "id": 11155111,
        "name": "Sepolia",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Sepolia Ether",
          "symbol": "SEP",
        },
        "network": "sepolia",
        "rpcUrls": {
          "default": {
            "http": [
              "https://rpc.sepolia.org",
            ],
          },
          "infura": {
            "http": [
              "https://sepolia.infura.io/v3",
            ],
            "webSocket": [
              "wss://sepolia.infura.io/ws/v3",
            ],
          },
        },
        "testnet": true,
      },
    }
  `)
})

describe('defineChain', () => {
  test('default', () => {
    expect(
      chains.defineChain({
        id: 42220,
        name: 'Celo',
        network: 'celo',
        nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://rpc.ankr.com/celo'] },
        },
      }),
    ).toMatchInlineSnapshot(`
      {
        "id": 42220,
        "name": "Celo",
        "nativeCurrency": {
          "decimals": 18,
          "name": "Celo",
          "symbol": "CELO",
        },
        "network": "celo",
        "rpcUrls": {
          "default": {
            "http": [
              "https://rpc.ankr.com/celo",
            ],
          },
        },
      }
    `)
  })

  test('args: formatters', () => {
    const { block, transaction, transactionRequest } = chains.celo.formatters!

    expect(
      block({
        baseFeePerGas: '0x0',
        extraData:
          '0xd983010700846765746889676f312e31372e3133856c696e7578000000000000f8ccc0c080b84169807e4d7934803decfde330167e444ec323431e1ff4cd70f40f2e79f24ce91f60340b99f97e3562ee57389e2c72343a74379e0b8b7ca5237ec141e84278bb3e00f8418e3e8af95497b7f6ffe7d3c4cbfbbdb06b26f6f3e913ca2cb7dff23532eaf3eb9f3b06ae75498c88353d279cf58fb0570736e2aa20cf53381722b6485f0f3c8180f8418e3fffffffffffffffffffffffffffb0005d23be939b9f8135e6b1ff283baff985c1b6ccacf2b6aa7fbd8939c4b6178b1d242b574a614b6347182a3b3195258080',
        gasUsed: '0x1',
        hash: '0xac8c9bc3b84e103dc321bbe83b670e425ff68bfc9a333a4f1b1b204ad11c583d',
        logsBloom:
          '0x02004000004200000000000000800020000000000000400002040000002020000000802000000000000180000001000020800000000000000000000000000000000000000022000260000008000800000000000000000000000000000000000000000008000410002100000140000800000044c00200000000400010000800008800000080000000000010000040000000000000000000000000000000800020028000000100000000000000000000002002881000000000000800020000040020900402020000180000000000000040000800000011020090002000400000200010002000001000000000000080000000000000000000000000000004000000',
        miner: '0xe267d978037b89db06c6a5fcf82fad8297e290ff',
        number: '0x2',
        parentHash:
          '0xf6e57c99be5a81167bcb7bdf8d55572235384182c71635857ace2c04d25294ed',
        randomness: {
          committed:
            '0x339714505ecf55eacc2d2568ea53a7424bd0aa40fd710fd6892464d0716da711',
          revealed:
            '0xe10b5f01b0376fdc9151f66992f8c1b990083acabc14ec1b04f6a53ad804db88',
        },
        receiptsRoot:
          '0xca8aabc507534e45c982aa43e38118fc6f9cf222800e3d703a6e299a2e661f2a',
        size: '0x3',
        stateRoot:
          '0x051c8e40ed3d8afabbad5321a4bb6b9d686a8a62d9b696b3e5a5c769c3623d48',
        timestamp: '0x4',
        totalDifficulty: '0x5',
        transactions: [
          '0x487efb864b308ee85afd7ed5954e968457cfe84e71726114b0a44f31fb876e85',
          '0x3aa054b868fb0ce99388d74165b6128a5aca0992a785eb73a84fb7532f02a6a3',
          '0x7273f2bf436b14621094de5694d5aced028666389c7a89f4a863ac33d653cf52',
          '0xe5240102364623faf753498c52102de4a5f9641ceb6f99d9c92b032716e2f8f9',
          '0x92c31e9e4397e08a5abcccd8cc466e73d554be16da1ca7cac6a01b643f806524',
          '0x0acc190dfc0bbc6c9823dc17ff815c94e1494b60f9be9b6e045cbad572fdbdb1',
          '0x27c8cff64388e80b279407758d6801fe0dfe3410bacc7051deddf6c49c16710c',
          '0x6d4e4a0a01b1ebbb8be5cddede5de036779bd230ffc22e465eaa6128bd552ecb',
          '0xa80107ba2f636428883a71b7ce8a23171faf5076bae51e3a68e046c143434ed9',
          '0xcdadac0ee4a8901992ee365b7d251ff567134b007d2ad2d6a2285f7091998d60',
          '0xdff49ec96503acbd0110a8200f0f18b9924978bc5db32ae5c47a0986bcb58b58',
          '0xb0591b97ed1f7779e5cd548a9acfdad535d9073a3879d5bd4e3ff053bce31c5f',
          '0xa58e9da5702648d3f3f81e44952d5072b07b10eb13477a877cf3d957443b5605',
          '0x00d3bf8dc0ed9b62a786ce2fe1bec7de9d0ba286421acd3c4942b055b0741c0c',
          '0xf02343c58c6ef8007e86840e8ac9f8c2a6c52c7877b7554e87711efaab49d50a',
          '0x063f62e3c507eb0102f9dbe887520db4a1d3d34c4279f646bc3fc2c76e074369',
          '0xbeb28f46cc143db996e14fa35591cb5de4dcc92a569422f68f87f3f6a72a0e64',
          '0x9a38f385833a2c1ea159031f12c3e1af4033860c389afb69d77d1b897f37c452',
          '0xae6dbf3554a531e0ad6c51ec1e2201b41859f466dbb0ca3364fa7237fb0c60f3',
          '0x789aca8285c9e0ce2deb306f2c2f0f53df9b3601e295bdc0838a8622bd697be6',
          '0x230ebdcd6c3282992c8793f23eb847f955220f2a6c14bb82b38bc48ccf0cf1c4',
          '0xad7f4b13ac995055b681cb64f90bfe2863582e49d1179b837ebde353117ab2b4',
          '0xe40fc6bbacf5cfc1f6c41f06737d7df6274aef89a9c46bbe4fb8cb8484ffa54b',
          '0xa78f1aa9b1a0a2130477c0ed9df303c033c5c852240689a9ec34347333defa42',
          '0x3b10b4297066dbac52031920159034ef43544b77fc82c5fcc561df7208064b2f',
          '0x5d73e6bb86089544825ca8c8ca2091744b7fd25bdd36a8b4d9941968be76a845',
          '0x2f5d0deb26329807564b18ecbf24d9cb9d802d92369ea48c78fb973e1ea78994',
          '0x086a6ff358bce56bcbc022978b1b84448143ae66de7f9e0c3f7a68bce7664135',
          '0x8f36d90a6da392b377162caa1f81a5f0e3882c48794bea979bf79f119bb9284d',
          '0xe0a475e8a6f9495b00a55d8472b108171bf11a51cb8db131c98c25a17d0ac78c',
          '0x8ba00695bd7b524ff55fbbda3f17c6e93056e6895089de2ee29d58541e11b88f',
          '0xf971ed0462249050dbeaa4a812c2b881957d4225587dcd10c88581ca6b096a36',
          '0x229ab6e46f4be57cb81f8c7b2070f19827e55d4162c72b4abf26e618521eaaee',
          '0x99601bf74f39ef88dabd853b40e86bc9653899a93af85518fe73ecf372578588',
          '0x5deaa0abfd7689d3c33543a3d3b1bebc3dba46acd72246775fabb0bb5561e410',
          '0x413bada477356cdf02680950e2d0368ce3614eccc4a6c245fabd54ee07253f60',
        ],
        transactionsRoot:
          '0xb293e2c4ce20a9eac253241e750a5592c9d3c1b27bf090d0fc2fa4756a038866',
      }),
    ).toMatchInlineSnapshot(`
      {
        "baseFeePerGas": 0n,
        "extraData": "0xd983010700846765746889676f312e31372e3133856c696e7578000000000000f8ccc0c080b84169807e4d7934803decfde330167e444ec323431e1ff4cd70f40f2e79f24ce91f60340b99f97e3562ee57389e2c72343a74379e0b8b7ca5237ec141e84278bb3e00f8418e3e8af95497b7f6ffe7d3c4cbfbbdb06b26f6f3e913ca2cb7dff23532eaf3eb9f3b06ae75498c88353d279cf58fb0570736e2aa20cf53381722b6485f0f3c8180f8418e3fffffffffffffffffffffffffffb0005d23be939b9f8135e6b1ff283baff985c1b6ccacf2b6aa7fbd8939c4b6178b1d242b574a614b6347182a3b3195258080",
        "gasUsed": 1n,
        "hash": "0xac8c9bc3b84e103dc321bbe83b670e425ff68bfc9a333a4f1b1b204ad11c583d",
        "logsBloom": "0x02004000004200000000000000800020000000000000400002040000002020000000802000000000000180000001000020800000000000000000000000000000000000000022000260000008000800000000000000000000000000000000000000000008000410002100000140000800000044c00200000000400010000800008800000080000000000010000040000000000000000000000000000000800020028000000100000000000000000000002002881000000000000800020000040020900402020000180000000000000040000800000011020090002000400000200010002000001000000000000080000000000000000000000000000004000000",
        "miner": "0xe267d978037b89db06c6a5fcf82fad8297e290ff",
        "number": 2n,
        "parentHash": "0xf6e57c99be5a81167bcb7bdf8d55572235384182c71635857ace2c04d25294ed",
        "randomness": {
          "committed": "0x339714505ecf55eacc2d2568ea53a7424bd0aa40fd710fd6892464d0716da711",
          "revealed": "0xe10b5f01b0376fdc9151f66992f8c1b990083acabc14ec1b04f6a53ad804db88",
        },
        "receiptsRoot": "0xca8aabc507534e45c982aa43e38118fc6f9cf222800e3d703a6e299a2e661f2a",
        "size": 3n,
        "stateRoot": "0x051c8e40ed3d8afabbad5321a4bb6b9d686a8a62d9b696b3e5a5c769c3623d48",
        "timestamp": 4n,
        "totalDifficulty": 5n,
        "transactions": [
          "0x487efb864b308ee85afd7ed5954e968457cfe84e71726114b0a44f31fb876e85",
          "0x3aa054b868fb0ce99388d74165b6128a5aca0992a785eb73a84fb7532f02a6a3",
          "0x7273f2bf436b14621094de5694d5aced028666389c7a89f4a863ac33d653cf52",
          "0xe5240102364623faf753498c52102de4a5f9641ceb6f99d9c92b032716e2f8f9",
          "0x92c31e9e4397e08a5abcccd8cc466e73d554be16da1ca7cac6a01b643f806524",
          "0x0acc190dfc0bbc6c9823dc17ff815c94e1494b60f9be9b6e045cbad572fdbdb1",
          "0x27c8cff64388e80b279407758d6801fe0dfe3410bacc7051deddf6c49c16710c",
          "0x6d4e4a0a01b1ebbb8be5cddede5de036779bd230ffc22e465eaa6128bd552ecb",
          "0xa80107ba2f636428883a71b7ce8a23171faf5076bae51e3a68e046c143434ed9",
          "0xcdadac0ee4a8901992ee365b7d251ff567134b007d2ad2d6a2285f7091998d60",
          "0xdff49ec96503acbd0110a8200f0f18b9924978bc5db32ae5c47a0986bcb58b58",
          "0xb0591b97ed1f7779e5cd548a9acfdad535d9073a3879d5bd4e3ff053bce31c5f",
          "0xa58e9da5702648d3f3f81e44952d5072b07b10eb13477a877cf3d957443b5605",
          "0x00d3bf8dc0ed9b62a786ce2fe1bec7de9d0ba286421acd3c4942b055b0741c0c",
          "0xf02343c58c6ef8007e86840e8ac9f8c2a6c52c7877b7554e87711efaab49d50a",
          "0x063f62e3c507eb0102f9dbe887520db4a1d3d34c4279f646bc3fc2c76e074369",
          "0xbeb28f46cc143db996e14fa35591cb5de4dcc92a569422f68f87f3f6a72a0e64",
          "0x9a38f385833a2c1ea159031f12c3e1af4033860c389afb69d77d1b897f37c452",
          "0xae6dbf3554a531e0ad6c51ec1e2201b41859f466dbb0ca3364fa7237fb0c60f3",
          "0x789aca8285c9e0ce2deb306f2c2f0f53df9b3601e295bdc0838a8622bd697be6",
          "0x230ebdcd6c3282992c8793f23eb847f955220f2a6c14bb82b38bc48ccf0cf1c4",
          "0xad7f4b13ac995055b681cb64f90bfe2863582e49d1179b837ebde353117ab2b4",
          "0xe40fc6bbacf5cfc1f6c41f06737d7df6274aef89a9c46bbe4fb8cb8484ffa54b",
          "0xa78f1aa9b1a0a2130477c0ed9df303c033c5c852240689a9ec34347333defa42",
          "0x3b10b4297066dbac52031920159034ef43544b77fc82c5fcc561df7208064b2f",
          "0x5d73e6bb86089544825ca8c8ca2091744b7fd25bdd36a8b4d9941968be76a845",
          "0x2f5d0deb26329807564b18ecbf24d9cb9d802d92369ea48c78fb973e1ea78994",
          "0x086a6ff358bce56bcbc022978b1b84448143ae66de7f9e0c3f7a68bce7664135",
          "0x8f36d90a6da392b377162caa1f81a5f0e3882c48794bea979bf79f119bb9284d",
          "0xe0a475e8a6f9495b00a55d8472b108171bf11a51cb8db131c98c25a17d0ac78c",
          "0x8ba00695bd7b524ff55fbbda3f17c6e93056e6895089de2ee29d58541e11b88f",
          "0xf971ed0462249050dbeaa4a812c2b881957d4225587dcd10c88581ca6b096a36",
          "0x229ab6e46f4be57cb81f8c7b2070f19827e55d4162c72b4abf26e618521eaaee",
          "0x99601bf74f39ef88dabd853b40e86bc9653899a93af85518fe73ecf372578588",
          "0x5deaa0abfd7689d3c33543a3d3b1bebc3dba46acd72246775fabb0bb5561e410",
          "0x413bada477356cdf02680950e2d0368ce3614eccc4a6c245fabd54ee07253f60",
        ],
        "transactionsRoot": "0xb293e2c4ce20a9eac253241e750a5592c9d3c1b27bf090d0fc2fa4756a038866",
      }
    `)

    expect(
      transaction({
        accessList: [],
        blockHash:
          '0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d',
        blockNumber: '0x1',
        chainId: '0x1',
        feeCurrency: null,
        from: '0xa152f8bb749c55e9943a3a0a3111d18ee2b3f94e',
        gas: '0x2',
        gasPrice: undefined,
        gatewayFee: '0x3',
        gatewayFeeRecipient: null,
        hash: '0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b',
        input:
          '0x23b872dd000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0000000000000000000000000f16e9b0d03470827a95cdfd0cb8a8a3b46969b910000000000000000000000000000000000000000000000000000002b3b6fb3d0',
        maxFeePerGas: '0x4',
        maxPriorityFeePerGas: '0x5',
        nonce: '0x6',
        r: '0x5e49a7bd0534c6b6d3bbe581659424d3747f920d40ce56e48d26e5d94aac32ca',
        s: '0x1746abe27b7c4f00bda1ec714ac1f7083e9025b6ca3b2248e439a173e4ab55e0',
        to: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
        transactionIndex: '0x7',
        type: '0x2',
        v: '0x1',
        value: '0x0',
      }),
    ).toMatchInlineSnapshot(`
      {
        "accessList": [],
        "blockHash": "0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d",
        "blockNumber": 1n,
        "chainId": "0x1",
        "feeCurrency": null,
        "from": "0xa152f8bb749c55e9943a3a0a3111d18ee2b3f94e",
        "gas": 2n,
        "gasPrice": undefined,
        "gatewayFee": 3n,
        "gatewayFeeRecipient": null,
        "hash": "0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b",
        "input": "0x23b872dd000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0000000000000000000000000f16e9b0d03470827a95cdfd0cb8a8a3b46969b910000000000000000000000000000000000000000000000000000002b3b6fb3d0",
        "maxFeePerGas": 4n,
        "maxPriorityFeePerGas": 5n,
        "nonce": 6,
        "r": "0x5e49a7bd0534c6b6d3bbe581659424d3747f920d40ce56e48d26e5d94aac32ca",
        "s": "0x1746abe27b7c4f00bda1ec714ac1f7083e9025b6ca3b2248e439a173e4ab55e0",
        "to": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
        "transactionIndex": 7,
        "type": "eip1559",
        "v": 1n,
        "value": 0n,
      }
    `)

    expect(
      transaction({
        accessList: [],
        blockHash:
          '0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d',
        blockNumber: '0x1',
        chainId: '0x1',
        feeCurrency: null,
        from: '0xa152f8bb749c55e9943a3a0a3111d18ee2b3f94e',
        gas: '0x2',
        gasPrice: undefined,
        gatewayFee: null,
        gatewayFeeRecipient: null,
        hash: '0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b',
        input:
          '0x23b872dd000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0000000000000000000000000f16e9b0d03470827a95cdfd0cb8a8a3b46969b910000000000000000000000000000000000000000000000000000002b3b6fb3d0',
        maxFeePerGas: '0x4',
        maxPriorityFeePerGas: '0x5',
        nonce: '0x6',
        r: '0x5e49a7bd0534c6b6d3bbe581659424d3747f920d40ce56e48d26e5d94aac32ca',
        s: '0x1746abe27b7c4f00bda1ec714ac1f7083e9025b6ca3b2248e439a173e4ab55e0',
        to: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
        transactionIndex: '0x7',
        type: '0x2',
        v: '0x1',
        value: '0x0',
      }),
    ).toMatchInlineSnapshot(`
      {
        "accessList": [],
        "blockHash": "0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d",
        "blockNumber": 1n,
        "chainId": "0x1",
        "feeCurrency": null,
        "from": "0xa152f8bb749c55e9943a3a0a3111d18ee2b3f94e",
        "gas": 2n,
        "gasPrice": undefined,
        "gatewayFee": null,
        "gatewayFeeRecipient": null,
        "hash": "0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b",
        "input": "0x23b872dd000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0000000000000000000000000f16e9b0d03470827a95cdfd0cb8a8a3b46969b910000000000000000000000000000000000000000000000000000002b3b6fb3d0",
        "maxFeePerGas": 4n,
        "maxPriorityFeePerGas": 5n,
        "nonce": 6,
        "r": "0x5e49a7bd0534c6b6d3bbe581659424d3747f920d40ce56e48d26e5d94aac32ca",
        "s": "0x1746abe27b7c4f00bda1ec714ac1f7083e9025b6ca3b2248e439a173e4ab55e0",
        "to": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
        "transactionIndex": 7,
        "type": "eip1559",
        "v": 1n,
        "value": 0n,
      }
    `)

    expect(
      transactionRequest({
        feeCurrency: '0x0f16e9b0d03470827a95cdfd0cb8a8a3b46969b9',
        from: '0x0f16e9b0d03470827a95cdfd0cb8a8a3b46969b9',
        gas: 1n,
        gatewayFee: '0x4',
        gatewayFeeRecipient: '0x0f16e9b0d03470827a95cdfd0cb8a8a3b46969b9',
        maxFeePerGas: 2n,
        maxPriorityFeePerGas: 1n,
        nonce: 1,
        value: 1n,
      }),
    ).toMatchInlineSnapshot(`
      {
        "feeCurrency": "0x0f16e9b0d03470827a95cdfd0cb8a8a3b46969b9",
        "from": "0x0f16e9b0d03470827a95cdfd0cb8a8a3b46969b9",
        "gas": "0x1",
        "gasPrice": undefined,
        "gatewayFee": "0x4",
        "gatewayFeeRecipient": "0x0f16e9b0d03470827a95cdfd0cb8a8a3b46969b9",
        "maxFeePerGas": "0x2",
        "maxPriorityFeePerGas": "0x1",
        "nonce": "0x1",
        "value": "0x1",
      }
    `)
  })
})
