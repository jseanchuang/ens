const PrivateKeyProvider = require("truffle-privatekey-provider");
var privateKey = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    'dev.fifs': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    'dev.auction': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    'dev.ropsten': {
      provider: new PrivateKeyProvider(privateKey, "https://ropsten.infura.io/"),
      network_id: 3
    }
  }
};