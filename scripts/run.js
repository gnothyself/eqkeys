const main = async () => {
    const eqKeysFactory = await hre.ethers.getContractFactory("EQKEYS");
    const keysContract = await eqKeysFactory.deploy("eq keys", "KEYS", "", "");
    await keysContract.deployed();
    console.log("Contract deployed to:", keysContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();