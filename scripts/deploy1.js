const {ethers} = require("hardhat");

async function main(){

    const Token = await ethers.getContractFactory("BeeToken");
    const token = await Token.deploy();

    console.log("Contract address",token.address);
}
 main()
    .then(()=> process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    })
