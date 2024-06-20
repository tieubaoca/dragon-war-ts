import { Testnet, newSignerFromMnemonic } from "@nibiruchain/nibijs";
import { Coin } from "@cosmjs/proto-signing";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Decimal } from "@cosmjs/math";
import { DragonCoreClient } from "../../ts-codegen/DragonCore/DragonCore.client";
import { BIRTH_COST } from "../constants";

import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const chain = Testnet(1);
  const mnemonic = process.env.MNEMONIC!!;

  const dragonCoreAddress = process.env.DRAGON_CORE_ADDRESS!!;
  const signingClient = await newSignerFromMnemonic(mnemonic);

  const sender = (await signingClient.getAccounts()).at(0)?.address!!;
  console.log("sender:", sender);
  const cosmwasmSigningClient = await SigningCosmWasmClient.connectWithSigner(
    chain.endptTm,
    signingClient,
    {
      gasPrice: {
        amount: Decimal.fromUserInput("0.025", 6),
        denom: "unibi",
      },
    }
  );
  const dragonCoreClient = new DragonCoreClient(
    cosmwasmSigningClient,
    sender,
    dragonCoreAddress
  );

  const matronId = "1";
  const sireId = "2";

  let matron = await dragonCoreClient.nftInfo({ tokenId: matronId });
  let sire = await dragonCoreClient.nftInfo({ tokenId: sireId });

  console.log("matron:", matron);
  console.log("sire:", sire);

  const tx = await dragonCoreClient.extension(
    {
      msg: {
        mate_with_auto_msg: {
          matron_id: matronId,
          sire_id: sireId,
        },
      },
    },
    "auto"
  );
  console.log("tx hash:", tx.transactionHash);
  matron = await dragonCoreClient.nftInfo({ tokenId: matronId });
  sire = await dragonCoreClient.nftInfo({ tokenId: sireId });
  console.log("matron after mated:", matron);
  console.log("sire after mated:", sire);
  console.log(
    "can give birth after:",
    new Date(matron.extension.cooldown_end * 1000).toLocaleTimeString()
  );
}

main().catch(console.error);
