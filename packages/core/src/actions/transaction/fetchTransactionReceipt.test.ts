import { assertType, expect, test } from 'vitest'

import { publicClient } from '../../../test'
import { celo, defineTransactionReceipt, localhost } from '../../chains'
import { createPublicClient, http } from '../../clients'
import type { TransactionReceipt } from '../../types'

import { fetchTransactionReceipt } from './fetchTransactionReceipt'

test('fetches transaction receipt', async () => {
  const receipt = await fetchTransactionReceipt(publicClient, {
    hash: '0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b',
  })
  assertType<TransactionReceipt>(receipt)
  expect(receipt).toMatchInlineSnapshot(`
    {
      "blockHash": "0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d",
      "blockNumber": 15131999n,
      "contractAddress": null,
      "cumulativeGasUsed": 5814407n,
      "effectiveGasPrice": 11789405161n,
      "from": "0xa152f8bb749c55e9943a3a0a3111d18ee2b3f94e",
      "gasUsed": 37976n,
      "logs": [
        {
          "address": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
          "blockHash": "0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d",
          "blockNumber": 15131999n,
          "data": "0x0000000000000000000000000000000000000000000000000000002b3b6fb3d0",
          "logIndex": 108n,
          "removed": false,
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0",
            "0x000000000000000000000000f16e9b0d03470827a95cdfd0cb8a8a3b46969b91",
          ],
          "transactionHash": "0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b",
          "transactionIndex": 69n,
        },
        {
          "address": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
          "blockHash": "0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d",
          "blockNumber": 15131999n,
          "data": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffd4c4904c2f",
          "logIndex": 109n,
          "removed": false,
          "topics": [
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "0x000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0",
            "0x000000000000000000000000a152f8bb749c55e9943a3a0a3111d18ee2b3f94e",
          ],
          "transactionHash": "0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b",
          "transactionIndex": 69n,
        },
      ],
      "logsBloom": "0x08000000000000000000000000000000000000000000000000001000002000000000000000000000000000000000000000000000080000000000000000200000000000000000000000000008400000000000000000000000000000000000100000000000000000000040000008000000000004000000000000000010000000000000000000000000000000000000000000000000000000000000000000000004020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000002090000000000000000000000000000000000000000000000000000000000000",
      "status": "success",
      "to": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
      "transactionHash": "0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b",
      "transactionIndex": 69,
      "type": "eip1559",
    }
  `)
})

test('chain w/ custom block type', async () => {
  const client = createPublicClient({
    chain: {
      ...celo,
      rpcUrls: localhost.rpcUrls,
      formatters: {
        transactionReceipt: defineTransactionReceipt({
          exclude: ['effectiveGasPrice'],
          format: () => ({
            foo: 'bar' as const,
          }),
        }),
      },
    },
    transport: http(),
  })
  const receipt = await fetchTransactionReceipt(client, {
    hash: '0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b',
  })

  assertType<
    Omit<TransactionReceipt, 'effectiveGasPrice'> & {
      foo: 'bar'
    }
  >(receipt)

  expect(receipt).toMatchInlineSnapshot(`
    {
      "blockHash": "0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d",
      "blockNumber": 15131999n,
      "contractAddress": null,
      "cumulativeGasUsed": 5814407n,
      "foo": "bar",
      "from": "0xa152f8bb749c55e9943a3a0a3111d18ee2b3f94e",
      "gasUsed": 37976n,
      "logs": [
        {
          "address": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
          "blockHash": "0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d",
          "blockNumber": 15131999n,
          "data": "0x0000000000000000000000000000000000000000000000000000002b3b6fb3d0",
          "logIndex": 108n,
          "removed": false,
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0",
            "0x000000000000000000000000f16e9b0d03470827a95cdfd0cb8a8a3b46969b91",
          ],
          "transactionHash": "0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b",
          "transactionIndex": 69n,
        },
        {
          "address": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
          "blockHash": "0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d",
          "blockNumber": 15131999n,
          "data": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffd4c4904c2f",
          "logIndex": 109n,
          "removed": false,
          "topics": [
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "0x000000000000000000000000a00f99bc38b1ecda1fd70eaa1cd31d576a9f46b0",
            "0x000000000000000000000000a152f8bb749c55e9943a3a0a3111d18ee2b3f94e",
          ],
          "transactionHash": "0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b",
          "transactionIndex": 69n,
        },
      ],
      "logsBloom": "0x08000000000000000000000000000000000000000000000000001000002000000000000000000000000000000000000000000000080000000000000000200000000000000000000000000008400000000000000000000000000000000000100000000000000000000040000008000000000004000000000000000010000000000000000000000000000000000000000000000000000000000000000000000004020000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000002090000000000000000000000000000000000000000000000000000000000000",
      "status": "success",
      "to": "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
      "transactionHash": "0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98b",
      "transactionIndex": 69,
      "type": "eip1559",
    }
  `)
})

test('throws if transaction not found', async () => {
  await expect(
    fetchTransactionReceipt(publicClient, {
      hash: '0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98a',
    }),
  ).rejects.toThrowErrorMatchingInlineSnapshot(`
    "Transaction with hash \\"0xa4b1f606b66105fa45cb5db23d2f6597075701e7f0e2367f4e6a39d17a8cf98a\\" could not be found.

    Details: transaction not found
    Version: viem@1.0.2"
  `)
})
