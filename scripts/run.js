require("dotenv").config();

const {UNREVEALED_URI, REVEALED_URI} = process.env;

const main = async () => {
    const eqKeysFactory = await hre.ethers.getContractFactory("EQKEYS");
    const keysContract = await eqKeysFactory.deploy("eq keys", "KEYS", REVEALED_URI, UNREVEALED_URI);
    await keysContract.deployed();
    console.log("Contract deployed to:", keysContract.address);

    const pause = await keysContract.pause(false);
    console.log("Unpausing")
    
    await pause.wait();

    const status = await keysContract.paused();
    console.log("Status", status)

    const mint = await keysContract.mint(1);
    console.log("Minting...")

    await mint.wait();
    console.log("Minted")

    const tokenURI = await keysContract.tokenURI(1);
    console.log("URI", tokenURI)

    const reveal = await keysContract.reveal();
    console.log("Revealing")

    const secondURI = await keysContract.tokenURI(1);
    console.log("Revealed URI", secondURI)

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