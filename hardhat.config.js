//require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = "metamask cuzdanınızın private key'ini giriniz..!!!!";


module.exports = {
    solidity: "0.8.2",
    networks: {
      hardhat:{},
      alchemy:{
          url:"https://eth-rinkeby.alchemyapi.io/v2/HqFAMf3XQpOZE9JIKv1piCcZBj8IR-Xa",
          accounts: [`${PRIVATE_KEY}`]
        },
      mainnet: {
        url: `https://api.avax.network/ext/bc/C/rpc`,
          accounts: [`${PRIVATE_KEY}`]
      },
      fuji: {
        url: `https://api.avax-test.network/ext/bc/C/rpc`,
          accounts: [`${PRIVATE_KEY}`]
      }
    }
};