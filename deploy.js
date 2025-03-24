// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const Farena = await hre.ethers.getContractFactory("FarenaContract");
  const farena = await Farena.deploy();

  await farena.waitForDeployment();

  const contractAddress = await farena.getAddress();
  console.log("Farena deployed to:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
