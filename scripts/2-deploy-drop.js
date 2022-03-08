import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xF7caa3e4146bb075b00684D3cec5FcB0Fd0fb6f0");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            // The collection's name, ex. CryoptoPunks
            name: "OnePieceDAO Membership",
            // A description for the collection.
            description: "A DAO for fans of OnePiece.",
            // The image for the collection that will show up on OpenSea.
            image: readFileSync("scripts/assets/monkey-d-luffy.png"),
            // We need to pass in the address of the person who will be receiving the proceeds from the sales of nfts in the module.
            // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
            // You can set this to your own wallet address if you want to charge for the drop.
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );

        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()


// 0x04C6FCDAb0a9B7bf0F40FDB65d81D1Ca85D060a3

// 0xB5a5aCf60c031A4b077576169824b1C1d47D6697
// uri: 'ipfs://bafkreib7ihgs7u7ftrgptcymmgb3cgqjqzowm6ynuibxam4hxe7nef33cu'