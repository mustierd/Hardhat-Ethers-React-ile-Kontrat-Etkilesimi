// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import "./Token.sol";

contract Lock {
    BeeToken Token;

    uint256 public lockerCount;
    uint256 public totalLocked;
    mapping(address => uint256) public lockers;
    mapping(address => uint256) public deadLine;

    constructor(address tokenAddress) {
        Token = BeeToken(tokenAddress);
    }

    function LockToken(uint256 amount, uint256 time) external {
        require(amount > 0, "Token amount must be bigger than 0");
        // require(Token.balanceOf(msg.sender) >= amount, "insufficent balance.");
        // require(
        //     Token.allowance(msg.sender, address(this)) >= amount,
        //     "insufficent allowance."
        // );
        if (!(lockers[msg.sender] > 0)) lockerCount++;
        totalLocked += amount;
        lockers[msg.sender] += amount;
        deadLine[msg.sender] = block.timestamp + time;

        bool ok = Token.transferFrom(msg.sender, address(this), amount);
        require(ok, "Transfer failed.!!!");
    }

    function withdrawToken() external {
        require(lockers[msg.sender] > 0, "not enough token");
        require(block.timestamp > deadLine[msg.sender], "deadline is not over");
        uint256 amount = lockers[msg.sender];
        delete (lockers[msg.sender]);
        totalLocked -= amount;
        lockerCount--;

        require(Token.transfer(msg.sender, amount), "Transfer failed.!!!");
    }
}
