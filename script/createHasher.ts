import * as circomlibjs from "circomlibjs"
import {ethers} from "hardhat"
export async function deployHasher() {
    const abi = circomlibjs.mimcSpongecontract.abi;
    const bytecode = circomlibjs.mimcSpongecontract.createCode("mimicsponge", 220);
    const signer = (await ethers.getSigners())[0];
    const contract = new ethers.ContractFactory(abi, bytecode,signer);
    const deployedContract = await contract.deploy();
    await deployedContract.waitForDeployment();
    console.log("Deployed at ", await deployedContract.getAddress());
}