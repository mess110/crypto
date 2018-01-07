# Crypto

A dev enviornment for crypto related things. What's inside?

* bitcoin (mainnet, testnet)
* insight (mainnet, testnet)
* rsk (mainnet, testnet)
* rsk explorer (mainnet, testnet)
* ganache
* truffle

With this repo, you will use a lot of servers (11) and will need a decent computer
and a lot of disk space.

TODO: add notes about nodeId and privateKey in dockers/rsk/mainnet.conf and
dockers/rsk/testnet.conf

TODO: write about kek

TODO: write about allowip in bitcoin.conf

```
./scripts/up
./scripts/truffle console --network mainnet
web3.eth.blockNumber
```

While you wait for blockchains to sync, you can go to http://localhost:3000 to
play Smack'em. It will take a while.

Once syncing is done you will have:

* http://localhost:3000 - Smack'em (totally optional)
* http://localhost:3001 - Insight Bitcoin
* http://localhost:3002 - Insight Bitcoin Testnet
* http://localhost:3003 - Explorer RSK
* http://localhost:3004 - Explorer RSK Testnet

Some useful scripts are also included:

* ./scripts/bitcoin-cli
* ./scripts/bitcoin-testnet-cli
* ./scripts/clean-data
* ./scripts/rsk-node-id
* ./scripts/truffle
* ./scripts/up
