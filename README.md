# Crypto

A dev enviornment for crypto related things. What's inside?

* bitcoin (mainnet, testnet)
* rsk (mainnet, testnet)
* rsk explorer (mainnet, testnet)
* ganache
* truffle

With this repo, you will use a lot of servers (9) and will need a decent computer
and a lot of disk space.

## Notes

* for rsk to work, you need to run ./scripts/rsk-id and put the values for nodeId and privateKey in dockers/rsk/mainnet.conf
* for rsk testnet to work, you need to run ./scripts/rsk-testnet-id and put the values for nodeId and privateKey in dockers/rsk/testnet.conf
* for bitcoin to work, make sure you set the correct allowip in dockers/bitcoin/bitcoin.conf
* for bitcoin testnet to work, make sure you set the correct allowip in dockers/bitcoin/testnet.conf
* security is not the focus of this repo (for now). bitcoin username and password is kek

## Quickstart

```
./scripts/up
./scripts/truffle console --network mainnet
web3.eth.blockNumber
```

While you wait for blockchains to sync, you can go to http://localhost:3000 to
play Smack'em. It will take a while.

Once syncing is done you will have:

* http://localhost:3000 - Smack'em (totally optional)
* http://localhost:3001 - Explorer RSK
* http://localhost:3002 - Explorer RSK Testnet

## Scripts

Some useful scripts are also included:

* ./scripts/bitcoin-cli
* ./scripts/bitcoin-testnet-cli
* ./scripts/clean-data
* ./scripts/rsk-id
* ./scripts/rsk-testnet-id
* ./scripts/truffle
* ./scripts/up
