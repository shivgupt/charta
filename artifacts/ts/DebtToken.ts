export const DebtToken = 
{
  "contractName": "DebtToken",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceID",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "_isSupported",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedMintAgents",
      "outputs": [
        {
          "name": "_agents",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "registry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "revokeMintAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_version",
          "type": "address"
        },
        {
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "name": "_debtor",
          "type": "address"
        },
        {
          "name": "_underwriter",
          "type": "address"
        },
        {
          "name": "_underwriterRiskRating",
          "type": "uint256"
        },
        {
          "name": "_termsContract",
          "type": "address"
        },
        {
          "name": "_termsContractParameters",
          "type": "bytes32"
        },
        {
          "name": "_salt",
          "type": "uint256"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedMintAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_registry",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526000600b60146101000a81548160ff02191690831515021790555034156200002b57600080fd5b604051602080620030c8833981016040528080519060200190919050506040805190810160405280600981526020017f44656274546f6b656e00000000000000000000000000000000000000000000008152506040805190810160405280600381526020017f44445400000000000000000000000000000000000000000000000000000000008152508160049080519060200190620000cc92919062000171565b508060059080519060200190620000e592919062000171565b50505033600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000220565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b457805160ff1916838001178555620001e5565b82800160010185558215620001e5579182015b82811115620001e4578251825591602001919060010190620001c7565b5b509050620001f49190620001f8565b5090565b6200021d91905b8082111562000219576000816000905550600101620001ff565b5090565b90565b612e9880620002306000396000f30060606040526004361061016a576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a71461016f5780630343e122146101c957806306fdde0314610233578063081812fc146102c1578063095ea7b31461032457806318160ddd1461036657806323b872dd1461038f5780632f745c59146103f05780633f4ba83a1461044657806342842e0e1461045b5780634f558e79146104bc5780634f6ccce7146104f75780635c975abb1461052e5780636352211e1461055b57806370a08231146105be5780637b1039991461060b57806381ac3fbc146106605780638456cb59146106995780638da5cb5b146106ae57806395d89b411461070357806399f10501146107915780639c0d9c4314610879578063a22cb465146108b2578063a9059cbb146108f6578063b88d4fde14610938578063c87b56dd146109dc578063e985e9c514610a78578063f2fde38b14610ae8575b600080fd5b341561017a57600080fd5b6101af60048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610b21565b604051808215151515815260200191505060405180910390f35b34156101d457600080fd5b6101dc610b6f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561021f578082015181840152602081019050610204565b505050509050019250505060405180910390f35b341561023e57600080fd5b610246610b86565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028657808201518184015260208101905061026b565b50505050905090810190601f1680156102b35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102cc57600080fd5b6102e26004808035906020019091905050610c2e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561032f57600080fd5b610364600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c6b565b005b341561037157600080fd5b610379610c95565b6040518082815260200191505060405180910390f35b341561039a57600080fd5b6103ee600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ca2565b005b34156103fb57600080fd5b610430600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610cd8565b6040518082815260200191505060405180910390f35b341561045157600080fd5b610459610d50565b005b341561046657600080fd5b6104ba600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e10565b005b34156104c757600080fd5b6104dd6004808035906020019091905050610e46565b604051808215151515815260200191505060405180910390f35b341561050257600080fd5b6105186004808035906020019091905050610eb7565b6040518082815260200191505060405180910390f35b341561053957600080fd5b610541610ef0565b604051808215151515815260200191505060405180910390f35b341561056657600080fd5b61057c6004808035906020019091905050610f03565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105c957600080fd5b6105f5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f80565b6040518082815260200191505060405180910390f35b341561061657600080fd5b61061e611004565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561066b57600080fd5b610697600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061102a565b005b34156106a457600080fd5b6106ac61109d565b005b34156106b957600080fd5b6106c161115e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561070e57600080fd5b610716611184565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561075657808201518184015260208101905061073b565b50505050905090810190601f1680156107835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561079c57600080fd5b610863600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080356000191690602001909190803590602001909190505061122c565b6040518082815260200191505060405180910390f35b341561088457600080fd5b6108b0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061145e565b005b34156108bd57600080fd5b6108f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803515159060200190919050506114d1565b005b341561090157600080fd5b610936600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506114fb565b005b341561094357600080fd5b6109da600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061150a565b005b34156109e757600080fd5b6109fd6004808035906020019091905050611542565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a3d578082015181840152602081019050610a22565b50505050905090810190601f168015610a6a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610a8357600080fd5b610ace600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611611565b604051808215151515815260200191505060405180910390f35b3415610af357600080fd5b610b1f600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506116a5565b005b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b77612d6f565b610b81600d6117fd565b905090565b610b8e612d83565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c245780601f10610bf957610100808354040283529160200191610c24565b820191906000526020600020905b815481529060010190602001808311610c0757829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff16151515610c8757600080fd5b610c918282611895565b5050565b6000600880549050905090565b600b60149054906101000a900460ff16151515610cbe57600080fd5b610cc88183611a5b565b610cd3838383611c36565b505050565b6000610ce383610f80565b82101515610cf057600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610d3c57fe5b906000526020600020900154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dac57600080fd5b600b60149054906101000a900460ff161515610dc757600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff16151515610e2c57600080fd5b610e368183611a5b565b610e41838383611d4d565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000610ec1610c95565b82101515610ece57600080fd5b600882815481101515610edd57fe5b9060005260206000209001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610f7757600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610fbd57600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561108657600080fd5b61109a81600d611d8590919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110f957600080fd5b600b60149054906101000a900460ff1615151561111557600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61118c612d83565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112225780601f106111f757610100808354040283529160200191611222565b820191906000526020600020905b81548152906001019060200180831161120557829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff1615151561124b57600080fd5b61125f33600d611fc790919063ffffffff16565b151561126a57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b151561141f57600080fd5b6102c65a03f1151561143057600080fd5b50505060405180519050905061144a898260019004612020565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114ba57600080fd5b6114ce81600d61207490919063ffffffff16565b50565b600b60149054906101000a900460ff161515156114ed57600080fd5b6114f7828261219c565b5050565b611506338383610e10565b5050565b600b60149054906101000a900460ff1615151561152657600080fd5b6115308284611a5b565b61153c848484846122d8565b50505050565b61154a612d83565b61155382610e46565b151561155e57600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116055780601f106115da57610100808354040283529160200191611605565b820191906000526020600020905b8154815290600101906020018083116115e857829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561170157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561173d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611805612d6f565b8160020180548060200260200160405190810160405280929190818152602001828054801561188957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161183f575b50505050509050919050565b60006118a082610f03565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156118dd57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061191d575061191c8133611611565b5b151561192857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661194983610c2e565b73ffffffffffffffffffffffffffffffffffffffff161415806119995750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15611a5657826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515611b1657600080fd5b6102c65a03f11515611b2757600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff16141515611c3257600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1515611c1d57600080fd5b6102c65a03f11515611c2e57600080fd5b5050505b5050565b80611c413382612317565b1515611c4c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515611c8857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611cc457600080fd5b611cce84836123ac565b611cd88483612515565b611ce28383612730565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b80611d583382612317565b1515611d6357600080fd5b611d7f848484602060405190810160405280600081525061150a565b50505050565b6000806000611d948585611fc7565b1515611d9f57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515611e0157fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611e9257fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611f7757fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611fbf9190612d97565b505050505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61202a8282612804565b60088054905060096000838152602001908152602001600020819055506008805480600101828161205b9190612dc3565b9160005260206000209001600083909190915055505050565b61207e82826128b4565b151561208957600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816120f99190612def565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156121d757600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b816122e33382612317565b15156122ee57600080fd5b6122f9858585610ca2565b612305858585856128c9565b151561231057600080fd5b5050505050565b60008061232383610f03565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061239257508373ffffffffffffffffffffffffffffffffffffffff1661237a84610c2e565b73ffffffffffffffffffffffffffffffffffffffff16145b806123a357506123a28185611611565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166123cc82610f03565b73ffffffffffffffffffffffffffffffffffffffff161415156123ee57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156125115760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b60008060006125248585612a9f565b600760008581526020019081526020016000205492506125906001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612bcd90919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156125de57fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110151561263957fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561269657fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036126f79190612e1b565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b600061273c8383612be6565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816127d29190612dc3565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561284057600080fd5b61284a8282612730565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60006128c08383611fc7565b15905092915050565b6000806128eb8573ffffffffffffffffffffffffffffffffffffffff16612d3e565b15156128fa5760019150612a96565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156129c55780820151818401526020810190506129aa565b50505050905090810190601f1680156129f25780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b1515612a1257600080fd5b6102c65a03f11515612a2357600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff16612abf82610f03565b73ffffffffffffffffffffffffffffffffffffffff16141515612ae157600080fd5b612b346001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612bcd90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000828211151515612bdb57fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612c5357600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612cf76001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612d5190919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b6000808284019050838110151515612d6557fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b815481835581811511612dbe57818360005260206000209182019101612dbd9190612e47565b5b505050565b815481835581811511612dea57818360005260206000209182019101612de99190612e47565b5b505050565b815481835581811511612e1657818360005260206000209182019101612e159190612e47565b5b505050565b815481835581811511612e4257818360005260206000209182019101612e419190612e47565b5b505050565b612e6991905b80821115612e65576000816000905550600101612e4d565b5090565b905600a165627a7a7230582042458b27219f09d26cf979f27c88de3f971bcd360c59caba92fbee4f85e404f80029",
  "deployedBytecode": "0x60606040526004361061016a576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a71461016f5780630343e122146101c957806306fdde0314610233578063081812fc146102c1578063095ea7b31461032457806318160ddd1461036657806323b872dd1461038f5780632f745c59146103f05780633f4ba83a1461044657806342842e0e1461045b5780634f558e79146104bc5780634f6ccce7146104f75780635c975abb1461052e5780636352211e1461055b57806370a08231146105be5780637b1039991461060b57806381ac3fbc146106605780638456cb59146106995780638da5cb5b146106ae57806395d89b411461070357806399f10501146107915780639c0d9c4314610879578063a22cb465146108b2578063a9059cbb146108f6578063b88d4fde14610938578063c87b56dd146109dc578063e985e9c514610a78578063f2fde38b14610ae8575b600080fd5b341561017a57600080fd5b6101af60048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610b21565b604051808215151515815260200191505060405180910390f35b34156101d457600080fd5b6101dc610b6f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561021f578082015181840152602081019050610204565b505050509050019250505060405180910390f35b341561023e57600080fd5b610246610b86565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561028657808201518184015260208101905061026b565b50505050905090810190601f1680156102b35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102cc57600080fd5b6102e26004808035906020019091905050610c2e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561032f57600080fd5b610364600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c6b565b005b341561037157600080fd5b610379610c95565b6040518082815260200191505060405180910390f35b341561039a57600080fd5b6103ee600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ca2565b005b34156103fb57600080fd5b610430600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610cd8565b6040518082815260200191505060405180910390f35b341561045157600080fd5b610459610d50565b005b341561046657600080fd5b6104ba600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e10565b005b34156104c757600080fd5b6104dd6004808035906020019091905050610e46565b604051808215151515815260200191505060405180910390f35b341561050257600080fd5b6105186004808035906020019091905050610eb7565b6040518082815260200191505060405180910390f35b341561053957600080fd5b610541610ef0565b604051808215151515815260200191505060405180910390f35b341561056657600080fd5b61057c6004808035906020019091905050610f03565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105c957600080fd5b6105f5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f80565b6040518082815260200191505060405180910390f35b341561061657600080fd5b61061e611004565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561066b57600080fd5b610697600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061102a565b005b34156106a457600080fd5b6106ac61109d565b005b34156106b957600080fd5b6106c161115e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561070e57600080fd5b610716611184565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561075657808201518184015260208101905061073b565b50505050905090810190601f1680156107835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561079c57600080fd5b610863600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080356000191690602001909190803590602001909190505061122c565b6040518082815260200191505060405180910390f35b341561088457600080fd5b6108b0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061145e565b005b34156108bd57600080fd5b6108f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803515159060200190919050506114d1565b005b341561090157600080fd5b610936600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506114fb565b005b341561094357600080fd5b6109da600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061150a565b005b34156109e757600080fd5b6109fd6004808035906020019091905050611542565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a3d578082015181840152602081019050610a22565b50505050905090810190601f168015610a6a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610a8357600080fd5b610ace600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611611565b604051808215151515815260200191505060405180910390f35b3415610af357600080fd5b610b1f600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506116a5565b005b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b77612d6f565b610b81600d6117fd565b905090565b610b8e612d83565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c245780601f10610bf957610100808354040283529160200191610c24565b820191906000526020600020905b815481529060010190602001808311610c0757829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff16151515610c8757600080fd5b610c918282611895565b5050565b6000600880549050905090565b600b60149054906101000a900460ff16151515610cbe57600080fd5b610cc88183611a5b565b610cd3838383611c36565b505050565b6000610ce383610f80565b82101515610cf057600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610d3c57fe5b906000526020600020900154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dac57600080fd5b600b60149054906101000a900460ff161515610dc757600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff16151515610e2c57600080fd5b610e368183611a5b565b610e41838383611d4d565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000610ec1610c95565b82101515610ece57600080fd5b600882815481101515610edd57fe5b9060005260206000209001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610f7757600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610fbd57600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561108657600080fd5b61109a81600d611d8590919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110f957600080fd5b600b60149054906101000a900460ff1615151561111557600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61118c612d83565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112225780601f106111f757610100808354040283529160200191611222565b820191906000526020600020905b81548152906001019060200180831161120557829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff1615151561124b57600080fd5b61125f33600d611fc790919063ffffffff16565b151561126a57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b151561141f57600080fd5b6102c65a03f1151561143057600080fd5b50505060405180519050905061144a898260019004612020565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156114ba57600080fd5b6114ce81600d61207490919063ffffffff16565b50565b600b60149054906101000a900460ff161515156114ed57600080fd5b6114f7828261219c565b5050565b611506338383610e10565b5050565b600b60149054906101000a900460ff1615151561152657600080fd5b6115308284611a5b565b61153c848484846122d8565b50505050565b61154a612d83565b61155382610e46565b151561155e57600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116055780601f106115da57610100808354040283529160200191611605565b820191906000526020600020905b8154815290600101906020018083116115e857829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561170157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561173d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611805612d6f565b8160020180548060200260200160405190810160405280929190818152602001828054801561188957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161183f575b50505050509050919050565b60006118a082610f03565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156118dd57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061191d575061191c8133611611565b5b151561192857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661194983610c2e565b73ffffffffffffffffffffffffffffffffffffffff161415806119995750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15611a5657826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515611b1657600080fd5b6102c65a03f11515611b2757600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff16141515611c3257600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1515611c1d57600080fd5b6102c65a03f11515611c2e57600080fd5b5050505b5050565b80611c413382612317565b1515611c4c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515611c8857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611cc457600080fd5b611cce84836123ac565b611cd88483612515565b611ce28383612730565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b80611d583382612317565b1515611d6357600080fd5b611d7f848484602060405190810160405280600081525061150a565b50505050565b6000806000611d948585611fc7565b1515611d9f57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515611e0157fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611e9257fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611f7757fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611fbf9190612d97565b505050505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61202a8282612804565b60088054905060096000838152602001908152602001600020819055506008805480600101828161205b9190612dc3565b9160005260206000209001600083909190915055505050565b61207e82826128b4565b151561208957600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816120f99190612def565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156121d757600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b816122e33382612317565b15156122ee57600080fd5b6122f9858585610ca2565b612305858585856128c9565b151561231057600080fd5b5050505050565b60008061232383610f03565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061239257508373ffffffffffffffffffffffffffffffffffffffff1661237a84610c2e565b73ffffffffffffffffffffffffffffffffffffffff16145b806123a357506123a28185611611565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166123cc82610f03565b73ffffffffffffffffffffffffffffffffffffffff161415156123ee57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156125115760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b60008060006125248585612a9f565b600760008581526020019081526020016000205492506125906001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612bcd90919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156125de57fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110151561263957fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561269657fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036126f79190612e1b565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b600061273c8383612be6565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816127d29190612dc3565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561284057600080fd5b61284a8282612730565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60006128c08383611fc7565b15905092915050565b6000806128eb8573ffffffffffffffffffffffffffffffffffffffff16612d3e565b15156128fa5760019150612a96565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156129c55780820151818401526020810190506129aa565b50505050905090810190601f1680156129f25780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b1515612a1257600080fd5b6102c65a03f11515612a2357600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff16612abf82610f03565b73ffffffffffffffffffffffffffffffffffffffff16141515612ae157600080fd5b612b346001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612bcd90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000828211151515612bdb57fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612c5357600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612cf76001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612d5190919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b6000808284019050838110151515612d6557fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b815481835581811511612dbe57818360005260206000209182019101612dbd9190612e47565b5b505050565b815481835581811511612dea57818360005260206000209182019101612de99190612e47565b5b505050565b815481835581811511612e1657818360005260206000209182019101612e159190612e47565b5b505050565b815481835581811511612e4257818360005260206000209182019101612e419190612e47565b5b505050565b612e6991905b80821115612e65576000816000905550600101612e4d565b5090565b905600a165627a7a7230582042458b27219f09d26cf979f27c88de3f971bcd360c59caba92fbee4f85e404f80029",
  "sourceMap": "1226:4862:3:-;;;268:5:18;247:26;;;;;;;;;;;;;;;;;;;;1590:148:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1107:105:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1179:5;1171;:13;;;;;;;;;;;;:::i;:::-;;1200:7;1190;:17;;;;;;;;;;;;:::i;:::-;;1107:105;;509:10:20;501:5;;:18;;;;;;;;;;;;;;;;;;1721:9:3;1697:8;;:34;;;;;;;;;;;;;;;;;;1590:148;1226:4862;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "1226:4862:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1833:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3541:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1303:68:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3881:131:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2887:87:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4700:206:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2571:177:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:18;;;;;;;;;;;;;;5082:214:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3298::28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1342:28:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3294:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:18;;;;;;;;;;;;;;238:20:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2178:770:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3047:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;4188:153;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4403:125;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5472:234;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;1833:176:3;1927:17;1982:10;1967:25;;:11;:25;;;;1960:32;;1833:176;;;:::o;3541:173::-;3621:17;;:::i;:::-;3661:46;:24;:44;:46::i;:::-;3654:53;;3541:173;:::o;1303:68:28:-;1340:6;;:::i;:::-;1361:5;1354:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1303:68;:::o;3577:111:26:-;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;3881:131:3:-;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;3977:28:3;3991:3;3996:8;3977:13;:28::i;:::-;3881:131;;:::o;2887:87:28:-;2931:7;2953:9;:16;;;;2946:23;;2887:87;:::o;4700:206:3:-;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;4816:33:3;4835:8;4845:3;4816:18;:33::i;:::-;4859:40;4878:5;4885:3;4890:8;4859:18;:40::i;:::-;4700:206;;;:::o;2571:177:28:-;2653:7;2685:17;2695:6;2685:9;:17::i;:::-;2676:6;:26;2668:35;;;;;;;;2716:11;:19;2728:6;2716:19;;;;;;;;;;;;;;;2736:6;2716:27;;;;;;;;;;;;;;;;;;;2709:34;;2571:177;;;;:::o;833:87:18:-;653:5:20;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:18;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;5082:214:3:-;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;5202:33:3;5221:8;5231:3;5202:18;:33::i;:::-;5245:44;5268:5;5275:3;5280:8;5245:22;:44::i;:::-;5082:214;;;:::o;2445:140:26:-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;3298::28:-;3357:7;3389:13;:11;:13::i;:::-;3380:6;:22;3372:31;;;;;;;;3416:9;3426:6;3416:17;;;;;;;;;;;;;;;;;;;3409:24;;3298:140;;;:::o;247:26:18:-;;;;;;;;;;;;;:::o;2107:164:26:-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;1342:28:3:-;;;;;;;;;;;;;:::o;3294:160::-;653:5:20;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3395:52:3;3440:6;3395:24;:44;;:52;;;;:::i;:::-;3294:160;:::o;666:85:18:-;653:5:20;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:20:-;;;;;;;;;;;;;:::o;1466:72:28:-;1505:6;;:::i;:::-;1526:7;1519:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72;:::o;2178:770:3:-;2496:13;2594:17;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;2533:49:3;2571:10;2533:24;:37;;:49;;;;:::i;:::-;2525:58;;;;;;;;2614:8;;;;;;;;;;;:15;;;2643:8;2665:12;2691:7;2712:12;2738:22;2774:14;2802:24;2840:5;2614:241;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2594:261;;2866:42;2878:12;2897:9;2892:15;;;2866:11;:42::i;:::-;2931:9;2926:15;;;2919:22;;2178:770;;;;;;;;;;;:::o;3047:144::-;653:5:20;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3142:42:3;3177:6;3142:24;:34;;:42;;;;:::i;:::-;3047:144;:::o;4188:153::-;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;4295:39:3;4319:3;4324:9;4295:23;:39::i;:::-;4188:153;;:::o;4403:125::-;4478:43;4495:10;4507:3;4512:8;4478:16;:43::i;:::-;4403:125;;:::o;5472:234::-;416:6:18;;;;;;;;;;;415:7;407:16;;;;;;;;5605:33:3;5624:8;5634:3;5605:18;:33::i;:::-;5648:51;5671:5;5678:3;5683:8;5693:5;5648:22;:51::i;:::-;5472:234;;;;:::o;1727:133:28:-;1784:6;;:::i;:::-;1806:16;1813:8;1806:6;:16::i;:::-;1798:25;;;;;;;;1836:9;:19;1846:8;1836:19;;;;;;;;;;;1829:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133;;;:::o;4478:142:26:-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;832:169:20:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2536:162:11:-;2638:9;;:::i;:::-;2670:4;:21;;2663:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2536:162;;;:::o;2998:350:26:-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;5863:223:3:-;6000:3;5954:49;;:8;;;;;;;;;;;:23;;;5986:8;5978:17;;5954:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:49;;;;5950:130;;;6019:8;;;;;;;;;;;:26;;;6054:8;6046:17;;6065:3;6019:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5950:130;5863:223;;:::o;5042:315:26:-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;5964:154::-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;1118:1061:11:-;1433:25;1495:23;1563:19;1396:25;1409:4;1415:5;1396:12;:25::i;:::-;1388:34;;;;;;;;1461:4;:17;;:24;1479:5;1461:24;;;;;;;;;;;;;;;;1433:52;;1552:1;1521:4;:21;;:28;;;;:32;1495:58;;1585:4;:21;;1607:18;1585:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;1563:63;;1689:4;:15;;:22;1705:5;1689:22;;;;;;;;;;;;;;;;1682:29;;;;;;;;;;;1838:11;1792:4;:21;;1814:20;1792:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;1953:20;1920:4;:17;;:30;1938:11;1920:30;;;;;;;;;;;;;;;:53;;;;1990:4;:17;;:24;2008:5;1990:24;;;;;;;;;;;;;;;1983:31;;;2088:4;:21;;2110:18;2088:41;;;;;;;;;;;;;;;;;;;2081:48;;;;;;;;;;;2171:1;2139:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;1118:1061;;;;;:::o;2185:166::-;2295:4;2322;:15;;:22;2338:5;2322:22;;;;;;;;;;;;;;;;;;;;;;;;;2315:29;;2185:166;;;;:::o;5315:176:28:-;5376:26;5388:3;5393:8;5376:11;:26::i;:::-;5440:9;:16;;;;5413:14;:24;5428:8;5413:24;;;;;;;;;;;:43;;;;5462:9;:24;;;;;;;;;;;:::i;:::-;;;;;;;;;;5477:8;5462:24;;;;;;;5315:176;;:::o;825:287:11:-;924:28;940:4;946:5;924:15;:28::i;:::-;916:37;;;;;;;;989:4;964;:15;;:22;980:5;964:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1003:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1030:5;1003:33;;;;;;;;;;;;;;;;;;;;;;;1104:1;1073:4;:21;;:28;;;;:32;1046:4;:17;;:24;1064:5;1046:24;;;;;;;;;;;;;;;:59;;;;825:287;;:::o;3969:200:26:-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;4198:856:28:-;4316:18;4369:22;4432:17;4271:38;4293:5;4300:8;4271:21;:38::i;:::-;4337:16;:26;4354:8;4337:26;;;;;;;;;;;;4316:47;;4394:32;4424:1;4394:11;:18;4406:5;4394:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;4369:57;;4452:11;:18;4464:5;4452:18;;;;;;;;;;;;;;;4471:14;4452:34;;;;;;;;;;;;;;;;;;;4432:54;;4526:9;4493:11;:18;4505:5;4493:18;;;;;;;;;;;;;;;4512:10;4493:30;;;;;;;;;;;;;;;;;;:42;;;;4578:1;4541:11;:18;4553:5;4541:18;;;;;;;;;;;;;;;4560:14;4541:34;;;;;;;;;;;;;;;;;;:38;;;;4940:11;:18;4952:5;4940:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;5002:1;4973:16;:26;4990:8;4973:26;;;;;;;;;;;:30;;;;5039:10;5009:16;:27;5026:9;5009:27;;;;;;;;;;;:40;;;;4198:856;;;;;:::o;3697:226::-;3800:14;3763:31;3780:3;3785:8;3763:16;:31::i;:::-;3817:11;:16;3829:3;3817:16;;;;;;;;;;;;;;;:23;;;;3800:40;;3846:11;:16;3858:3;3846:16;;;;;;;;;;;;;;;:31;;;;;;;;;;;:::i;:::-;;;;;;;;;;3868:8;3846:31;;;;;;;3912:6;3883:16;:26;3900:8;3883:26;;;;;;;;;;;:35;;;;3697:226;;;:::o;7857:164:26:-;7941:1;7926:17;;:3;:17;;;;7918:26;;;;;;;;7950:25;7961:3;7966:8;7950:10;:25::i;:::-;8002:3;7981:35;;7998:1;7981:35;;;8007:8;7981:35;;;;;;;;;;;;;;;;;;7857:164;;:::o;2357:173:11:-;2470:4;2498:25;2511:4;2517:5;2498:12;:25::i;:::-;2497:26;2490:33;;2357:173;;;;:::o;10368:298:26:-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:26;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;835:110:19:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;9172:204:26:-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;451:150:17:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o;1007:129:19:-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;1226:4862:3:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./DebtRegistry.sol\";\nimport \"./ERC165.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The DebtToken contract governs all business logic for making a debt agreement\n * transferable as an ERC721 non-fungible token.  Additionally, the contract\n * allows authorized contracts to trigger the minting of a debt agreement token\n * and, in turn, the insertion of a debt issuance into the DebtRegsitry.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtToken is ERC721Token, ERC165, Pausable {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    DebtRegistry public registry;\n\n    PermissionsLib.Permissions internal tokenCreationPermissions;\n    PermissionsLib.Permissions internal tokenBrokeragePermissions;\n\n    /**\n     * Constructor that sets the address of the debt registry.\n     */\n    function DebtToken(address _registry)\n        public\n        ERC721Token(\"DebtToken\", \"DDT\")\n    {\n        registry = DebtRegistry(_registry);\n    }\n\n    /**\n     * ERC165 interface.\n     * Returns true for ERC721, false otherwise\n     */\n    function supportsInterface(bytes4 interfaceID)\n        external\n        view\n        returns (bool _isSupported)\n    {\n        return interfaceID == 0x80ac58cd; // ERC721\n    }\n\n    /**\n     * Mints a unique debt token and inserts the associated issuance into\n     * the debt registry, if the calling address is authorized to do so.\n     */\n    function create(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        whenNotPaused\n        returns (uint _tokenId)\n    {\n        require(tokenCreationPermissions.isAuthorized(msg.sender));\n\n        bytes32 entryHash = registry.insert(\n            _version,\n            _beneficiary,\n            _debtor,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            _salt\n        );\n\n        super._mint(_beneficiary, uint(entryHash));\n\n        return uint(entryHash);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to mint debt tokens.\n     */\n    function addAuthorizedMintAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.authorize(_agent);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to mint debt tokens\n     */\n    function revokeMintAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.revokeAuthorization(_agent);\n    }\n\n    /**\n     * Returns the list of agents authorized to mint debt tokens\n     */\n    function getAuthorizedMintAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenCreationPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * We override approval method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function approve(address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        super.approve(_to, _tokenId);\n    }\n\n    /**\n     * We override setApprovalForAll method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function setApprovalForAll(address _to, bool _approved)\n        public\n        whenNotPaused\n    {\n        super.setApprovalForAll(_to, _approved);\n    }\n\n    /**\n     * Support deprecated ERC721 method\n     */\n    function transfer(address _to, uint _tokenId)\n        public\n    {\n        safeTransferFrom(msg.sender, _to, _tokenId);\n    }\n\n    /**\n     * We override transferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function transferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.transferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId, bytes _data)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId, _data);\n    }\n\n    /**\n     * _modifyBeneficiary mutates the debt registry. This function should be\n     * called every time a token is transferred or minted\n     */\n    function _modifyBeneficiary(uint _tokenId, address _to)\n        internal\n    {\n        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {\n            registry.modifyBeneficiary(bytes32(_tokenId), _to);\n        }\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtToken.sol",
      "exportedSymbols": {
        "DebtToken": [
          2592
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 2291,
        "name": "PragmaDirective",
        "src": "584:23:3"
      },
      {
        "attributes": {
          "SourceUnit": 2290,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 2593,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2292,
        "name": "ImportDirective",
        "src": "609:28:3"
      },
      {
        "attributes": {
          "SourceUnit": 2603,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/ERC165.sol",
          "file": "./ERC165.sol",
          "scope": 2593,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2293,
        "name": "ImportDirective",
        "src": "638:22:3"
      },
      {
        "attributes": {
          "SourceUnit": 5308,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 2593,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2294,
        "name": "ImportDirective",
        "src": "661:60:3"
      },
      {
        "attributes": {
          "SourceUnit": 6695,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
          "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
          "scope": 2593,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2295,
        "name": "ImportDirective",
        "src": "722:66:3"
      },
      {
        "attributes": {
          "SourceUnit": 5505,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 2593,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2296,
        "name": "ImportDirective",
        "src": "789:59:3"
      },
      {
        "attributes": {
          "contractDependencies": [
            2602,
            5307,
            5461,
            5589,
            5609,
            5616,
            5723,
            6306,
            6694
          ],
          "contractKind": "contract",
          "documentation": "The DebtToken contract governs all business logic for making a debt agreement\ntransferable as an ERC721 non-fungible token.  Additionally, the contract\nallows authorized contracts to trigger the minting of a debt agreement token\nand, in turn, the insertion of a debt issuance into the DebtRegsitry.\n * Author: Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2592,
            5307,
            5461,
            2602,
            6694,
            6306,
            5616,
            5609,
            5589,
            5723
          ],
          "name": "DebtToken",
          "scope": 2593
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721Token",
                  "referencedDeclaration": 6694,
                  "type": "contract ERC721Token"
                },
                "id": 2297,
                "name": "UserDefinedTypeName",
                "src": "1248:11:3"
              }
            ],
            "id": 2298,
            "name": "InheritanceSpecifier",
            "src": "1248:11:3"
          },
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC165",
                  "referencedDeclaration": 2602,
                  "type": "contract ERC165"
                },
                "id": 2299,
                "name": "UserDefinedTypeName",
                "src": "1261:6:3"
              }
            ],
            "id": 2300,
            "name": "InheritanceSpecifier",
            "src": "1261:6:3"
          },
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Pausable",
                  "referencedDeclaration": 5307,
                  "type": "contract Pausable"
                },
                "id": 2301,
                "name": "UserDefinedTypeName",
                "src": "1269:8:3"
              }
            ],
            "id": 2302,
            "name": "InheritanceSpecifier",
            "src": "1269:8:3"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 4031,
                  "type": "library PermissionsLib"
                },
                "id": 2303,
                "name": "UserDefinedTypeName",
                "src": "1290:14:3"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 3865,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 2304,
                "name": "UserDefinedTypeName",
                "src": "1309:26:3"
              }
            ],
            "id": 2305,
            "name": "UsingForDirective",
            "src": "1284:52:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "registry",
              "scope": 2592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtRegistry",
                  "referencedDeclaration": 2289,
                  "type": "contract DebtRegistry"
                },
                "id": 2306,
                "name": "UserDefinedTypeName",
                "src": "1342:12:3"
              }
            ],
            "id": 2307,
            "name": "VariableDeclaration",
            "src": "1342:28:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenCreationPermissions",
              "scope": 2592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 3865,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 2308,
                "name": "UserDefinedTypeName",
                "src": "1377:26:3"
              }
            ],
            "id": 2309,
            "name": "VariableDeclaration",
            "src": "1377:60:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenBrokeragePermissions",
              "scope": 2592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 3865,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 2310,
                "name": "UserDefinedTypeName",
                "src": "1443:26:3"
              }
            ],
            "id": 2311,
            "name": "VariableDeclaration",
            "src": "1443:61:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "DebtToken",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_registry",
                      "scope": 2327,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2312,
                        "name": "ElementaryTypeName",
                        "src": "1609:7:3"
                      }
                    ],
                    "id": 2313,
                    "name": "VariableDeclaration",
                    "src": "1609:17:3"
                  }
                ],
                "id": 2314,
                "name": "ParameterList",
                "src": "1608:19:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2319,
                "name": "ParameterList",
                "src": "1687:0:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 6694,
                      "type": "type(contract ERC721Token)",
                      "value": "ERC721Token"
                    },
                    "id": 2315,
                    "name": "Identifier",
                    "src": "1651:11:3"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "44656274546f6b656e",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"DebtToken\"",
                      "value": "DebtToken"
                    },
                    "id": 2316,
                    "name": "Literal",
                    "src": "1663:11:3"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "444454",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"DDT\"",
                      "value": "DDT"
                    },
                    "id": 2317,
                    "name": "Literal",
                    "src": "1676:5:3"
                  }
                ],
                "id": 2318,
                "name": "ModifierInvocation",
                "src": "1651:31:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2307,
                              "type": "contract DebtRegistry",
                              "value": "registry"
                            },
                            "id": 2320,
                            "name": "Identifier",
                            "src": "1697:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract DebtRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2289,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 2321,
                                "name": "Identifier",
                                "src": "1708:12:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2313,
                                  "type": "address",
                                  "value": "_registry"
                                },
                                "id": 2322,
                                "name": "Identifier",
                                "src": "1721:9:3"
                              }
                            ],
                            "id": 2323,
                            "name": "FunctionCall",
                            "src": "1708:23:3"
                          }
                        ],
                        "id": 2324,
                        "name": "Assignment",
                        "src": "1697:34:3"
                      }
                    ],
                    "id": 2325,
                    "name": "ExpressionStatement",
                    "src": "1697:34:3"
                  }
                ],
                "id": 2326,
                "name": "Block",
                "src": "1687:51:3"
              }
            ],
            "id": 2327,
            "name": "FunctionDefinition",
            "src": "1590:148:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "supportsInterface",
              "payable": false,
              "scope": 2592,
              "stateMutability": "view",
              "superFunction": 2601,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "interfaceID",
                      "scope": 2339,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes4",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes4",
                          "type": "bytes4"
                        },
                        "id": 2328,
                        "name": "ElementaryTypeName",
                        "src": "1860:6:3"
                      }
                    ],
                    "id": 2329,
                    "name": "VariableDeclaration",
                    "src": "1860:18:3"
                  }
                ],
                "id": 2330,
                "name": "ParameterList",
                "src": "1859:20:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_isSupported",
                      "scope": 2339,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2331,
                        "name": "ElementaryTypeName",
                        "src": "1927:4:3"
                      }
                    ],
                    "id": 2332,
                    "name": "VariableDeclaration",
                    "src": "1927:17:3"
                  }
                ],
                "id": 2333,
                "name": "ParameterList",
                "src": "1926:19:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2333
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2329,
                              "type": "bytes4",
                              "value": "interfaceID"
                            },
                            "id": 2334,
                            "name": "Identifier",
                            "src": "1967:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30783830616335386364",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2158778573",
                              "value": "0x80ac58cd"
                            },
                            "id": 2335,
                            "name": "Literal",
                            "src": "1982:10:3"
                          }
                        ],
                        "id": 2336,
                        "name": "BinaryOperation",
                        "src": "1967:25:3"
                      }
                    ],
                    "id": 2337,
                    "name": "Return",
                    "src": "1960:32:3"
                  }
                ],
                "id": 2338,
                "name": "Block",
                "src": "1950:59:3"
              }
            ],
            "id": 2339,
            "name": "FunctionDefinition",
            "src": "1833:176:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "create",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_version",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2340,
                        "name": "ElementaryTypeName",
                        "src": "2203:7:3"
                      }
                    ],
                    "id": 2341,
                    "name": "VariableDeclaration",
                    "src": "2203:16:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_beneficiary",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2342,
                        "name": "ElementaryTypeName",
                        "src": "2229:7:3"
                      }
                    ],
                    "id": 2343,
                    "name": "VariableDeclaration",
                    "src": "2229:20:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtor",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2344,
                        "name": "ElementaryTypeName",
                        "src": "2259:7:3"
                      }
                    ],
                    "id": 2345,
                    "name": "VariableDeclaration",
                    "src": "2259:15:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriter",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2346,
                        "name": "ElementaryTypeName",
                        "src": "2284:7:3"
                      }
                    ],
                    "id": 2347,
                    "name": "VariableDeclaration",
                    "src": "2284:20:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriterRiskRating",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2348,
                        "name": "ElementaryTypeName",
                        "src": "2314:4:3"
                      }
                    ],
                    "id": 2349,
                    "name": "VariableDeclaration",
                    "src": "2314:27:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContract",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2350,
                        "name": "ElementaryTypeName",
                        "src": "2351:7:3"
                      }
                    ],
                    "id": 2351,
                    "name": "VariableDeclaration",
                    "src": "2351:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContractParameters",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2352,
                        "name": "ElementaryTypeName",
                        "src": "2383:7:3"
                      }
                    ],
                    "id": 2353,
                    "name": "VariableDeclaration",
                    "src": "2383:32:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_salt",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2354,
                        "name": "ElementaryTypeName",
                        "src": "2425:4:3"
                      }
                    ],
                    "id": 2355,
                    "name": "VariableDeclaration",
                    "src": "2425:10:3"
                  }
                ],
                "id": 2356,
                "name": "ParameterList",
                "src": "2193:248:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2398,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2359,
                        "name": "ElementaryTypeName",
                        "src": "2496:4:3"
                      }
                    ],
                    "id": 2360,
                    "name": "VariableDeclaration",
                    "src": "2496:13:3"
                  }
                ],
                "id": 2361,
                "name": "ParameterList",
                "src": "2495:15:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5268,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2357,
                    "name": "Identifier",
                    "src": "2465:13:3"
                  }
                ],
                "id": 2358,
                "name": "ModifierInvocation",
                "src": "2465:13:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6709,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2362,
                            "name": "Identifier",
                            "src": "2525:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isAuthorized",
                                  "referencedDeclaration": 4002,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2309,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "tokenCreationPermissions"
                                    },
                                    "id": 2363,
                                    "name": "Identifier",
                                    "src": "2533:24:3"
                                  }
                                ],
                                "id": 2364,
                                "name": "MemberAccess",
                                "src": "2533:37:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 6706,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2365,
                                    "name": "Identifier",
                                    "src": "2571:3:3"
                                  }
                                ],
                                "id": 2366,
                                "name": "MemberAccess",
                                "src": "2571:10:3"
                              }
                            ],
                            "id": 2367,
                            "name": "FunctionCall",
                            "src": "2533:49:3"
                          }
                        ],
                        "id": 2368,
                        "name": "FunctionCall",
                        "src": "2525:58:3"
                      }
                    ],
                    "id": 2369,
                    "name": "ExpressionStatement",
                    "src": "2525:58:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2371
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "entryHash",
                          "scope": 2398,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 2370,
                            "name": "ElementaryTypeName",
                            "src": "2594:7:3"
                          }
                        ],
                        "id": 2371,
                        "name": "VariableDeclaration",
                        "src": "2594:17:3"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "insert",
                              "referencedDeclaration": 1991,
                              "type": "function (address,address,address,address,uint256,address,bytes32,uint256) external returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2307,
                                  "type": "contract DebtRegistry",
                                  "value": "registry"
                                },
                                "id": 2372,
                                "name": "Identifier",
                                "src": "2614:8:3"
                              }
                            ],
                            "id": 2373,
                            "name": "MemberAccess",
                            "src": "2614:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2341,
                              "type": "address",
                              "value": "_version"
                            },
                            "id": 2374,
                            "name": "Identifier",
                            "src": "2643:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2343,
                              "type": "address",
                              "value": "_beneficiary"
                            },
                            "id": 2375,
                            "name": "Identifier",
                            "src": "2665:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2345,
                              "type": "address",
                              "value": "_debtor"
                            },
                            "id": 2376,
                            "name": "Identifier",
                            "src": "2691:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2347,
                              "type": "address",
                              "value": "_underwriter"
                            },
                            "id": 2377,
                            "name": "Identifier",
                            "src": "2712:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2349,
                              "type": "uint256",
                              "value": "_underwriterRiskRating"
                            },
                            "id": 2378,
                            "name": "Identifier",
                            "src": "2738:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2351,
                              "type": "address",
                              "value": "_termsContract"
                            },
                            "id": 2379,
                            "name": "Identifier",
                            "src": "2774:14:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2353,
                              "type": "bytes32",
                              "value": "_termsContractParameters"
                            },
                            "id": 2380,
                            "name": "Identifier",
                            "src": "2802:24:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2355,
                              "type": "uint256",
                              "value": "_salt"
                            },
                            "id": 2381,
                            "name": "Identifier",
                            "src": "2840:5:3"
                          }
                        ],
                        "id": 2382,
                        "name": "FunctionCall",
                        "src": "2614:241:3"
                      }
                    ],
                    "id": 2383,
                    "name": "VariableDeclarationStatement",
                    "src": "2594:261:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_mint",
                              "referencedDeclaration": 6614,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6760,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2384,
                                "name": "Identifier",
                                "src": "2866:5:3"
                              }
                            ],
                            "id": 2386,
                            "name": "MemberAccess",
                            "src": "2866:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2343,
                              "type": "address",
                              "value": "_beneficiary"
                            },
                            "id": 2387,
                            "name": "Identifier",
                            "src": "2878:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 2388,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2892:4:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2371,
                                  "type": "bytes32",
                                  "value": "entryHash"
                                },
                                "id": 2389,
                                "name": "Identifier",
                                "src": "2897:9:3"
                              }
                            ],
                            "id": 2390,
                            "name": "FunctionCall",
                            "src": "2892:15:3"
                          }
                        ],
                        "id": 2391,
                        "name": "FunctionCall",
                        "src": "2866:42:3"
                      }
                    ],
                    "id": 2392,
                    "name": "ExpressionStatement",
                    "src": "2866:42:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2361
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(uint256)",
                              "value": "uint"
                            },
                            "id": 2393,
                            "name": "ElementaryTypeNameExpression",
                            "src": "2926:4:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2371,
                              "type": "bytes32",
                              "value": "entryHash"
                            },
                            "id": 2394,
                            "name": "Identifier",
                            "src": "2931:9:3"
                          }
                        ],
                        "id": 2395,
                        "name": "FunctionCall",
                        "src": "2926:15:3"
                      }
                    ],
                    "id": 2396,
                    "name": "Return",
                    "src": "2919:22:3"
                  }
                ],
                "id": 2397,
                "name": "Block",
                "src": "2515:433:3"
              }
            ],
            "id": 2398,
            "name": "FunctionDefinition",
            "src": "2178:770:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedMintAgent",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agent",
                      "scope": 2412,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2399,
                        "name": "ElementaryTypeName",
                        "src": "3079:7:3"
                      }
                    ],
                    "id": 2400,
                    "name": "VariableDeclaration",
                    "src": "3079:14:3"
                  }
                ],
                "id": 2401,
                "name": "ParameterList",
                "src": "3078:16:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2404,
                "name": "ParameterList",
                "src": "3132:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5435,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2402,
                    "name": "Identifier",
                    "src": "3118:9:3"
                  }
                ],
                "id": 2403,
                "name": "ModifierInvocation",
                "src": "3118:9:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 3908,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2309,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 2405,
                                "name": "Identifier",
                                "src": "3142:24:3"
                              }
                            ],
                            "id": 2407,
                            "name": "MemberAccess",
                            "src": "3142:34:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2400,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 2408,
                            "name": "Identifier",
                            "src": "3177:6:3"
                          }
                        ],
                        "id": 2409,
                        "name": "FunctionCall",
                        "src": "3142:42:3"
                      }
                    ],
                    "id": 2410,
                    "name": "ExpressionStatement",
                    "src": "3142:42:3"
                  }
                ],
                "id": 2411,
                "name": "Block",
                "src": "3132:59:3"
              }
            ],
            "id": 2412,
            "name": "FunctionDefinition",
            "src": "3047:144:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeMintAgentAuthorization",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agent",
                      "scope": 2426,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2413,
                        "name": "ElementaryTypeName",
                        "src": "3332:7:3"
                      }
                    ],
                    "id": 2414,
                    "name": "VariableDeclaration",
                    "src": "3332:14:3"
                  }
                ],
                "id": 2415,
                "name": "ParameterList",
                "src": "3331:16:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2418,
                "name": "ParameterList",
                "src": "3385:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5435,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2416,
                    "name": "Identifier",
                    "src": "3371:9:3"
                  }
                ],
                "id": 2417,
                "name": "ModifierInvocation",
                "src": "3371:9:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 3987,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2309,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 2419,
                                "name": "Identifier",
                                "src": "3395:24:3"
                              }
                            ],
                            "id": 2421,
                            "name": "MemberAccess",
                            "src": "3395:44:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2414,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 2422,
                            "name": "Identifier",
                            "src": "3440:6:3"
                          }
                        ],
                        "id": 2423,
                        "name": "FunctionCall",
                        "src": "3395:52:3"
                      }
                    ],
                    "id": 2424,
                    "name": "ExpressionStatement",
                    "src": "3395:52:3"
                  }
                ],
                "id": 2425,
                "name": "Block",
                "src": "3385:69:3"
              }
            ],
            "id": 2426,
            "name": "FunctionDefinition",
            "src": "3294:160:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedMintAgents",
              "payable": false,
              "scope": 2592,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2427,
                "name": "ParameterList",
                "src": "3573:2:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agents",
                      "scope": 2437,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2428,
                            "name": "ElementaryTypeName",
                            "src": "3621:7:3"
                          }
                        ],
                        "id": 2429,
                        "name": "ArrayTypeName",
                        "src": "3621:9:3"
                      }
                    ],
                    "id": 2430,
                    "name": "VariableDeclaration",
                    "src": "3621:17:3"
                  }
                ],
                "id": 2431,
                "name": "ParameterList",
                "src": "3620:19:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2431
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getAuthorizedAgents",
                              "referencedDeclaration": 4030,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2309,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 2432,
                                "name": "Identifier",
                                "src": "3661:24:3"
                              }
                            ],
                            "id": 2433,
                            "name": "MemberAccess",
                            "src": "3661:44:3"
                          }
                        ],
                        "id": 2434,
                        "name": "FunctionCall",
                        "src": "3661:46:3"
                      }
                    ],
                    "id": 2435,
                    "name": "Return",
                    "src": "3654:53:3"
                  }
                ],
                "id": 2436,
                "name": "Block",
                "src": "3644:70:3"
              }
            ],
            "id": 2437,
            "name": "FunctionDefinition",
            "src": "3541:173:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "approve",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": 5911,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2454,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2438,
                        "name": "ElementaryTypeName",
                        "src": "3898:7:3"
                      }
                    ],
                    "id": 2439,
                    "name": "VariableDeclaration",
                    "src": "3898:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2454,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2440,
                        "name": "ElementaryTypeName",
                        "src": "3911:4:3"
                      }
                    ],
                    "id": 2441,
                    "name": "VariableDeclaration",
                    "src": "3911:13:3"
                  }
                ],
                "id": 2442,
                "name": "ParameterList",
                "src": "3897:28:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2445,
                "name": "ParameterList",
                "src": "3967:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5268,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2443,
                    "name": "Identifier",
                    "src": "3949:13:3"
                  }
                ],
                "id": 2444,
                "name": "ModifierInvocation",
                "src": "3949:13:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "approve",
                              "referencedDeclaration": 5911,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6760,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2446,
                                "name": "Identifier",
                                "src": "3977:5:3"
                              }
                            ],
                            "id": 2448,
                            "name": "MemberAccess",
                            "src": "3977:13:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2439,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2449,
                            "name": "Identifier",
                            "src": "3991:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2441,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2450,
                            "name": "Identifier",
                            "src": "3996:8:3"
                          }
                        ],
                        "id": 2451,
                        "name": "FunctionCall",
                        "src": "3977:28:3"
                      }
                    ],
                    "id": 2452,
                    "name": "ExpressionStatement",
                    "src": "3977:28:3"
                  }
                ],
                "id": 2453,
                "name": "Block",
                "src": "3967:45:3"
              }
            ],
            "id": 2454,
            "name": "FunctionDefinition",
            "src": "3881:131:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": 5954,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2471,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2455,
                        "name": "ElementaryTypeName",
                        "src": "4215:7:3"
                      }
                    ],
                    "id": 2456,
                    "name": "VariableDeclaration",
                    "src": "4215:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 2471,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2457,
                        "name": "ElementaryTypeName",
                        "src": "4228:4:3"
                      }
                    ],
                    "id": 2458,
                    "name": "VariableDeclaration",
                    "src": "4228:14:3"
                  }
                ],
                "id": 2459,
                "name": "ParameterList",
                "src": "4214:29:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2462,
                "name": "ParameterList",
                "src": "4285:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5268,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2460,
                    "name": "Identifier",
                    "src": "4267:13:3"
                  }
                ],
                "id": 2461,
                "name": "ModifierInvocation",
                "src": "4267:13:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "setApprovalForAll",
                              "referencedDeclaration": 5954,
                              "type": "function (address,bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6760,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2463,
                                "name": "Identifier",
                                "src": "4295:5:3"
                              }
                            ],
                            "id": 2465,
                            "name": "MemberAccess",
                            "src": "4295:23:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2456,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2466,
                            "name": "Identifier",
                            "src": "4319:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2458,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 2467,
                            "name": "Identifier",
                            "src": "4324:9:3"
                          }
                        ],
                        "id": 2468,
                        "name": "FunctionCall",
                        "src": "4295:39:3"
                      }
                    ],
                    "id": 2469,
                    "name": "ExpressionStatement",
                    "src": "4295:39:3"
                  }
                ],
                "id": 2470,
                "name": "Block",
                "src": "4285:56:3"
              }
            ],
            "id": 2471,
            "name": "FunctionDefinition",
            "src": "4188:153:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2486,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2472,
                        "name": "ElementaryTypeName",
                        "src": "4421:7:3"
                      }
                    ],
                    "id": 2473,
                    "name": "VariableDeclaration",
                    "src": "4421:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2486,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2474,
                        "name": "ElementaryTypeName",
                        "src": "4434:4:3"
                      }
                    ],
                    "id": 2475,
                    "name": "VariableDeclaration",
                    "src": "4434:13:3"
                  }
                ],
                "id": 2476,
                "name": "ParameterList",
                "src": "4420:28:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2477,
                "name": "ParameterList",
                "src": "4468:0:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                2536,
                                2564
                              ],
                              "referencedDeclaration": 2536,
                              "type": "function (address,address,uint256)",
                              "value": "safeTransferFrom"
                            },
                            "id": 2478,
                            "name": "Identifier",
                            "src": "4478:16:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6706,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 2479,
                                "name": "Identifier",
                                "src": "4495:3:3"
                              }
                            ],
                            "id": 2480,
                            "name": "MemberAccess",
                            "src": "4495:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2473,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2481,
                            "name": "Identifier",
                            "src": "4507:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2475,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2482,
                            "name": "Identifier",
                            "src": "4512:8:3"
                          }
                        ],
                        "id": 2483,
                        "name": "FunctionCall",
                        "src": "4478:43:3"
                      }
                    ],
                    "id": 2484,
                    "name": "ExpressionStatement",
                    "src": "4478:43:3"
                  }
                ],
                "id": 2485,
                "name": "Block",
                "src": "4468:60:3"
              }
            ],
            "id": 2486,
            "name": "FunctionDefinition",
            "src": "4403:125:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferFrom",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": 6020,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 2511,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2487,
                        "name": "ElementaryTypeName",
                        "src": "4722:7:3"
                      }
                    ],
                    "id": 2488,
                    "name": "VariableDeclaration",
                    "src": "4722:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2511,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2489,
                        "name": "ElementaryTypeName",
                        "src": "4737:7:3"
                      }
                    ],
                    "id": 2490,
                    "name": "VariableDeclaration",
                    "src": "4737:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2511,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2491,
                        "name": "ElementaryTypeName",
                        "src": "4750:4:3"
                      }
                    ],
                    "id": 2492,
                    "name": "VariableDeclaration",
                    "src": "4750:13:3"
                  }
                ],
                "id": 2493,
                "name": "ParameterList",
                "src": "4721:43:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2496,
                "name": "ParameterList",
                "src": "4806:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5268,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2494,
                    "name": "Identifier",
                    "src": "4788:13:3"
                  }
                ],
                "id": 2495,
                "name": "ModifierInvocation",
                "src": "4788:13:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2591,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 2497,
                            "name": "Identifier",
                            "src": "4816:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2492,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2498,
                            "name": "Identifier",
                            "src": "4835:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2490,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2499,
                            "name": "Identifier",
                            "src": "4845:3:3"
                          }
                        ],
                        "id": 2500,
                        "name": "FunctionCall",
                        "src": "4816:33:3"
                      }
                    ],
                    "id": 2501,
                    "name": "ExpressionStatement",
                    "src": "4816:33:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transferFrom",
                              "referencedDeclaration": 6020,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6760,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2502,
                                "name": "Identifier",
                                "src": "4859:5:3"
                              }
                            ],
                            "id": 2504,
                            "name": "MemberAccess",
                            "src": "4859:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2488,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 2505,
                            "name": "Identifier",
                            "src": "4878:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2490,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2506,
                            "name": "Identifier",
                            "src": "4885:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2492,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2507,
                            "name": "Identifier",
                            "src": "4890:8:3"
                          }
                        ],
                        "id": 2508,
                        "name": "FunctionCall",
                        "src": "4859:40:3"
                      }
                    ],
                    "id": 2509,
                    "name": "ExpressionStatement",
                    "src": "4859:40:3"
                  }
                ],
                "id": 2510,
                "name": "Block",
                "src": "4806:100:3"
              }
            ],
            "id": 2511,
            "name": "FunctionDefinition",
            "src": "4700:206:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": 6040,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 2536,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2512,
                        "name": "ElementaryTypeName",
                        "src": "5108:7:3"
                      }
                    ],
                    "id": 2513,
                    "name": "VariableDeclaration",
                    "src": "5108:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2536,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2514,
                        "name": "ElementaryTypeName",
                        "src": "5123:7:3"
                      }
                    ],
                    "id": 2515,
                    "name": "VariableDeclaration",
                    "src": "5123:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2536,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2516,
                        "name": "ElementaryTypeName",
                        "src": "5136:4:3"
                      }
                    ],
                    "id": 2517,
                    "name": "VariableDeclaration",
                    "src": "5136:13:3"
                  }
                ],
                "id": 2518,
                "name": "ParameterList",
                "src": "5107:43:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2521,
                "name": "ParameterList",
                "src": "5192:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5268,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2519,
                    "name": "Identifier",
                    "src": "5174:13:3"
                  }
                ],
                "id": 2520,
                "name": "ModifierInvocation",
                "src": "5174:13:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2591,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 2522,
                            "name": "Identifier",
                            "src": "5202:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2517,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2523,
                            "name": "Identifier",
                            "src": "5221:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2515,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2524,
                            "name": "Identifier",
                            "src": "5231:3:3"
                          }
                        ],
                        "id": 2525,
                        "name": "FunctionCall",
                        "src": "5202:33:3"
                      }
                    ],
                    "id": 2526,
                    "name": "ExpressionStatement",
                    "src": "5202:33:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "safeTransferFrom",
                              "referencedDeclaration": 6040,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6760,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2527,
                                "name": "Identifier",
                                "src": "5245:5:3"
                              }
                            ],
                            "id": 2529,
                            "name": "MemberAccess",
                            "src": "5245:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2513,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 2530,
                            "name": "Identifier",
                            "src": "5268:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2515,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2531,
                            "name": "Identifier",
                            "src": "5275:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2517,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2532,
                            "name": "Identifier",
                            "src": "5280:8:3"
                          }
                        ],
                        "id": 2533,
                        "name": "FunctionCall",
                        "src": "5245:44:3"
                      }
                    ],
                    "id": 2534,
                    "name": "ExpressionStatement",
                    "src": "5245:44:3"
                  }
                ],
                "id": 2535,
                "name": "Block",
                "src": "5192:104:3"
              }
            ],
            "id": 2536,
            "name": "FunctionDefinition",
            "src": "5082:214:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": 6070,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 2564,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2537,
                        "name": "ElementaryTypeName",
                        "src": "5498:7:3"
                      }
                    ],
                    "id": 2538,
                    "name": "VariableDeclaration",
                    "src": "5498:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2564,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2539,
                        "name": "ElementaryTypeName",
                        "src": "5513:7:3"
                      }
                    ],
                    "id": 2540,
                    "name": "VariableDeclaration",
                    "src": "5513:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2564,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2541,
                        "name": "ElementaryTypeName",
                        "src": "5526:4:3"
                      }
                    ],
                    "id": 2542,
                    "name": "VariableDeclaration",
                    "src": "5526:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 2564,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 2543,
                        "name": "ElementaryTypeName",
                        "src": "5541:5:3"
                      }
                    ],
                    "id": 2544,
                    "name": "VariableDeclaration",
                    "src": "5541:11:3"
                  }
                ],
                "id": 2545,
                "name": "ParameterList",
                "src": "5497:56:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2548,
                "name": "ParameterList",
                "src": "5595:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5268,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2546,
                    "name": "Identifier",
                    "src": "5577:13:3"
                  }
                ],
                "id": 2547,
                "name": "ModifierInvocation",
                "src": "5577:13:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2591,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 2549,
                            "name": "Identifier",
                            "src": "5605:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2542,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2550,
                            "name": "Identifier",
                            "src": "5624:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2540,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2551,
                            "name": "Identifier",
                            "src": "5634:3:3"
                          }
                        ],
                        "id": 2552,
                        "name": "FunctionCall",
                        "src": "5605:33:3"
                      }
                    ],
                    "id": 2553,
                    "name": "ExpressionStatement",
                    "src": "5605:33:3"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "safeTransferFrom",
                              "referencedDeclaration": 6070,
                              "type": "function (address,address,uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 6760,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2554,
                                "name": "Identifier",
                                "src": "5648:5:3"
                              }
                            ],
                            "id": 2556,
                            "name": "MemberAccess",
                            "src": "5648:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2538,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 2557,
                            "name": "Identifier",
                            "src": "5671:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2540,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2558,
                            "name": "Identifier",
                            "src": "5678:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2542,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2559,
                            "name": "Identifier",
                            "src": "5683:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2544,
                              "type": "bytes memory",
                              "value": "_data"
                            },
                            "id": 2560,
                            "name": "Identifier",
                            "src": "5693:5:3"
                          }
                        ],
                        "id": 2561,
                        "name": "FunctionCall",
                        "src": "5648:51:3"
                      }
                    ],
                    "id": 2562,
                    "name": "ExpressionStatement",
                    "src": "5648:51:3"
                  }
                ],
                "id": 2563,
                "name": "Block",
                "src": "5595:111:3"
              }
            ],
            "id": 2564,
            "name": "FunctionDefinition",
            "src": "5472:234:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_modifyBeneficiary",
              "payable": false,
              "scope": 2592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2591,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2565,
                        "name": "ElementaryTypeName",
                        "src": "5891:4:3"
                      }
                    ],
                    "id": 2566,
                    "name": "VariableDeclaration",
                    "src": "5891:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2591,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2567,
                        "name": "ElementaryTypeName",
                        "src": "5906:7:3"
                      }
                    ],
                    "id": 2568,
                    "name": "VariableDeclaration",
                    "src": "5906:11:3"
                  }
                ],
                "id": 2569,
                "name": "ParameterList",
                "src": "5890:28:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2570,
                "name": "ParameterList",
                "src": "5940:0:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "getBeneficiary",
                                  "referencedDeclaration": 2164,
                                  "type": "function (bytes32) view external returns (address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2307,
                                      "type": "contract DebtRegistry",
                                      "value": "registry"
                                    },
                                    "id": 2571,
                                    "name": "Identifier",
                                    "src": "5954:8:3"
                                  }
                                ],
                                "id": 2572,
                                "name": "MemberAccess",
                                "src": "5954:23:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "bytes32",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(bytes32)",
                                      "value": "bytes32"
                                    },
                                    "id": 2573,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5978:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2566,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 2574,
                                    "name": "Identifier",
                                    "src": "5986:8:3"
                                  }
                                ],
                                "id": 2575,
                                "name": "FunctionCall",
                                "src": "5978:17:3"
                              }
                            ],
                            "id": 2576,
                            "name": "FunctionCall",
                            "src": "5954:42:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2568,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2577,
                            "name": "Identifier",
                            "src": "6000:3:3"
                          }
                        ],
                        "id": 2578,
                        "name": "BinaryOperation",
                        "src": "5954:49:3"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "modifyBeneficiary",
                                      "referencedDeclaration": 2029,
                                      "type": "function (bytes32,address) external"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2307,
                                          "type": "contract DebtRegistry",
                                          "value": "registry"
                                        },
                                        "id": 2579,
                                        "name": "Identifier",
                                        "src": "6019:8:3"
                                      }
                                    ],
                                    "id": 2581,
                                    "name": "MemberAccess",
                                    "src": "6019:26:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "bytes32",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(bytes32)",
                                          "value": "bytes32"
                                        },
                                        "id": 2582,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "6046:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2566,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 2583,
                                        "name": "Identifier",
                                        "src": "6054:8:3"
                                      }
                                    ],
                                    "id": 2584,
                                    "name": "FunctionCall",
                                    "src": "6046:17:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2568,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 2585,
                                    "name": "Identifier",
                                    "src": "6065:3:3"
                                  }
                                ],
                                "id": 2586,
                                "name": "FunctionCall",
                                "src": "6019:50:3"
                              }
                            ],
                            "id": 2587,
                            "name": "ExpressionStatement",
                            "src": "6019:50:3"
                          }
                        ],
                        "id": 2588,
                        "name": "Block",
                        "src": "6005:75:3"
                      }
                    ],
                    "id": 2589,
                    "name": "IfStatement",
                    "src": "5950:130:3"
                  }
                ],
                "id": 2590,
                "name": "Block",
                "src": "5940:146:3"
              }
            ],
            "id": 2591,
            "name": "FunctionDefinition",
            "src": "5863:223:3"
          }
        ],
        "id": 2592,
        "name": "ContractDefinition",
        "src": "1226:4862:3"
      }
    ],
    "id": 2593,
    "name": "SourceUnit",
    "src": "584:5505:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x3857b0f9b601b85518d6f766a5166b35a045d9cb"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x6dbab0eda711773933a451faadf3d7d0dfd86c6a"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-07T18:05:53.118Z"
}