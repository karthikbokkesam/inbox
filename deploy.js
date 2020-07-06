const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "skill decorate swallow quote trick rotate surge quiz thrive crucial try wise",
  "https://rinkeby.infura.io/v3/bc020624842b4d158a3652f6657398f6"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: "0x" + bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
