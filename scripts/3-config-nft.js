import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x04C6FCDAb0a9B7bf0F40FDB65d81D1Ca85D060a3",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Straw Hat Pirates Flag",
        description: "This NFT will give you access to OnePieceDAO!",
        image: readFileSync("scripts/assets/Straw_Hat_Pirates'_Flag.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()