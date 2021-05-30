// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

// imports are red but compiles? see: https://github.com/juanfranblanco/vscode-solidity/issues/70
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";

contract ChanZeroToken is ERC20, ERC20Detailed, ERC20Mintable {
    constructor() ERC20Detailed("ChanZeroToken", "CHAN", 18) public {
    }

    function mint(address account, uint256 amount) public returns (bool) {
        return super.mint(account, amount);
    }
}

