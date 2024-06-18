import { NibiruQuerier, Testnet } from "@nibiruchain/nibijs";
import { Coin } from "@cosmjs/proto-signing";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DragonCoreQueryClient } from "../ts-codegen/DragonCore/DragonCore.client";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const chain = Testnet(1);
  //   const querier = await NibiruQuerier.connect(chain.endptTm);

  const client = await CosmWasmClient.connect(chain.endptTm);
  const dragonCoreAddress = process.env.DRAGON_CORE_ADDRESS!!;
  const dragonCoreQueryClient = new DragonCoreQueryClient(
    client,
    dragonCoreAddress
  );

  const dragonOwner = await dragonCoreQueryClient.ownerOf({
    tokenId: "1",
  });
  console.log(dragonOwner);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
