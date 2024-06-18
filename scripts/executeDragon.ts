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
import {
  DragonCoreQueryClient,
  DragonCoreClient,
} from "../ts-codegen/DragonCore/DragonCore.client";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const chain = Testnet(1);
  const mnemonic = process.env.MNEMONIC!!;
  //   const querier = await NibiruQuerier.connect(chain.endptTm);

  const client = await CosmWasmClient.connect(chain.endptTm);
  const dragonCoreAddress = process.env.DRAGON_CORE_ADDRESS!!;
  const signingClient = await newSignerFromMnemonic(mnemonic);
  const sender = (await signingClient.getAccounts()).at(0)?.address!!;
  console.log("sender:", sender);
  const cosmwasmSigningClient = await SigningCosmWasmClient.connectWithSigner(
    chain.endptTm,
    signingClient
  );
  const dragonCoreClient = new DragonCoreClient(
    cosmwasmSigningClient,
    sender,
    dragonCoreAddress
  );
  const tx = await dragonCoreClient.extension(
    {
      msg: {
        create_gen0_msg: {
          genes: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
          ],
          owner: sender,
        },
      },
    },
    {
      gas: "2000000",
      amount: [
        {
          amount: "1000000",
          denom: "unibi",
        },
      ],
    }
  );

  console.log("tx hash:", tx.transactionHash);
}

main().catch(console.error);
