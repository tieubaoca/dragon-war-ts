import { NibiruQuerier, Testnet } from "@nibiruchain/nibijs";
import { Coin } from "@cosmjs/proto-signing";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DragonCoreQueryClient } from "../../ts-codegen/DragonCore/DragonCore.client";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const chain = Testnet(1);

  const client = await CosmWasmClient.connect(chain.endptTm);
  const dragonCoreAddress = process.env.DRAGON_CORE_ADDRESS!!;
  const dragonCoreQueryClient = new DragonCoreQueryClient(
    client,
    dragonCoreAddress
  );

  // const dragonIdList = await dragonCoreQueryClient.tokens({
  //   owner: "nibi1g44ra655jqntesl245re9x32japuhewv2s4zru",
  //   limit: 20,
  // });
  const dragonIdList = {
    tokens: ["1", "2", "10"],
  };
  console.log(dragonIdList);
  for (const dragonId of dragonIdList.tokens) {
    const dragon = await dragonCoreQueryClient.nftInfo({
      tokenId: dragonId,
    });
    console.log(dragon.extension.genes);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
