const Deployer = artifacts.require("CrowdsaleDeployer.sol");

module.exports = function (deployer) {
  deployer.deploy(Deployer);
};
