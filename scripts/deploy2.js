const {ethers} = require("hardhat");

async function main(){

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy("0x94CFe96F0843D72ef4Cc62fc47c8c2854c0226bb");

    console.log("Contract address",lock.address);
}
 main()
    .then(()=> process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    })
