import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
    DECIMALS,
    developmentChains,
    INITIAL_ANSWER,
    networkConfig,
} from "../helper-hardhat-config";
import { DeployFunction } from "hardhat-deploy/types"

const deployMocks: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // @ts-ignore
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log(deployer)

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        });
        log("Mocks deployed!");
        log('----------------------------------------------')
    }
}

export default deployMocks;
deployMocks.tags = ['all', 'mocks']
