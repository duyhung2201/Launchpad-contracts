import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
console.log("PrivateKey set:", !!PRIVATE_KEY);

const config: HardhatUserConfig = {
	solidity: "0.8.9",
	paths: {
		artifacts: "./out/",
	},
	networks: {
		opencampus: {
			url: `https://rpc.open-campus-codex.gelato.digital/`,
			accounts: [PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: {
			opencampus: "xxx",
		},
		customChains: [
			{
				network: "opencampus",
				chainId: 656476,
				urls: {
					apiURL: "https://opencampus.gelatoscout.com/api",
					browserURL: "https://opencampus.gelatoscout.com",
				},
			},
		],
	},
};

export default config;
