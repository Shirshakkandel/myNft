const { ethers } = require('hardhat');

async function main() {
  const MyNFT = await ethers.getContractFactory('MyNFT'); //get instance of contract

  const myNFT = await MyNFT.deploy(); //we deploy with name and symbol of nft as I use constructor
  //0x4d7d7A8f744a381Bd09Fc50eb97Fd165E129719F
  await myNFT.deployed();
  console.log('Contract deployed to address:', myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  });
