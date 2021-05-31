// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "./ChanZeroToken.sol";
import "./MyCrowdsale.sol";


contract CrowdsaleDeployer {
    address private _crowdsaleAddress;
    address private _tokenAddress;

    constructor()
        public
    {
        // create a mintable token
        ERC20Mintable token = new ChanZeroToken();
        _tokenAddress = address(token);

        // create the crowdsale and tell it about the token
        Crowdsale crowdsale = new MyCrowdsale(
            100,             // rate, still in TKNbits
            msg.sender,      // send Ether to the deployer
            token            // the token
        );
        // transfer the minter role from this contract (the default)
        // to the crowdsale, so it can mint tokens
        token.addMinter(address(crowdsale));
        _crowdsaleAddress = address(crowdsale);
        token.renounceMinter();
    }

    function getCrowdsaleAddress() public view returns (address) {
        return _crowdsaleAddress;
    }

    function getTokenAddress() public view returns (address) {
        return _tokenAddress;
    }
}