require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember clutch grace casino tail total'; 
let testAccounts = [
"0x206bd529547609e61697bd829341a8d96db5d765a58affd817014eda2d8c1f44",
"0x952e50554f29e302cd4a0f6720206006b4744d1f6e2256439a1a4bab41606d40",
"0x6acb3578ea19aaf24440eb2deaf2c22462cb255760e95b15d3de5e4796a8f2f4",
"0xb83deb44f5be68c3cbe920e210f0dbc20ef901e32ae0e571c9bcb1431de7014c",
"0x6b2aeef384e32f733cef356a2fc0bd58098cbb36b68450238de138dbe4f971cd",
"0xf2caae3ac387841a17be6a36b542d36d75788553639301f9f35ecfadf98c938e",
"0x5b0f6ed8a8c5f66396f94c98719292214140374c75b6f42a91554f4b006d94ae",
"0x5d74f258d89484e60766b158b72096199d029ae0fa2f0de6f25be6fa77724efa",
"0x0d496f8623c1179fed3074d9f7d6675f9a3d08015b0728d0939b920093224cff",
"0xc776edba2cde44386b05ee7c219f60d3d2c6678d0a4bc989d7e538f51c4f923d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

