require('dotenv').config()
// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  contracts_build_directory: './client/src/artifacts',
  networks: {
       development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*",
       },
    //  rinkeby: {
    //  provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/YOUR-PROJECT-ID`),
    //  network_id: 4,       // Rinkeby's id
    //  gas: 9000000,
    //  confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    //  timeoutBlocks: 400,  // # of blocks before a deployment times out  (minimum/default: 50)
    //  skipDryRun: true  ,   // Skip dry run before migrations? (default: false for public nets )
    //  networkCheckTimeout: 10000000,
    // }
  },
  // Configure your compilers
  compilers: {
    solc: {
         version: "0.8.0",
          optimizer: {
            enabled: false,
            runs: 200
          },
         }
    }
  },
};
