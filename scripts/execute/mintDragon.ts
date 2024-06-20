import {
  NibiruQuerier,
  Testnet,
  newSignerFromMnemonic,
} from "@nibiruchain/nibijs";
import { Coin } from "@cosmjs/proto-signing";
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { Secp256k1HdWallet } from "@cosmjs/amino";
import { Decimal } from "@cosmjs/math";
import {
  DragonCoreQueryClient,
  DragonCoreClient,
} from "../../ts-codegen/DragonCore/DragonCore.client";
import { ArraySize_32OfUint8 } from "../../ts-codegen/GeneScience/GeneScience.types";
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

  for (let i = 0; i < 10; i++) {
    const tx = await dragonCoreClient.extension(
      {
        msg: {
          create_gen0_msg: {
            genes: generateGenes(),
            owner: sender,
          },
        },
      },
      "auto"
    );
    console.log("tx hash:", tx.transactionHash);
  }
}

function generateGenes() {
  let genes: ArraySize_32OfUint8 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ];
  for (let i = 0; i < 32; i++) {
    const gene = Math.floor(Math.random() * Math.pow(2, 8));
    genes[i] = gene;
  }
  return genes;
}

main().catch(console.error);
