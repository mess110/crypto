// http://truffleframework.com/docs/advanced/configuration
module.exports = {
  networks: {
    development: {
      host: "crypto_ganache_1",
      port: 8545,
      network_id: "*",
    },
    testnet: {
      host: "crypto_rsk_testnet_1",
      port: 4444,
      network_id: "*",
    },
    mainnet: {
      host: "crypto_rsk_mainnet_1",
      port: 4444,
      network_id: "*",
    }
  }
};
