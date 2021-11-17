require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name rebel ranch prosper hunt produce bone trend'; 
let testAccounts = [
"0x4cbf697982ed3b5db05a561896b5c4cf81daa1b0932ef0da2216970ccadbcd8a",
"0x0cc9d2f4231d0640d77f697b778496116df2feb933eddb816a4e3c3603d8b417",
"0x174eae846499e0fbd1fee6e4bee226538b5223a5f216e162fdfab30b18ec924d",
"0xac2f3078481f7d2c6ef814ca577fd666ede936abd9cbd0422c62727e5231107e",
"0x848b646ee8cf1679ba41bb3550d241f6b7da73aadd40b30f257491292ced13cb",
"0x714088545089c6b4b171adfcd1afcfd86926c23594550ce5e50ddf0c901ab122",
"0x3ea0e7cef8828c5ba79fb5300018da17a6e6ce5b01f5c8fba8cba395502d48a3",
"0x11267e8fc40614650bb5ae627a9299979ab2ea82ac9f2b99b8cfa12a75eac1e9",
"0xbb732188ba2f10d2e1617afa27832d0914d6cc51ce61b29587592e5a3dedb702",
"0x3f00980eb8b6b7cfb8384a16ce9286eec4133705f9a6817e6fce68fb200a1137"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

