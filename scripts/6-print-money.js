import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const tokenModule = sdk.getTokenModule(
  "0xfd2D5107511ddD18547c4Ce60Ba648c105b001ED",
);

(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1_000_000;
    // We use the util function from "ethers" to convert the amount
    // to have 18 decimals (which is the standard for ERC20 tokens).
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();
    
    // Print out how many of our token's are out there now!
    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$BERRIES in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();


// There now is 1000000.0 $BERRIES in circulation
// 👋 Your app address is: 0xF7caa3e4146bb075b00684D3cec5FcB0Fd0fb6f0