import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0x04C6FCDAb0a9B7bf0F40FDB65d81D1Ca85D060a3",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });
    
    
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()

// 👋 Your app address is: 0xF7caa3e4146bb075b00684D3cec5FcB0Fd0fb6f0
// ✅ Successfully set claim condition on bundle drop: 0x04C6FCDAb0a9B7bf0F40FDB65d81D1Ca85D060a3