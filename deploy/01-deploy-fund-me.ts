import { HardhatRuntimeEnvironment } from "hardhat/types";
import { network } from "hardhat";
import { networkConfig } from "../helper-hardhat-config";

export default async function (hre: HardhatRuntimeEnvironment) {
    // @ts-ignore
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;
    const ethUsdPriceFeedAddress = networkConfig[chainId!]["ethUsdPriceFeed"];



    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [],
        log: true,
    });
}
