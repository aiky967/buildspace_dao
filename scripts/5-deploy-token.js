import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xF7caa3e4146bb075b00684D3cec5FcB0Fd0fb6f0");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "OnePieceDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "BERRY",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();


// Successfully deployed token module, address: 0xfd2D5107511ddD18547c4Ce60Ba648c105b001ED