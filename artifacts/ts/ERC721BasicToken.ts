export const ERC721BasicToken = 
{
  "contractName": "ERC721BasicToken",
  "abi": [
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
  "bytecode": "0x6060604052341561000f57600080fd5b6111f68061001e6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063081812fc146100a9578063095ea7b31461010c57806323b872dd1461014e57806342842e0e146101af5780634f558e79146102105780636352211e1461024b57806370a08231146102ae578063a22cb465146102fb578063b88d4fde1461033f578063e985e9c5146103e3575b600080fd5b34156100b457600080fd5b6100ca6004808035906020019091905050610453565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011757600080fd5b61014c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610490565b005b341561015957600080fd5b6101ad600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610656565b005b34156101ba57600080fd5b61020e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061076d565b005b341561021b57600080fd5b61023160048080359060200190919050506107a5565b604051808215151515815260200191505060405180910390f35b341561025657600080fd5b61026c6004808035906020019091905050610816565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102b957600080fd5b6102e5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610893565b6040518082815260200191505060405180910390f35b341561030657600080fd5b61033d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610917565b005b341561034a57600080fd5b6103e1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610a53565b005b34156103ee57600080fd5b610439600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a92565b604051808215151515815260200191505060405180910390f35b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061049b82610816565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156104d857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061051857506105178133610a92565b5b151561052357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661054483610453565b73ffffffffffffffffffffffffffffffffffffffff161415806105945750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561065157826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b806106613382610b26565b151561066c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141515156106a857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106e457600080fd5b6106ee8483610bbb565b6106f88483610d24565b6107028383610e52565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b806107783382610b26565b151561078357600080fd5b61079f8484846020604051908101604052806000815250610a53565b50505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108d057600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561095257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b81610a5e3382610b26565b1515610a6957600080fd5b610a74858585610656565b610a8085858585610faa565b1515610a8b57600080fd5b5050505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080610b3283610816565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ba157508373ffffffffffffffffffffffffffffffffffffffff16610b8984610453565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bb25750610bb18185610a92565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bdb82610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610bfd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d205760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610d4482610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610d6657600080fd5b610db96001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118090919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ebf57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f636001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119990919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610fcc8573ffffffffffffffffffffffffffffffffffffffff166111b7565b1515610fdb5760019150611177565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110a657808201518184015260208101905061108b565b50505050905090810190601f1680156110d35780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156110f357600080fd5b6102c65a03f1151561110457600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b600082821115151561118e57fe5b818303905092915050565b60008082840190508381101515156111ad57fe5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a723058205ebd3f4449830fb056d63004780a2ef68759bf888b8246f5f4c74e2b845851440029",
  "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063081812fc146100a9578063095ea7b31461010c57806323b872dd1461014e57806342842e0e146101af5780634f558e79146102105780636352211e1461024b57806370a08231146102ae578063a22cb465146102fb578063b88d4fde1461033f578063e985e9c5146103e3575b600080fd5b34156100b457600080fd5b6100ca6004808035906020019091905050610453565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561011757600080fd5b61014c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610490565b005b341561015957600080fd5b6101ad600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610656565b005b34156101ba57600080fd5b61020e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061076d565b005b341561021b57600080fd5b61023160048080359060200190919050506107a5565b604051808215151515815260200191505060405180910390f35b341561025657600080fd5b61026c6004808035906020019091905050610816565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102b957600080fd5b6102e5600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610893565b6040518082815260200191505060405180910390f35b341561030657600080fd5b61033d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610917565b005b341561034a57600080fd5b6103e1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610a53565b005b34156103ee57600080fd5b610439600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a92565b604051808215151515815260200191505060405180910390f35b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061049b82610816565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156104d857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061051857506105178133610a92565b5b151561052357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661054483610453565b73ffffffffffffffffffffffffffffffffffffffff161415806105945750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561065157826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b806106613382610b26565b151561066c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141515156106a857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106e457600080fd5b6106ee8483610bbb565b6106f88483610d24565b6107028383610e52565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b806107783382610b26565b151561078357600080fd5b61079f8484846020604051908101604052806000815250610a53565b50505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561088a57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156108d057600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561095257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b81610a5e3382610b26565b1515610a6957600080fd5b610a74858585610656565b610a8085858585610faa565b1515610a8b57600080fd5b5050505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080610b3283610816565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ba157508373ffffffffffffffffffffffffffffffffffffffff16610b8984610453565b73ffffffffffffffffffffffffffffffffffffffff16145b80610bb25750610bb18185610a92565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16610bdb82610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610bfd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610d205760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b8173ffffffffffffffffffffffffffffffffffffffff16610d4482610816565b73ffffffffffffffffffffffffffffffffffffffff16141515610d6657600080fd5b610db96001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118090919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ebf57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f636001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461119990919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080610fcc8573ffffffffffffffffffffffffffffffffffffffff166111b7565b1515610fdb5760019150611177565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110a657808201518184015260208101905061108b565b50505050905090810190601f1680156110d35780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156110f357600080fd5b6102c65a03f1151561110457600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b600082821115151561118e57fe5b818303905092915050565b60008082840190508381101515156111ad57fe5b8091505092915050565b600080823b9050600081119150509190505600a165627a7a723058205ebd3f4449830fb056d63004780a2ef68759bf888b8246f5f4c74e2b845851440029",
  "sourceMap": "300:10368:39:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "300:10368:39:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2998:350;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5042:315;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5964:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3969:200;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6794:227;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;2998:350::-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;5042:315::-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;5964:154::-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;2445:140::-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;2107:164::-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;3969:200::-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;4478:142::-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;9172:204::-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;10368:298::-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:39;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;835:110:29:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;451:150:27:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721Basic.sol\";\nimport \"./ERC721Receiver.sol\";\nimport \"../../math/SafeMath.sol\";\nimport \"../../AddressUtils.sol\";\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic implementation\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721BasicToken is ERC721Basic {\n  using SafeMath for uint256;\n  using AddressUtils for address;\n  \n  // Equals to `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`\n  // which can be also obtained as `ERC721Receiver(0).onERC721Received.selector`\n  bytes4 constant ERC721_RECEIVED = 0xf0b9e5ba; \n\n  // Mapping from token ID to owner\n  mapping (uint256 => address) internal tokenOwner;\n\n  // Mapping from token ID to approved address\n  mapping (uint256 => address) internal tokenApprovals;\n\n  // Mapping from owner to number of owned token\n  mapping (address => uint256) internal ownedTokensCount;\n\n  // Mapping from owner to operator approvals\n  mapping (address => mapping (address => bool)) internal operatorApprovals;\n\n  /**\n  * @dev Guarantees msg.sender is owner of the given token\n  * @param _tokenId uint256 ID of the token to validate its ownership belongs to msg.sender\n  */\n  modifier onlyOwnerOf(uint256 _tokenId) {\n    require(ownerOf(_tokenId) == msg.sender);\n    _;\n  }\n\n  /**\n  * @dev Checks msg.sender can transfer a token, by being owner, approved, or operator\n  * @param _tokenId uint256 ID of the token to validate\n  */\n  modifier canTransfer(uint256 _tokenId) {\n    require(isApprovedOrOwner(msg.sender, _tokenId));\n    _;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address\n  * @param _owner address to query the balance of\n  * @return uint256 representing the amount owned by the passed address\n  */\n  function balanceOf(address _owner) public view returns (uint256) {\n    require(_owner != address(0));\n    return ownedTokensCount[_owner];\n  }\n\n  /**\n  * @dev Gets the owner of the specified token ID\n  * @param _tokenId uint256 ID of the token to query the owner of\n  * @return owner address currently marked as the owner of the given token ID\n  */\n  function ownerOf(uint256 _tokenId) public view returns (address) {\n    address owner = tokenOwner[_tokenId];\n    require(owner != address(0));\n    return owner;\n  }\n\n  /**\n  * @dev Returns whether the specified token exists\n  * @param _tokenId uint256 ID of the token to query the existance of\n  * @return whether the token exists\n  */\n  function exists(uint256 _tokenId) public view returns (bool) {\n    address owner = tokenOwner[_tokenId];\n    return owner != address(0);\n  }\n\n  /**\n  * @dev Approves another address to transfer the given token ID\n  * @dev The zero address indicates there is no approved address.\n  * @dev There can only be one approved address per token at a given time.\n  * @dev Can only be called by the token owner or an approved operator.\n  * @param _to address to be approved for the given token ID\n  * @param _tokenId uint256 ID of the token to be approved\n  */\n  function approve(address _to, uint256 _tokenId) public {\n    address owner = ownerOf(_tokenId);\n    require(_to != owner);\n    require(msg.sender == owner || isApprovedForAll(owner, msg.sender));\n\n    if (getApproved(_tokenId) != address(0) || _to != address(0)) {\n      tokenApprovals[_tokenId] = _to;\n      Approval(owner, _to, _tokenId);\n    }\n  }\n\n  /**\n   * @dev Gets the approved address for a token ID, or zero if no address set\n   * @param _tokenId uint256 ID of the token to query the approval of\n   * @return address currently approved for a the given token ID\n   */\n  function getApproved(uint256 _tokenId) public view returns (address) {\n    return tokenApprovals[_tokenId];\n  }\n\n\n  /**\n  * @dev Sets or unsets the approval of a given operator\n  * @dev An operator is allowed to transfer all tokens of the sender on their behalf\n  * @param _to operator address to set the approval\n  * @param _approved representing the status of the approval to be set\n  */\n  function setApprovalForAll(address _to, bool _approved) public {\n    require(_to != msg.sender);\n    operatorApprovals[msg.sender][_to] = _approved;\n    ApprovalForAll(msg.sender, _to, _approved);\n  }\n\n  /**\n   * @dev Tells whether an operator is approved by a given owner\n   * @param _owner owner address which you want to query the approval of\n   * @param _operator operator address which you want to query the approval of\n   * @return bool whether the given operator is approved by the given owner\n   */\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool) {\n    return operatorApprovals[_owner][_operator];\n  }\n\n  /**\n  * @dev Transfers the ownership of a given token ID to another address\n  * @dev Usage of this method is discouraged, use `safeTransferFrom` whenever possible\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function transferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) {\n    require(_from != address(0));\n    require(_to != address(0));\n\n    clearApproval(_from, _tokenId);\n    removeTokenFrom(_from, _tokenId);\n    addTokenTo(_to, _tokenId);\n    \n    Transfer(_from, _to, _tokenId);\n  }\n\n  /**\n  * @dev Safely transfers the ownership of a given token ID to another address\n  * @dev If the target address is a contract, it must implement `onERC721Received`,\n  *  which is called upon a safe transfer, and return the magic value\n  *  `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise,\n  *  the transfer is reverted.\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) {\n    safeTransferFrom(_from, _to, _tokenId, \"\");\n  }\n\n  /**\n  * @dev Safely transfers the ownership of a given token ID to another address\n  * @dev If the target address is a contract, it must implement `onERC721Received`,\n  *  which is called upon a safe transfer, and return the magic value\n  *  `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise,\n  *  the transfer is reverted.\n  * @dev Requires the msg sender to be the owner, approved, or operator\n  * @param _from current owner of the token\n  * @param _to address to receive the ownership of the given token ID\n  * @param _tokenId uint256 ID of the token to be transferred\n  * @param _data bytes data to send along with a safe transfer check\n  */\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public canTransfer(_tokenId) {\n    transferFrom(_from, _to, _tokenId);\n    require(checkAndCallSafeTransfer(_from, _to, _tokenId, _data));\n  }\n\n  /**\n   * @dev Returns whether the given spender can transfer a given token ID\n   * @param _spender address of the spender to query\n   * @param _tokenId uint256 ID of the token to be transferred\n   * @return bool whether the msg.sender is approved for the given token ID,\n   *  is an operator of the owner, or is the owner of the token\n   */\n  function isApprovedOrOwner(address _spender, uint256 _tokenId) internal view returns (bool) {\n    address owner = ownerOf(_tokenId);\n    return _spender == owner || getApproved(_tokenId) == _spender || isApprovedForAll(owner, _spender);\n  }\n\n  /**\n  * @dev Internal function to mint a new token\n  * @dev Reverts if the given token ID already exists\n  * @param _to The address that will own the minted token\n  * @param _tokenId uint256 ID of the token to be minted by the msg.sender\n  */\n  function _mint(address _to, uint256 _tokenId) internal {\n    require(_to != address(0));\n    addTokenTo(_to, _tokenId);\n    Transfer(address(0), _to, _tokenId);\n  }\n\n  /**\n  * @dev Internal function to burn a specific token\n  * @dev Reverts if the token does not exist\n  * @param _tokenId uint256 ID of the token being burned by the msg.sender\n  */\n  function _burn(address _owner, uint256 _tokenId) internal {\n    clearApproval(_owner, _tokenId);\n    removeTokenFrom(_owner, _tokenId);\n    Transfer(_owner, address(0), _tokenId);\n  }\n\n  /**\n  * @dev Internal function to clear current approval of a given token ID\n  * @dev Reverts if the given address is not indeed the owner of the token\n  * @param _owner owner of the token\n  * @param _tokenId uint256 ID of the token to be transferred\n  */\n  function clearApproval(address _owner, uint256 _tokenId) internal {\n    require(ownerOf(_tokenId) == _owner);\n    if (tokenApprovals[_tokenId] != address(0)) {\n      tokenApprovals[_tokenId] = address(0);\n      Approval(_owner, address(0), _tokenId);\n    }\n  }\n\n  /**\n  * @dev Internal function to add a token ID to the list of a given address\n  * @param _to address representing the new owner of the given token ID\n  * @param _tokenId uint256 ID of the token to be added to the tokens list of the given address\n  */\n  function addTokenTo(address _to, uint256 _tokenId) internal {\n    require(tokenOwner[_tokenId] == address(0));\n    tokenOwner[_tokenId] = _to;\n    ownedTokensCount[_to] = ownedTokensCount[_to].add(1);\n  }\n\n  /**\n  * @dev Internal function to remove a token ID from the list of a given address\n  * @param _from address representing the previous owner of the given token ID\n  * @param _tokenId uint256 ID of the token to be removed from the tokens list of the given address\n  */\n  function removeTokenFrom(address _from, uint256 _tokenId) internal {\n    require(ownerOf(_tokenId) == _from);\n    ownedTokensCount[_from] = ownedTokensCount[_from].sub(1);\n    tokenOwner[_tokenId] = address(0);\n  }\n\n  /**\n  * @dev Internal function to invoke `onERC721Received` on a target address\n  * @dev The call is not executed if the target address is not a contract\n  * @param _from address representing the previous owner of the given token ID\n  * @param _to target address that will receive the tokens\n  * @param _tokenId uint256 ID of the token to be transferred\n  * @param _data bytes optional data to send along with the call\n  * @return whether the call correctly returned the expected magic value\n  */\n  function checkAndCallSafeTransfer(address _from, address _to, uint256 _tokenId, bytes _data) internal returns (bool) {\n    if (!_to.isContract()) {\n      return true;\n    }\n    bytes4 retval = ERC721Receiver(_to).onERC721Received(_from, _tokenId, _data);\n    return (retval == ERC721_RECEIVED);\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol",
      "exportedSymbols": {
        "ERC721BasicToken": [
          9385
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 8804,
        "name": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "attributes": {
          "SourceUnit": 8803,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
          "file": "./ERC721Basic.sol",
          "scope": 9386,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8805,
        "name": "ImportDirective",
        "src": "26:27:39"
      },
      {
        "attributes": {
          "SourceUnit": 9403,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol",
          "file": "./ERC721Receiver.sol",
          "scope": 9386,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8806,
        "name": "ImportDirective",
        "src": "54:30:39"
      },
      {
        "attributes": {
          "SourceUnit": 8048,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 9386,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8807,
        "name": "ImportDirective",
        "src": "85:33:39"
      },
      {
        "attributes": {
          "SourceUnit": 7890,
          "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
          "file": "../../AddressUtils.sol",
          "scope": 9386,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8808,
        "name": "ImportDirective",
        "src": "119:32:39"
      },
      {
        "attributes": {
          "contractDependencies": [
            8802
          ],
          "contractKind": "contract",
          "documentation": "@title ERC721 Non-Fungible Token Standard basic implementation\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            9385,
            8802
          ],
          "name": "ERC721BasicToken",
          "scope": 9386
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
                  "name": "ERC721Basic",
                  "referencedDeclaration": 8802,
                  "type": "contract ERC721Basic"
                },
                "id": 8809,
                "name": "UserDefinedTypeName",
                "src": "329:11:39"
              }
            ],
            "id": 8810,
            "name": "InheritanceSpecifier",
            "src": "329:11:39"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 8047,
                  "type": "library SafeMath"
                },
                "id": 8811,
                "name": "UserDefinedTypeName",
                "src": "351:8:39"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 8812,
                "name": "ElementaryTypeName",
                "src": "364:7:39"
              }
            ],
            "id": 8813,
            "name": "UsingForDirective",
            "src": "345:27:39"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "AddressUtils",
                  "referencedDeclaration": 7889,
                  "type": "library AddressUtils"
                },
                "id": 8814,
                "name": "UserDefinedTypeName",
                "src": "381:12:39"
              },
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 8815,
                "name": "ElementaryTypeName",
                "src": "398:7:39"
              }
            ],
            "id": 8816,
            "name": "UsingForDirective",
            "src": "375:31:39"
          },
          {
            "attributes": {
              "constant": true,
              "name": "ERC721_RECEIVED",
              "scope": 9385,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes4",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes4",
                  "type": "bytes4"
                },
                "id": 8817,
                "name": "ElementaryTypeName",
                "src": "571:6:39"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "30786630623965356261",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 4038714810",
                  "value": "0xf0b9e5ba"
                },
                "id": 8818,
                "name": "Literal",
                "src": "605:10:39"
              }
            ],
            "id": 8819,
            "name": "VariableDeclaration",
            "src": "571:44:39"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenOwner",
              "scope": 9385,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 8820,
                    "name": "ElementaryTypeName",
                    "src": "666:7:39"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 8821,
                    "name": "ElementaryTypeName",
                    "src": "677:7:39"
                  }
                ],
                "id": 8822,
                "name": "Mapping",
                "src": "657:28:39"
              }
            ],
            "id": 8823,
            "name": "VariableDeclaration",
            "src": "657:48:39"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenApprovals",
              "scope": 9385,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 8824,
                    "name": "ElementaryTypeName",
                    "src": "766:7:39"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 8825,
                    "name": "ElementaryTypeName",
                    "src": "777:7:39"
                  }
                ],
                "id": 8826,
                "name": "Mapping",
                "src": "757:28:39"
              }
            ],
            "id": 8827,
            "name": "VariableDeclaration",
            "src": "757:52:39"
          },
          {
            "attributes": {
              "constant": false,
              "name": "ownedTokensCount",
              "scope": 9385,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 8828,
                    "name": "ElementaryTypeName",
                    "src": "872:7:39"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 8829,
                    "name": "ElementaryTypeName",
                    "src": "883:7:39"
                  }
                ],
                "id": 8830,
                "name": "Mapping",
                "src": "863:28:39"
              }
            ],
            "id": 8831,
            "name": "VariableDeclaration",
            "src": "863:54:39"
          },
          {
            "attributes": {
              "constant": false,
              "name": "operatorApprovals",
              "scope": 9385,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 8832,
                    "name": "ElementaryTypeName",
                    "src": "977:7:39"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 8833,
                        "name": "ElementaryTypeName",
                        "src": "997:7:39"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 8834,
                        "name": "ElementaryTypeName",
                        "src": "1008:4:39"
                      }
                    ],
                    "id": 8835,
                    "name": "Mapping",
                    "src": "988:25:39"
                  }
                ],
                "id": 8836,
                "name": "Mapping",
                "src": "968:46:39"
              }
            ],
            "id": 8837,
            "name": "VariableDeclaration",
            "src": "968:73:39"
          },
          {
            "attributes": {
              "name": "onlyOwnerOf",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 8852,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8838,
                        "name": "ElementaryTypeName",
                        "src": "1229:7:39"
                      }
                    ],
                    "id": 8839,
                    "name": "VariableDeclaration",
                    "src": "1229:16:39"
                  }
                ],
                "id": 8840,
                "name": "ParameterList",
                "src": "1228:18:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8841,
                            "name": "Identifier",
                            "src": "1253:7:39"
                          },
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
                              "operator": "==",
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        8910
                                      ],
                                      "referencedDeclaration": 8910,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 8842,
                                    "name": "Identifier",
                                    "src": "1261:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8839,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 8843,
                                    "name": "Identifier",
                                    "src": "1269:8:39"
                                  }
                                ],
                                "id": 8844,
                                "name": "FunctionCall",
                                "src": "1261:17:39"
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
                                      "referencedDeclaration": 9785,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 8845,
                                    "name": "Identifier",
                                    "src": "1282:3:39"
                                  }
                                ],
                                "id": 8846,
                                "name": "MemberAccess",
                                "src": "1282:10:39"
                              }
                            ],
                            "id": 8847,
                            "name": "BinaryOperation",
                            "src": "1261:31:39"
                          }
                        ],
                        "id": 8848,
                        "name": "FunctionCall",
                        "src": "1253:40:39"
                      }
                    ],
                    "id": 8849,
                    "name": "ExpressionStatement",
                    "src": "1253:40:39"
                  },
                  {
                    "id": 8850,
                    "name": "PlaceholderStatement",
                    "src": "1299:1:39"
                  }
                ],
                "id": 8851,
                "name": "Block",
                "src": "1247:58:39"
              }
            ],
            "id": 8852,
            "name": "ModifierDefinition",
            "src": "1208:97:39"
          },
          {
            "attributes": {
              "name": "canTransfer",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 8866,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8853,
                        "name": "ElementaryTypeName",
                        "src": "1484:7:39"
                      }
                    ],
                    "id": 8854,
                    "name": "VariableDeclaration",
                    "src": "1484:16:39"
                  }
                ],
                "id": 8855,
                "name": "ParameterList",
                "src": "1483:18:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8856,
                            "name": "Identifier",
                            "src": "1508:7:39"
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
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9180,
                                  "type": "function (address,uint256) view returns (bool)",
                                  "value": "isApprovedOrOwner"
                                },
                                "id": 8857,
                                "name": "Identifier",
                                "src": "1516:17:39"
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
                                      "referencedDeclaration": 9785,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 8858,
                                    "name": "Identifier",
                                    "src": "1534:3:39"
                                  }
                                ],
                                "id": 8859,
                                "name": "MemberAccess",
                                "src": "1534:10:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8854,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 8860,
                                "name": "Identifier",
                                "src": "1546:8:39"
                              }
                            ],
                            "id": 8861,
                            "name": "FunctionCall",
                            "src": "1516:39:39"
                          }
                        ],
                        "id": 8862,
                        "name": "FunctionCall",
                        "src": "1508:48:39"
                      }
                    ],
                    "id": 8863,
                    "name": "ExpressionStatement",
                    "src": "1508:48:39"
                  },
                  {
                    "id": 8864,
                    "name": "PlaceholderStatement",
                    "src": "1562:1:39"
                  }
                ],
                "id": 8865,
                "name": "Block",
                "src": "1502:66:39"
              }
            ],
            "id": 8866,
            "name": "ModifierDefinition",
            "src": "1463:105:39"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 9385,
              "stateMutability": "view",
              "superFunction": 8728,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 8886,
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
                        "id": 8867,
                        "name": "ElementaryTypeName",
                        "src": "1775:7:39"
                      }
                    ],
                    "id": 8868,
                    "name": "VariableDeclaration",
                    "src": "1775:14:39"
                  }
                ],
                "id": 8869,
                "name": "ParameterList",
                "src": "1774:16:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8886,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8870,
                        "name": "ElementaryTypeName",
                        "src": "1812:7:39"
                      }
                    ],
                    "id": 8871,
                    "name": "VariableDeclaration",
                    "src": "1812:7:39"
                  }
                ],
                "id": 8872,
                "name": "ParameterList",
                "src": "1811:9:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8873,
                            "name": "Identifier",
                            "src": "1827:7:39"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8868,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 8874,
                                "name": "Identifier",
                                "src": "1835:6:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 8875,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1845:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 8876,
                                    "name": "Literal",
                                    "src": "1853:1:39"
                                  }
                                ],
                                "id": 8877,
                                "name": "FunctionCall",
                                "src": "1845:10:39"
                              }
                            ],
                            "id": 8878,
                            "name": "BinaryOperation",
                            "src": "1835:20:39"
                          }
                        ],
                        "id": 8879,
                        "name": "FunctionCall",
                        "src": "1827:29:39"
                      }
                    ],
                    "id": 8880,
                    "name": "ExpressionStatement",
                    "src": "1827:29:39"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8872
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8831,
                              "type": "mapping(address => uint256)",
                              "value": "ownedTokensCount"
                            },
                            "id": 8881,
                            "name": "Identifier",
                            "src": "1869:16:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8868,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 8882,
                            "name": "Identifier",
                            "src": "1886:6:39"
                          }
                        ],
                        "id": 8883,
                        "name": "IndexAccess",
                        "src": "1869:24:39"
                      }
                    ],
                    "id": 8884,
                    "name": "Return",
                    "src": "1862:31:39"
                  }
                ],
                "id": 8885,
                "name": "Block",
                "src": "1821:77:39"
              }
            ],
            "id": 8886,
            "name": "FunctionDefinition",
            "src": "1756:142:39"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 9385,
              "stateMutability": "view",
              "superFunction": 8735,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 8910,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8887,
                        "name": "ElementaryTypeName",
                        "src": "2124:7:39"
                      }
                    ],
                    "id": 8888,
                    "name": "VariableDeclaration",
                    "src": "2124:16:39"
                  }
                ],
                "id": 8889,
                "name": "ParameterList",
                "src": "2123:18:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8910,
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
                        "id": 8890,
                        "name": "ElementaryTypeName",
                        "src": "2163:7:39"
                      }
                    ],
                    "id": 8891,
                    "name": "VariableDeclaration",
                    "src": "2163:7:39"
                  }
                ],
                "id": 8892,
                "name": "ParameterList",
                "src": "2162:9:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8894
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 8910,
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
                            "id": 8893,
                            "name": "ElementaryTypeName",
                            "src": "2178:7:39"
                          }
                        ],
                        "id": 8894,
                        "name": "VariableDeclaration",
                        "src": "2178:13:39"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8823,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenOwner"
                            },
                            "id": 8895,
                            "name": "Identifier",
                            "src": "2194:10:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8888,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 8896,
                            "name": "Identifier",
                            "src": "2205:8:39"
                          }
                        ],
                        "id": 8897,
                        "name": "IndexAccess",
                        "src": "2194:20:39"
                      }
                    ],
                    "id": 8898,
                    "name": "VariableDeclarationStatement",
                    "src": "2178:36:39"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8899,
                            "name": "Identifier",
                            "src": "2220:7:39"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8894,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 8900,
                                "name": "Identifier",
                                "src": "2228:5:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 8901,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2237:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 8902,
                                    "name": "Literal",
                                    "src": "2245:1:39"
                                  }
                                ],
                                "id": 8903,
                                "name": "FunctionCall",
                                "src": "2237:10:39"
                              }
                            ],
                            "id": 8904,
                            "name": "BinaryOperation",
                            "src": "2228:19:39"
                          }
                        ],
                        "id": 8905,
                        "name": "FunctionCall",
                        "src": "2220:28:39"
                      }
                    ],
                    "id": 8906,
                    "name": "ExpressionStatement",
                    "src": "2220:28:39"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8892
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8894,
                          "type": "address",
                          "value": "owner"
                        },
                        "id": 8907,
                        "name": "Identifier",
                        "src": "2261:5:39"
                      }
                    ],
                    "id": 8908,
                    "name": "Return",
                    "src": "2254:12:39"
                  }
                ],
                "id": 8909,
                "name": "Block",
                "src": "2172:99:39"
              }
            ],
            "id": 8910,
            "name": "FunctionDefinition",
            "src": "2107:164:39"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "exists",
              "payable": false,
              "scope": 9385,
              "stateMutability": "view",
              "superFunction": 8742,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 8930,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8911,
                        "name": "ElementaryTypeName",
                        "src": "2461:7:39"
                      }
                    ],
                    "id": 8912,
                    "name": "VariableDeclaration",
                    "src": "2461:16:39"
                  }
                ],
                "id": 8913,
                "name": "ParameterList",
                "src": "2460:18:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8930,
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
                        "id": 8914,
                        "name": "ElementaryTypeName",
                        "src": "2500:4:39"
                      }
                    ],
                    "id": 8915,
                    "name": "VariableDeclaration",
                    "src": "2500:4:39"
                  }
                ],
                "id": 8916,
                "name": "ParameterList",
                "src": "2499:6:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8918
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 8930,
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
                            "id": 8917,
                            "name": "ElementaryTypeName",
                            "src": "2512:7:39"
                          }
                        ],
                        "id": 8918,
                        "name": "VariableDeclaration",
                        "src": "2512:13:39"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8823,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenOwner"
                            },
                            "id": 8919,
                            "name": "Identifier",
                            "src": "2528:10:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8912,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 8920,
                            "name": "Identifier",
                            "src": "2539:8:39"
                          }
                        ],
                        "id": 8921,
                        "name": "IndexAccess",
                        "src": "2528:20:39"
                      }
                    ],
                    "id": 8922,
                    "name": "VariableDeclarationStatement",
                    "src": "2512:36:39"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8916
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8918,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 8923,
                            "name": "Identifier",
                            "src": "2561:5:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 8924,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2570:7:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 8925,
                                "name": "Literal",
                                "src": "2578:1:39"
                              }
                            ],
                            "id": 8926,
                            "name": "FunctionCall",
                            "src": "2570:10:39"
                          }
                        ],
                        "id": 8927,
                        "name": "BinaryOperation",
                        "src": "2561:19:39"
                      }
                    ],
                    "id": 8928,
                    "name": "Return",
                    "src": "2554:26:39"
                  }
                ],
                "id": 8929,
                "name": "Block",
                "src": "2506:79:39"
              }
            ],
            "id": 8930,
            "name": "FunctionDefinition",
            "src": "2445:140:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 9385,
              "stateMutability": "nonpayable",
              "superFunction": 8749,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 8990,
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
                        "id": 8931,
                        "name": "ElementaryTypeName",
                        "src": "3015:7:39"
                      }
                    ],
                    "id": 8932,
                    "name": "VariableDeclaration",
                    "src": "3015:11:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 8990,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8933,
                        "name": "ElementaryTypeName",
                        "src": "3028:7:39"
                      }
                    ],
                    "id": 8934,
                    "name": "VariableDeclaration",
                    "src": "3028:16:39"
                  }
                ],
                "id": 8935,
                "name": "ParameterList",
                "src": "3014:31:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 8936,
                "name": "ParameterList",
                "src": "3053:0:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8938
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 8990,
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
                            "id": 8937,
                            "name": "ElementaryTypeName",
                            "src": "3059:7:39"
                          }
                        ],
                        "id": 8938,
                        "name": "VariableDeclaration",
                        "src": "3059:13:39"
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
                          "type": "address",
                          "type_conversion": false
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
                              "overloadedDeclarations": [
                                8910
                              ],
                              "referencedDeclaration": 8910,
                              "type": "function (uint256) view returns (address)",
                              "value": "ownerOf"
                            },
                            "id": 8939,
                            "name": "Identifier",
                            "src": "3075:7:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8934,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 8940,
                            "name": "Identifier",
                            "src": "3083:8:39"
                          }
                        ],
                        "id": 8941,
                        "name": "FunctionCall",
                        "src": "3075:17:39"
                      }
                    ],
                    "id": 8942,
                    "name": "VariableDeclarationStatement",
                    "src": "3059:33:39"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8943,
                            "name": "Identifier",
                            "src": "3098:7:39"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8932,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8944,
                                "name": "Identifier",
                                "src": "3106:3:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8938,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 8945,
                                "name": "Identifier",
                                "src": "3113:5:39"
                              }
                            ],
                            "id": 8946,
                            "name": "BinaryOperation",
                            "src": "3106:12:39"
                          }
                        ],
                        "id": 8947,
                        "name": "FunctionCall",
                        "src": "3098:21:39"
                      }
                    ],
                    "id": 8948,
                    "name": "ExpressionStatement",
                    "src": "3098:21:39"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8949,
                            "name": "Identifier",
                            "src": "3125:7:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "||",
                              "type": "bool"
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
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8950,
                                        "name": "Identifier",
                                        "src": "3133:3:39"
                                      }
                                    ],
                                    "id": 8951,
                                    "name": "MemberAccess",
                                    "src": "3133:10:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8938,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 8952,
                                    "name": "Identifier",
                                    "src": "3147:5:39"
                                  }
                                ],
                                "id": 8953,
                                "name": "BinaryOperation",
                                "src": "3133:19:39"
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
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        9049
                                      ],
                                      "referencedDeclaration": 9049,
                                      "type": "function (address,address) view returns (bool)",
                                      "value": "isApprovedForAll"
                                    },
                                    "id": 8954,
                                    "name": "Identifier",
                                    "src": "3156:16:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8938,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 8955,
                                    "name": "Identifier",
                                    "src": "3173:5:39"
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8956,
                                        "name": "Identifier",
                                        "src": "3180:3:39"
                                      }
                                    ],
                                    "id": 8957,
                                    "name": "MemberAccess",
                                    "src": "3180:10:39"
                                  }
                                ],
                                "id": 8958,
                                "name": "FunctionCall",
                                "src": "3156:35:39"
                              }
                            ],
                            "id": 8959,
                            "name": "BinaryOperation",
                            "src": "3133:58:39"
                          }
                        ],
                        "id": 8960,
                        "name": "FunctionCall",
                        "src": "3125:67:39"
                      }
                    ],
                    "id": 8961,
                    "name": "ExpressionStatement",
                    "src": "3125:67:39"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        9002
                                      ],
                                      "referencedDeclaration": 9002,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "getApproved"
                                    },
                                    "id": 8962,
                                    "name": "Identifier",
                                    "src": "3203:11:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8934,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 8963,
                                    "name": "Identifier",
                                    "src": "3215:8:39"
                                  }
                                ],
                                "id": 8964,
                                "name": "FunctionCall",
                                "src": "3203:21:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 8965,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3228:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 8966,
                                    "name": "Literal",
                                    "src": "3236:1:39"
                                  }
                                ],
                                "id": 8967,
                                "name": "FunctionCall",
                                "src": "3228:10:39"
                              }
                            ],
                            "id": 8968,
                            "name": "BinaryOperation",
                            "src": "3203:35:39"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8932,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8969,
                                "name": "Identifier",
                                "src": "3242:3:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 8970,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3249:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 8971,
                                    "name": "Literal",
                                    "src": "3257:1:39"
                                  }
                                ],
                                "id": 8972,
                                "name": "FunctionCall",
                                "src": "3249:10:39"
                              }
                            ],
                            "id": 8973,
                            "name": "BinaryOperation",
                            "src": "3242:17:39"
                          }
                        ],
                        "id": 8974,
                        "name": "BinaryOperation",
                        "src": "3203:56:39"
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
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8827,
                                          "type": "mapping(uint256 => address)",
                                          "value": "tokenApprovals"
                                        },
                                        "id": 8975,
                                        "name": "Identifier",
                                        "src": "3269:14:39"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8934,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 8976,
                                        "name": "Identifier",
                                        "src": "3284:8:39"
                                      }
                                    ],
                                    "id": 8977,
                                    "name": "IndexAccess",
                                    "src": "3269:24:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8932,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 8978,
                                    "name": "Identifier",
                                    "src": "3296:3:39"
                                  }
                                ],
                                "id": 8979,
                                "name": "Assignment",
                                "src": "3269:30:39"
                              }
                            ],
                            "id": 8980,
                            "name": "ExpressionStatement",
                            "src": "3269:30:39"
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8713,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 8981,
                                    "name": "Identifier",
                                    "src": "3307:8:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8938,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 8982,
                                    "name": "Identifier",
                                    "src": "3316:5:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8932,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 8983,
                                    "name": "Identifier",
                                    "src": "3323:3:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8934,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 8984,
                                    "name": "Identifier",
                                    "src": "3328:8:39"
                                  }
                                ],
                                "id": 8985,
                                "name": "FunctionCall",
                                "src": "3307:30:39"
                              }
                            ],
                            "id": 8986,
                            "name": "ExpressionStatement",
                            "src": "3307:30:39"
                          }
                        ],
                        "id": 8987,
                        "name": "Block",
                        "src": "3261:83:39"
                      }
                    ],
                    "id": 8988,
                    "name": "IfStatement",
                    "src": "3199:145:39"
                  }
                ],
                "id": 8989,
                "name": "Block",
                "src": "3053:295:39"
              }
            ],
            "id": 8990,
            "name": "FunctionDefinition",
            "src": "2998:350:39"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 9385,
              "stateMutability": "view",
              "superFunction": 8756,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9002,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8991,
                        "name": "ElementaryTypeName",
                        "src": "3598:7:39"
                      }
                    ],
                    "id": 8992,
                    "name": "VariableDeclaration",
                    "src": "3598:16:39"
                  }
                ],
                "id": 8993,
                "name": "ParameterList",
                "src": "3597:18:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9002,
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
                        "id": 8994,
                        "name": "ElementaryTypeName",
                        "src": "3637:7:39"
                      }
                    ],
                    "id": 8995,
                    "name": "VariableDeclaration",
                    "src": "3637:7:39"
                  }
                ],
                "id": 8996,
                "name": "ParameterList",
                "src": "3636:9:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8996
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8827,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenApprovals"
                            },
                            "id": 8997,
                            "name": "Identifier",
                            "src": "3659:14:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8992,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 8998,
                            "name": "Identifier",
                            "src": "3674:8:39"
                          }
                        ],
                        "id": 8999,
                        "name": "IndexAccess",
                        "src": "3659:24:39"
                      }
                    ],
                    "id": 9000,
                    "name": "Return",
                    "src": "3652:31:39"
                  }
                ],
                "id": 9001,
                "name": "Block",
                "src": "3646:42:39"
              }
            ],
            "id": 9002,
            "name": "FunctionDefinition",
            "src": "3577:111:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 9385,
              "stateMutability": "nonpayable",
              "superFunction": 8763,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9033,
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
                        "id": 9003,
                        "name": "ElementaryTypeName",
                        "src": "3996:7:39"
                      }
                    ],
                    "id": 9004,
                    "name": "VariableDeclaration",
                    "src": "3996:11:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 9033,
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
                        "id": 9005,
                        "name": "ElementaryTypeName",
                        "src": "4009:4:39"
                      }
                    ],
                    "id": 9006,
                    "name": "VariableDeclaration",
                    "src": "4009:14:39"
                  }
                ],
                "id": 9007,
                "name": "ParameterList",
                "src": "3995:29:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9008,
                "name": "ParameterList",
                "src": "4032:0:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9009,
                            "name": "Identifier",
                            "src": "4038:7:39"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9004,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9010,
                                "name": "Identifier",
                                "src": "4046:3:39"
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
                                      "referencedDeclaration": 9785,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 9011,
                                    "name": "Identifier",
                                    "src": "4053:3:39"
                                  }
                                ],
                                "id": 9012,
                                "name": "MemberAccess",
                                "src": "4053:10:39"
                              }
                            ],
                            "id": 9013,
                            "name": "BinaryOperation",
                            "src": "4046:17:39"
                          }
                        ],
                        "id": 9014,
                        "name": "FunctionCall",
                        "src": "4038:26:39"
                      }
                    ],
                    "id": 9015,
                    "name": "ExpressionStatement",
                    "src": "4038:26:39"
                  },
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8837,
                                      "type": "mapping(address => mapping(address => bool))",
                                      "value": "operatorApprovals"
                                    },
                                    "id": 9016,
                                    "name": "Identifier",
                                    "src": "4070:17:39"
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
                                          "referencedDeclaration": 9785,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9017,
                                        "name": "Identifier",
                                        "src": "4088:3:39"
                                      }
                                    ],
                                    "id": 9018,
                                    "name": "MemberAccess",
                                    "src": "4088:10:39"
                                  }
                                ],
                                "id": 9020,
                                "name": "IndexAccess",
                                "src": "4070:29:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9004,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9019,
                                "name": "Identifier",
                                "src": "4100:3:39"
                              }
                            ],
                            "id": 9021,
                            "name": "IndexAccess",
                            "src": "4070:34:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9006,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 9022,
                            "name": "Identifier",
                            "src": "4107:9:39"
                          }
                        ],
                        "id": 9023,
                        "name": "Assignment",
                        "src": "4070:46:39"
                      }
                    ],
                    "id": 9024,
                    "name": "ExpressionStatement",
                    "src": "4070:46:39"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8721,
                              "type": "function (address,address,bool)",
                              "value": "ApprovalForAll"
                            },
                            "id": 9025,
                            "name": "Identifier",
                            "src": "4122:14:39"
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
                                  "referencedDeclaration": 9785,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 9026,
                                "name": "Identifier",
                                "src": "4137:3:39"
                              }
                            ],
                            "id": 9027,
                            "name": "MemberAccess",
                            "src": "4137:10:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9004,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9028,
                            "name": "Identifier",
                            "src": "4149:3:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9006,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 9029,
                            "name": "Identifier",
                            "src": "4154:9:39"
                          }
                        ],
                        "id": 9030,
                        "name": "FunctionCall",
                        "src": "4122:42:39"
                      }
                    ],
                    "id": 9031,
                    "name": "ExpressionStatement",
                    "src": "4122:42:39"
                  }
                ],
                "id": 9032,
                "name": "Block",
                "src": "4032:137:39"
              }
            ],
            "id": 9033,
            "name": "FunctionDefinition",
            "src": "3969:200:39"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isApprovedForAll",
              "payable": false,
              "scope": 9385,
              "stateMutability": "view",
              "superFunction": 8772,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 9049,
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
                        "id": 9034,
                        "name": "ElementaryTypeName",
                        "src": "4504:7:39"
                      }
                    ],
                    "id": 9035,
                    "name": "VariableDeclaration",
                    "src": "4504:14:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_operator",
                      "scope": 9049,
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
                        "id": 9036,
                        "name": "ElementaryTypeName",
                        "src": "4520:7:39"
                      }
                    ],
                    "id": 9037,
                    "name": "VariableDeclaration",
                    "src": "4520:17:39"
                  }
                ],
                "id": 9038,
                "name": "ParameterList",
                "src": "4503:35:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9049,
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
                        "id": 9039,
                        "name": "ElementaryTypeName",
                        "src": "4560:4:39"
                      }
                    ],
                    "id": 9040,
                    "name": "VariableDeclaration",
                    "src": "4560:4:39"
                  }
                ],
                "id": 9041,
                "name": "ParameterList",
                "src": "4559:6:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 9041
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8837,
                                  "type": "mapping(address => mapping(address => bool))",
                                  "value": "operatorApprovals"
                                },
                                "id": 9042,
                                "name": "Identifier",
                                "src": "4579:17:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9035,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 9043,
                                "name": "Identifier",
                                "src": "4597:6:39"
                              }
                            ],
                            "id": 9044,
                            "name": "IndexAccess",
                            "src": "4579:25:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9037,
                              "type": "address",
                              "value": "_operator"
                            },
                            "id": 9045,
                            "name": "Identifier",
                            "src": "4605:9:39"
                          }
                        ],
                        "id": 9046,
                        "name": "IndexAccess",
                        "src": "4579:36:39"
                      }
                    ],
                    "id": 9047,
                    "name": "Return",
                    "src": "4572:43:39"
                  }
                ],
                "id": 9048,
                "name": "Block",
                "src": "4566:54:39"
              }
            ],
            "id": 9049,
            "name": "FunctionDefinition",
            "src": "4478:142:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferFrom",
              "payable": false,
              "scope": 9385,
              "stateMutability": "nonpayable",
              "superFunction": 8781,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 9099,
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
                        "id": 9050,
                        "name": "ElementaryTypeName",
                        "src": "5064:7:39"
                      }
                    ],
                    "id": 9051,
                    "name": "VariableDeclaration",
                    "src": "5064:13:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9099,
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
                        "id": 9052,
                        "name": "ElementaryTypeName",
                        "src": "5079:7:39"
                      }
                    ],
                    "id": 9053,
                    "name": "VariableDeclaration",
                    "src": "5079:11:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9099,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9054,
                        "name": "ElementaryTypeName",
                        "src": "5092:7:39"
                      }
                    ],
                    "id": 9055,
                    "name": "VariableDeclaration",
                    "src": "5092:16:39"
                  }
                ],
                "id": 9056,
                "name": "ParameterList",
                "src": "5063:46:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9060,
                "name": "ParameterList",
                "src": "5139:0:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 8866,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 9057,
                    "name": "Identifier",
                    "src": "5117:11:39"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9055,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 9058,
                    "name": "Identifier",
                    "src": "5129:8:39"
                  }
                ],
                "id": 9059,
                "name": "ModifierInvocation",
                "src": "5117:21:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9061,
                            "name": "Identifier",
                            "src": "5145:7:39"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9051,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 9062,
                                "name": "Identifier",
                                "src": "5153:5:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9063,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5162:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9064,
                                    "name": "Literal",
                                    "src": "5170:1:39"
                                  }
                                ],
                                "id": 9065,
                                "name": "FunctionCall",
                                "src": "5162:10:39"
                              }
                            ],
                            "id": 9066,
                            "name": "BinaryOperation",
                            "src": "5153:19:39"
                          }
                        ],
                        "id": 9067,
                        "name": "FunctionCall",
                        "src": "5145:28:39"
                      }
                    ],
                    "id": 9068,
                    "name": "ExpressionStatement",
                    "src": "5145:28:39"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9069,
                            "name": "Identifier",
                            "src": "5179:7:39"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9053,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9070,
                                "name": "Identifier",
                                "src": "5187:3:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9071,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5194:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9072,
                                    "name": "Literal",
                                    "src": "5202:1:39"
                                  }
                                ],
                                "id": 9073,
                                "name": "FunctionCall",
                                "src": "5194:10:39"
                              }
                            ],
                            "id": 9074,
                            "name": "BinaryOperation",
                            "src": "5187:17:39"
                          }
                        ],
                        "id": 9075,
                        "name": "FunctionCall",
                        "src": "5179:26:39"
                      }
                    ],
                    "id": 9076,
                    "name": "ExpressionStatement",
                    "src": "5179:26:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9276,
                              "type": "function (address,uint256)",
                              "value": "clearApproval"
                            },
                            "id": 9077,
                            "name": "Identifier",
                            "src": "5212:13:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9051,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9078,
                            "name": "Identifier",
                            "src": "5226:5:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9055,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9079,
                            "name": "Identifier",
                            "src": "5233:8:39"
                          }
                        ],
                        "id": 9080,
                        "name": "FunctionCall",
                        "src": "5212:30:39"
                      }
                    ],
                    "id": 9081,
                    "name": "ExpressionStatement",
                    "src": "5212:30:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9346,
                              "type": "function (address,uint256)",
                              "value": "removeTokenFrom"
                            },
                            "id": 9082,
                            "name": "Identifier",
                            "src": "5248:15:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9051,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9083,
                            "name": "Identifier",
                            "src": "5264:5:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9055,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9084,
                            "name": "Identifier",
                            "src": "5271:8:39"
                          }
                        ],
                        "id": 9085,
                        "name": "FunctionCall",
                        "src": "5248:32:39"
                      }
                    ],
                    "id": 9086,
                    "name": "ExpressionStatement",
                    "src": "5248:32:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9311,
                              "type": "function (address,uint256)",
                              "value": "addTokenTo"
                            },
                            "id": 9087,
                            "name": "Identifier",
                            "src": "5286:10:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9053,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9088,
                            "name": "Identifier",
                            "src": "5297:3:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9055,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9089,
                            "name": "Identifier",
                            "src": "5302:8:39"
                          }
                        ],
                        "id": 9090,
                        "name": "FunctionCall",
                        "src": "5286:25:39"
                      }
                    ],
                    "id": 9091,
                    "name": "ExpressionStatement",
                    "src": "5286:25:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8705,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 9092,
                            "name": "Identifier",
                            "src": "5322:8:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9051,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9093,
                            "name": "Identifier",
                            "src": "5331:5:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9053,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9094,
                            "name": "Identifier",
                            "src": "5338:3:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9055,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9095,
                            "name": "Identifier",
                            "src": "5343:8:39"
                          }
                        ],
                        "id": 9096,
                        "name": "FunctionCall",
                        "src": "5322:30:39"
                      }
                    ],
                    "id": 9097,
                    "name": "ExpressionStatement",
                    "src": "5322:30:39"
                  }
                ],
                "id": 9098,
                "name": "Block",
                "src": "5139:218:39"
              }
            ],
            "id": 9099,
            "name": "FunctionDefinition",
            "src": "5042:315:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 9385,
              "stateMutability": "nonpayable",
              "superFunction": 8790,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 9119,
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
                        "id": 9100,
                        "name": "ElementaryTypeName",
                        "src": "5990:7:39"
                      }
                    ],
                    "id": 9101,
                    "name": "VariableDeclaration",
                    "src": "5990:13:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9119,
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
                        "id": 9102,
                        "name": "ElementaryTypeName",
                        "src": "6005:7:39"
                      }
                    ],
                    "id": 9103,
                    "name": "VariableDeclaration",
                    "src": "6005:11:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9119,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9104,
                        "name": "ElementaryTypeName",
                        "src": "6018:7:39"
                      }
                    ],
                    "id": 9105,
                    "name": "VariableDeclaration",
                    "src": "6018:16:39"
                  }
                ],
                "id": 9106,
                "name": "ParameterList",
                "src": "5989:46:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9110,
                "name": "ParameterList",
                "src": "6065:0:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 8866,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 9107,
                    "name": "Identifier",
                    "src": "6043:11:39"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9105,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 9108,
                    "name": "Identifier",
                    "src": "6055:8:39"
                  }
                ],
                "id": 9109,
                "name": "ModifierInvocation",
                "src": "6043:21:39"
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
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "overloadedDeclarations": [
                                9119,
                                9149
                              ],
                              "referencedDeclaration": 9149,
                              "type": "function (address,address,uint256,bytes memory)",
                              "value": "safeTransferFrom"
                            },
                            "id": 9111,
                            "name": "Identifier",
                            "src": "6071:16:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9101,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9112,
                            "name": "Identifier",
                            "src": "6088:5:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9103,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9113,
                            "name": "Identifier",
                            "src": "6095:3:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9105,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9114,
                            "name": "Identifier",
                            "src": "6100:8:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"\"",
                              "value": ""
                            },
                            "id": 9115,
                            "name": "Literal",
                            "src": "6110:2:39"
                          }
                        ],
                        "id": 9116,
                        "name": "FunctionCall",
                        "src": "6071:42:39"
                      }
                    ],
                    "id": 9117,
                    "name": "ExpressionStatement",
                    "src": "6071:42:39"
                  }
                ],
                "id": 9118,
                "name": "Block",
                "src": "6065:53:39"
              }
            ],
            "id": 9119,
            "name": "FunctionDefinition",
            "src": "5964:154:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 9385,
              "stateMutability": "nonpayable",
              "superFunction": 8801,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 9149,
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
                        "id": 9120,
                        "name": "ElementaryTypeName",
                        "src": "6820:7:39"
                      }
                    ],
                    "id": 9121,
                    "name": "VariableDeclaration",
                    "src": "6820:13:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9149,
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
                        "id": 9122,
                        "name": "ElementaryTypeName",
                        "src": "6835:7:39"
                      }
                    ],
                    "id": 9123,
                    "name": "VariableDeclaration",
                    "src": "6835:11:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9149,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9124,
                        "name": "ElementaryTypeName",
                        "src": "6848:7:39"
                      }
                    ],
                    "id": 9125,
                    "name": "VariableDeclaration",
                    "src": "6848:16:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 9149,
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
                        "id": 9126,
                        "name": "ElementaryTypeName",
                        "src": "6866:5:39"
                      }
                    ],
                    "id": 9127,
                    "name": "VariableDeclaration",
                    "src": "6866:11:39"
                  }
                ],
                "id": 9128,
                "name": "ParameterList",
                "src": "6819:59:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9132,
                "name": "ParameterList",
                "src": "6908:0:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 8866,
                      "type": "modifier (uint256)",
                      "value": "canTransfer"
                    },
                    "id": 9129,
                    "name": "Identifier",
                    "src": "6886:11:39"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 9125,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 9130,
                    "name": "Identifier",
                    "src": "6898:8:39"
                  }
                ],
                "id": 9131,
                "name": "ModifierInvocation",
                "src": "6886:21:39"
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
                                9099
                              ],
                              "referencedDeclaration": 9099,
                              "type": "function (address,address,uint256)",
                              "value": "transferFrom"
                            },
                            "id": 9133,
                            "name": "Identifier",
                            "src": "6914:12:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9121,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9134,
                            "name": "Identifier",
                            "src": "6927:5:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9123,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9135,
                            "name": "Identifier",
                            "src": "6934:3:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9125,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9136,
                            "name": "Identifier",
                            "src": "6939:8:39"
                          }
                        ],
                        "id": 9137,
                        "name": "FunctionCall",
                        "src": "6914:34:39"
                      }
                    ],
                    "id": 9138,
                    "name": "ExpressionStatement",
                    "src": "6914:34:39"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9139,
                            "name": "Identifier",
                            "src": "6954:7:39"
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9384,
                                  "type": "function (address,address,uint256,bytes memory) returns (bool)",
                                  "value": "checkAndCallSafeTransfer"
                                },
                                "id": 9140,
                                "name": "Identifier",
                                "src": "6962:24:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9121,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 9141,
                                "name": "Identifier",
                                "src": "6987:5:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9123,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9142,
                                "name": "Identifier",
                                "src": "6994:3:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9125,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 9143,
                                "name": "Identifier",
                                "src": "6999:8:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9127,
                                  "type": "bytes memory",
                                  "value": "_data"
                                },
                                "id": 9144,
                                "name": "Identifier",
                                "src": "7009:5:39"
                              }
                            ],
                            "id": 9145,
                            "name": "FunctionCall",
                            "src": "6962:53:39"
                          }
                        ],
                        "id": 9146,
                        "name": "FunctionCall",
                        "src": "6954:62:39"
                      }
                    ],
                    "id": 9147,
                    "name": "ExpressionStatement",
                    "src": "6954:62:39"
                  }
                ],
                "id": 9148,
                "name": "Block",
                "src": "6908:113:39"
              }
            ],
            "id": 9149,
            "name": "FunctionDefinition",
            "src": "6794:227:39"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isApprovedOrOwner",
              "payable": false,
              "scope": 9385,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 9180,
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
                        "id": 9150,
                        "name": "ElementaryTypeName",
                        "src": "7395:7:39"
                      }
                    ],
                    "id": 9151,
                    "name": "VariableDeclaration",
                    "src": "7395:16:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9180,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9152,
                        "name": "ElementaryTypeName",
                        "src": "7413:7:39"
                      }
                    ],
                    "id": 9153,
                    "name": "VariableDeclaration",
                    "src": "7413:16:39"
                  }
                ],
                "id": 9154,
                "name": "ParameterList",
                "src": "7394:36:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9180,
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
                        "id": 9155,
                        "name": "ElementaryTypeName",
                        "src": "7454:4:39"
                      }
                    ],
                    "id": 9156,
                    "name": "VariableDeclaration",
                    "src": "7454:4:39"
                  }
                ],
                "id": 9157,
                "name": "ParameterList",
                "src": "7453:6:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9159
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "owner",
                          "scope": 9180,
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
                            "id": 9158,
                            "name": "ElementaryTypeName",
                            "src": "7466:7:39"
                          }
                        ],
                        "id": 9159,
                        "name": "VariableDeclaration",
                        "src": "7466:13:39"
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
                          "type": "address",
                          "type_conversion": false
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
                              "overloadedDeclarations": [
                                8910
                              ],
                              "referencedDeclaration": 8910,
                              "type": "function (uint256) view returns (address)",
                              "value": "ownerOf"
                            },
                            "id": 9160,
                            "name": "Identifier",
                            "src": "7482:7:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9153,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9161,
                            "name": "Identifier",
                            "src": "7490:8:39"
                          }
                        ],
                        "id": 9162,
                        "name": "FunctionCall",
                        "src": "7482:17:39"
                      }
                    ],
                    "id": 9163,
                    "name": "VariableDeclarationStatement",
                    "src": "7466:33:39"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9157
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "||",
                              "type": "bool"
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
                                      "referencedDeclaration": 9151,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 9164,
                                    "name": "Identifier",
                                    "src": "7512:8:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9159,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 9165,
                                    "name": "Identifier",
                                    "src": "7524:5:39"
                                  }
                                ],
                                "id": 9166,
                                "name": "BinaryOperation",
                                "src": "7512:17:39"
                              },
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
                                  "operator": "==",
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
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            9002
                                          ],
                                          "referencedDeclaration": 9002,
                                          "type": "function (uint256) view returns (address)",
                                          "value": "getApproved"
                                        },
                                        "id": 9167,
                                        "name": "Identifier",
                                        "src": "7533:11:39"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9153,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 9168,
                                        "name": "Identifier",
                                        "src": "7545:8:39"
                                      }
                                    ],
                                    "id": 9169,
                                    "name": "FunctionCall",
                                    "src": "7533:21:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9151,
                                      "type": "address",
                                      "value": "_spender"
                                    },
                                    "id": 9170,
                                    "name": "Identifier",
                                    "src": "7558:8:39"
                                  }
                                ],
                                "id": 9171,
                                "name": "BinaryOperation",
                                "src": "7533:33:39"
                              }
                            ],
                            "id": 9172,
                            "name": "BinaryOperation",
                            "src": "7512:54:39"
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
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    9049
                                  ],
                                  "referencedDeclaration": 9049,
                                  "type": "function (address,address) view returns (bool)",
                                  "value": "isApprovedForAll"
                                },
                                "id": 9173,
                                "name": "Identifier",
                                "src": "7570:16:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9159,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 9174,
                                "name": "Identifier",
                                "src": "7587:5:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9151,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 9175,
                                "name": "Identifier",
                                "src": "7594:8:39"
                              }
                            ],
                            "id": 9176,
                            "name": "FunctionCall",
                            "src": "7570:33:39"
                          }
                        ],
                        "id": 9177,
                        "name": "BinaryOperation",
                        "src": "7512:91:39"
                      }
                    ],
                    "id": 9178,
                    "name": "Return",
                    "src": "7505:98:39"
                  }
                ],
                "id": 9179,
                "name": "Block",
                "src": "7460:148:39"
              }
            ],
            "id": 9180,
            "name": "FunctionDefinition",
            "src": "7368:240:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_mint",
              "payable": false,
              "scope": 9385,
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
                      "name": "_to",
                      "scope": 9209,
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
                        "id": 9181,
                        "name": "ElementaryTypeName",
                        "src": "7872:7:39"
                      }
                    ],
                    "id": 9182,
                    "name": "VariableDeclaration",
                    "src": "7872:11:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9209,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9183,
                        "name": "ElementaryTypeName",
                        "src": "7885:7:39"
                      }
                    ],
                    "id": 9184,
                    "name": "VariableDeclaration",
                    "src": "7885:16:39"
                  }
                ],
                "id": 9185,
                "name": "ParameterList",
                "src": "7871:31:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9186,
                "name": "ParameterList",
                "src": "7912:0:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9187,
                            "name": "Identifier",
                            "src": "7918:7:39"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9182,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9188,
                                "name": "Identifier",
                                "src": "7926:3:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9189,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "7933:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9190,
                                    "name": "Literal",
                                    "src": "7941:1:39"
                                  }
                                ],
                                "id": 9191,
                                "name": "FunctionCall",
                                "src": "7933:10:39"
                              }
                            ],
                            "id": 9192,
                            "name": "BinaryOperation",
                            "src": "7926:17:39"
                          }
                        ],
                        "id": 9193,
                        "name": "FunctionCall",
                        "src": "7918:26:39"
                      }
                    ],
                    "id": 9194,
                    "name": "ExpressionStatement",
                    "src": "7918:26:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9311,
                              "type": "function (address,uint256)",
                              "value": "addTokenTo"
                            },
                            "id": 9195,
                            "name": "Identifier",
                            "src": "7950:10:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9182,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9196,
                            "name": "Identifier",
                            "src": "7961:3:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9184,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9197,
                            "name": "Identifier",
                            "src": "7966:8:39"
                          }
                        ],
                        "id": 9198,
                        "name": "FunctionCall",
                        "src": "7950:25:39"
                      }
                    ],
                    "id": 9199,
                    "name": "ExpressionStatement",
                    "src": "7950:25:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8705,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 9200,
                            "name": "Identifier",
                            "src": "7981:8:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 9201,
                                "name": "ElementaryTypeNameExpression",
                                "src": "7990:7:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 9202,
                                "name": "Literal",
                                "src": "7998:1:39"
                              }
                            ],
                            "id": 9203,
                            "name": "FunctionCall",
                            "src": "7990:10:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9182,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9204,
                            "name": "Identifier",
                            "src": "8002:3:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9184,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9205,
                            "name": "Identifier",
                            "src": "8007:8:39"
                          }
                        ],
                        "id": 9206,
                        "name": "FunctionCall",
                        "src": "7981:35:39"
                      }
                    ],
                    "id": 9207,
                    "name": "ExpressionStatement",
                    "src": "7981:35:39"
                  }
                ],
                "id": 9208,
                "name": "Block",
                "src": "7912:109:39"
              }
            ],
            "id": 9209,
            "name": "FunctionDefinition",
            "src": "7857:164:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_burn",
              "payable": false,
              "scope": 9385,
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
                      "name": "_owner",
                      "scope": 9235,
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
                        "id": 9210,
                        "name": "ElementaryTypeName",
                        "src": "8223:7:39"
                      }
                    ],
                    "id": 9211,
                    "name": "VariableDeclaration",
                    "src": "8223:14:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9235,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9212,
                        "name": "ElementaryTypeName",
                        "src": "8239:7:39"
                      }
                    ],
                    "id": 9213,
                    "name": "VariableDeclaration",
                    "src": "8239:16:39"
                  }
                ],
                "id": 9214,
                "name": "ParameterList",
                "src": "8222:34:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9215,
                "name": "ParameterList",
                "src": "8266:0:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9276,
                              "type": "function (address,uint256)",
                              "value": "clearApproval"
                            },
                            "id": 9216,
                            "name": "Identifier",
                            "src": "8272:13:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9211,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 9217,
                            "name": "Identifier",
                            "src": "8286:6:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9213,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9218,
                            "name": "Identifier",
                            "src": "8294:8:39"
                          }
                        ],
                        "id": 9219,
                        "name": "FunctionCall",
                        "src": "8272:31:39"
                      }
                    ],
                    "id": 9220,
                    "name": "ExpressionStatement",
                    "src": "8272:31:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9346,
                              "type": "function (address,uint256)",
                              "value": "removeTokenFrom"
                            },
                            "id": 9221,
                            "name": "Identifier",
                            "src": "8309:15:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9211,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 9222,
                            "name": "Identifier",
                            "src": "8325:6:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9213,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9223,
                            "name": "Identifier",
                            "src": "8333:8:39"
                          }
                        ],
                        "id": 9224,
                        "name": "FunctionCall",
                        "src": "8309:33:39"
                      }
                    ],
                    "id": 9225,
                    "name": "ExpressionStatement",
                    "src": "8309:33:39"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8705,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 9226,
                            "name": "Identifier",
                            "src": "8348:8:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9211,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 9227,
                            "name": "Identifier",
                            "src": "8357:6:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 9228,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8365:7:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 9229,
                                "name": "Literal",
                                "src": "8373:1:39"
                              }
                            ],
                            "id": 9230,
                            "name": "FunctionCall",
                            "src": "8365:10:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9213,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9231,
                            "name": "Identifier",
                            "src": "8377:8:39"
                          }
                        ],
                        "id": 9232,
                        "name": "FunctionCall",
                        "src": "8348:38:39"
                      }
                    ],
                    "id": 9233,
                    "name": "ExpressionStatement",
                    "src": "8348:38:39"
                  }
                ],
                "id": 9234,
                "name": "Block",
                "src": "8266:125:39"
              }
            ],
            "id": 9235,
            "name": "FunctionDefinition",
            "src": "8208:183:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "clearApproval",
              "payable": false,
              "scope": 9385,
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
                      "name": "_owner",
                      "scope": 9276,
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
                        "id": 9236,
                        "name": "ElementaryTypeName",
                        "src": "8676:7:39"
                      }
                    ],
                    "id": 9237,
                    "name": "VariableDeclaration",
                    "src": "8676:14:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9276,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9238,
                        "name": "ElementaryTypeName",
                        "src": "8692:7:39"
                      }
                    ],
                    "id": 9239,
                    "name": "VariableDeclaration",
                    "src": "8692:16:39"
                  }
                ],
                "id": 9240,
                "name": "ParameterList",
                "src": "8675:34:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9241,
                "name": "ParameterList",
                "src": "8719:0:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9242,
                            "name": "Identifier",
                            "src": "8725:7:39"
                          },
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
                              "operator": "==",
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        8910
                                      ],
                                      "referencedDeclaration": 8910,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 9243,
                                    "name": "Identifier",
                                    "src": "8733:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9239,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9244,
                                    "name": "Identifier",
                                    "src": "8741:8:39"
                                  }
                                ],
                                "id": 9245,
                                "name": "FunctionCall",
                                "src": "8733:17:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9237,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 9246,
                                "name": "Identifier",
                                "src": "8754:6:39"
                              }
                            ],
                            "id": 9247,
                            "name": "BinaryOperation",
                            "src": "8733:27:39"
                          }
                        ],
                        "id": 9248,
                        "name": "FunctionCall",
                        "src": "8725:36:39"
                      }
                    ],
                    "id": 9249,
                    "name": "ExpressionStatement",
                    "src": "8725:36:39"
                  },
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
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8827,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenApprovals"
                                },
                                "id": 9250,
                                "name": "Identifier",
                                "src": "8771:14:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9239,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 9251,
                                "name": "Identifier",
                                "src": "8786:8:39"
                              }
                            ],
                            "id": 9252,
                            "name": "IndexAccess",
                            "src": "8771:24:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 9253,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8799:7:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 9254,
                                "name": "Literal",
                                "src": "8807:1:39"
                              }
                            ],
                            "id": 9255,
                            "name": "FunctionCall",
                            "src": "8799:10:39"
                          }
                        ],
                        "id": 9256,
                        "name": "BinaryOperation",
                        "src": "8771:38:39"
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
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8827,
                                          "type": "mapping(uint256 => address)",
                                          "value": "tokenApprovals"
                                        },
                                        "id": 9257,
                                        "name": "Identifier",
                                        "src": "8819:14:39"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9239,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 9258,
                                        "name": "Identifier",
                                        "src": "8834:8:39"
                                      }
                                    ],
                                    "id": 9259,
                                    "name": "IndexAccess",
                                    "src": "8819:24:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_rational_0_by_1",
                                              "typeString": "int_const 0"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 9260,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "8846:7:39"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 9261,
                                        "name": "Literal",
                                        "src": "8854:1:39"
                                      }
                                    ],
                                    "id": 9262,
                                    "name": "FunctionCall",
                                    "src": "8846:10:39"
                                  }
                                ],
                                "id": 9263,
                                "name": "Assignment",
                                "src": "8819:37:39"
                              }
                            ],
                            "id": 9264,
                            "name": "ExpressionStatement",
                            "src": "8819:37:39"
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8713,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 9265,
                                    "name": "Identifier",
                                    "src": "8864:8:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9237,
                                      "type": "address",
                                      "value": "_owner"
                                    },
                                    "id": 9266,
                                    "name": "Identifier",
                                    "src": "8873:6:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_rational_0_by_1",
                                              "typeString": "int_const 0"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(address)",
                                          "value": "address"
                                        },
                                        "id": 9267,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "8881:7:39"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "30",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 0",
                                          "value": "0"
                                        },
                                        "id": 9268,
                                        "name": "Literal",
                                        "src": "8889:1:39"
                                      }
                                    ],
                                    "id": 9269,
                                    "name": "FunctionCall",
                                    "src": "8881:10:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9239,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9270,
                                    "name": "Identifier",
                                    "src": "8893:8:39"
                                  }
                                ],
                                "id": 9271,
                                "name": "FunctionCall",
                                "src": "8864:38:39"
                              }
                            ],
                            "id": 9272,
                            "name": "ExpressionStatement",
                            "src": "8864:38:39"
                          }
                        ],
                        "id": 9273,
                        "name": "Block",
                        "src": "8811:98:39"
                      }
                    ],
                    "id": 9274,
                    "name": "IfStatement",
                    "src": "8767:142:39"
                  }
                ],
                "id": 9275,
                "name": "Block",
                "src": "8719:194:39"
              }
            ],
            "id": 9276,
            "name": "FunctionDefinition",
            "src": "8653:260:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "addTokenTo",
              "payable": false,
              "scope": 9385,
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
                      "name": "_to",
                      "scope": 9311,
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
                        "id": 9277,
                        "name": "ElementaryTypeName",
                        "src": "9192:7:39"
                      }
                    ],
                    "id": 9278,
                    "name": "VariableDeclaration",
                    "src": "9192:11:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9311,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9279,
                        "name": "ElementaryTypeName",
                        "src": "9205:7:39"
                      }
                    ],
                    "id": 9280,
                    "name": "VariableDeclaration",
                    "src": "9205:16:39"
                  }
                ],
                "id": 9281,
                "name": "ParameterList",
                "src": "9191:31:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9282,
                "name": "ParameterList",
                "src": "9232:0:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9283,
                            "name": "Identifier",
                            "src": "9238:7:39"
                          },
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
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8823,
                                      "type": "mapping(uint256 => address)",
                                      "value": "tokenOwner"
                                    },
                                    "id": 9284,
                                    "name": "Identifier",
                                    "src": "9246:10:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9280,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9285,
                                    "name": "Identifier",
                                    "src": "9257:8:39"
                                  }
                                ],
                                "id": 9286,
                                "name": "IndexAccess",
                                "src": "9246:20:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 9287,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "9270:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 9288,
                                    "name": "Literal",
                                    "src": "9278:1:39"
                                  }
                                ],
                                "id": 9289,
                                "name": "FunctionCall",
                                "src": "9270:10:39"
                              }
                            ],
                            "id": 9290,
                            "name": "BinaryOperation",
                            "src": "9246:34:39"
                          }
                        ],
                        "id": 9291,
                        "name": "FunctionCall",
                        "src": "9238:43:39"
                      }
                    ],
                    "id": 9292,
                    "name": "ExpressionStatement",
                    "src": "9238:43:39"
                  },
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8823,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenOwner"
                                },
                                "id": 9293,
                                "name": "Identifier",
                                "src": "9287:10:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9280,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 9294,
                                "name": "Identifier",
                                "src": "9298:8:39"
                              }
                            ],
                            "id": 9295,
                            "name": "IndexAccess",
                            "src": "9287:20:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9278,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9296,
                            "name": "Identifier",
                            "src": "9310:3:39"
                          }
                        ],
                        "id": 9297,
                        "name": "Assignment",
                        "src": "9287:26:39"
                      }
                    ],
                    "id": 9298,
                    "name": "ExpressionStatement",
                    "src": "9287:26:39"
                  },
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
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8831,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownedTokensCount"
                                },
                                "id": 9299,
                                "name": "Identifier",
                                "src": "9319:16:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9278,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9300,
                                "name": "Identifier",
                                "src": "9336:3:39"
                              }
                            ],
                            "id": 9301,
                            "name": "IndexAccess",
                            "src": "9319:21:39"
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
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 8046,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8831,
                                          "type": "mapping(address => uint256)",
                                          "value": "ownedTokensCount"
                                        },
                                        "id": 9302,
                                        "name": "Identifier",
                                        "src": "9343:16:39"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9278,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 9303,
                                        "name": "Identifier",
                                        "src": "9360:3:39"
                                      }
                                    ],
                                    "id": 9304,
                                    "name": "IndexAccess",
                                    "src": "9343:21:39"
                                  }
                                ],
                                "id": 9305,
                                "name": "MemberAccess",
                                "src": "9343:25:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 9306,
                                "name": "Literal",
                                "src": "9369:1:39"
                              }
                            ],
                            "id": 9307,
                            "name": "FunctionCall",
                            "src": "9343:28:39"
                          }
                        ],
                        "id": 9308,
                        "name": "Assignment",
                        "src": "9319:52:39"
                      }
                    ],
                    "id": 9309,
                    "name": "ExpressionStatement",
                    "src": "9319:52:39"
                  }
                ],
                "id": 9310,
                "name": "Block",
                "src": "9232:144:39"
              }
            ],
            "id": 9311,
            "name": "FunctionDefinition",
            "src": "9172:204:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "removeTokenFrom",
              "payable": false,
              "scope": 9385,
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
                      "name": "_from",
                      "scope": 9346,
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
                        "id": 9312,
                        "name": "ElementaryTypeName",
                        "src": "9676:7:39"
                      }
                    ],
                    "id": 9313,
                    "name": "VariableDeclaration",
                    "src": "9676:13:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9346,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9314,
                        "name": "ElementaryTypeName",
                        "src": "9691:7:39"
                      }
                    ],
                    "id": 9315,
                    "name": "VariableDeclaration",
                    "src": "9691:16:39"
                  }
                ],
                "id": 9316,
                "name": "ParameterList",
                "src": "9675:33:39"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9317,
                "name": "ParameterList",
                "src": "9718:0:39"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9318,
                            "name": "Identifier",
                            "src": "9724:7:39"
                          },
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
                              "operator": "==",
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        8910
                                      ],
                                      "referencedDeclaration": 8910,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 9319,
                                    "name": "Identifier",
                                    "src": "9732:7:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9315,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 9320,
                                    "name": "Identifier",
                                    "src": "9740:8:39"
                                  }
                                ],
                                "id": 9321,
                                "name": "FunctionCall",
                                "src": "9732:17:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9313,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 9322,
                                "name": "Identifier",
                                "src": "9753:5:39"
                              }
                            ],
                            "id": 9323,
                            "name": "BinaryOperation",
                            "src": "9732:26:39"
                          }
                        ],
                        "id": 9324,
                        "name": "FunctionCall",
                        "src": "9724:35:39"
                      }
                    ],
                    "id": 9325,
                    "name": "ExpressionStatement",
                    "src": "9724:35:39"
                  },
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
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8831,
                                  "type": "mapping(address => uint256)",
                                  "value": "ownedTokensCount"
                                },
                                "id": 9326,
                                "name": "Identifier",
                                "src": "9765:16:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9313,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 9327,
                                "name": "Identifier",
                                "src": "9782:5:39"
                              }
                            ],
                            "id": 9328,
                            "name": "IndexAccess",
                            "src": "9765:23:39"
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
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sub",
                                  "referencedDeclaration": 8022,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8831,
                                          "type": "mapping(address => uint256)",
                                          "value": "ownedTokensCount"
                                        },
                                        "id": 9329,
                                        "name": "Identifier",
                                        "src": "9791:16:39"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9313,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 9330,
                                        "name": "Identifier",
                                        "src": "9808:5:39"
                                      }
                                    ],
                                    "id": 9331,
                                    "name": "IndexAccess",
                                    "src": "9791:23:39"
                                  }
                                ],
                                "id": 9332,
                                "name": "MemberAccess",
                                "src": "9791:27:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 9333,
                                "name": "Literal",
                                "src": "9819:1:39"
                              }
                            ],
                            "id": 9334,
                            "name": "FunctionCall",
                            "src": "9791:30:39"
                          }
                        ],
                        "id": 9335,
                        "name": "Assignment",
                        "src": "9765:56:39"
                      }
                    ],
                    "id": 9336,
                    "name": "ExpressionStatement",
                    "src": "9765:56:39"
                  },
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8823,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenOwner"
                                },
                                "id": 9337,
                                "name": "Identifier",
                                "src": "9827:10:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9315,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 9338,
                                "name": "Identifier",
                                "src": "9838:8:39"
                              }
                            ],
                            "id": 9339,
                            "name": "IndexAccess",
                            "src": "9827:20:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 9340,
                                "name": "ElementaryTypeNameExpression",
                                "src": "9850:7:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 9341,
                                "name": "Literal",
                                "src": "9858:1:39"
                              }
                            ],
                            "id": 9342,
                            "name": "FunctionCall",
                            "src": "9850:10:39"
                          }
                        ],
                        "id": 9343,
                        "name": "Assignment",
                        "src": "9827:33:39"
                      }
                    ],
                    "id": 9344,
                    "name": "ExpressionStatement",
                    "src": "9827:33:39"
                  }
                ],
                "id": 9345,
                "name": "Block",
                "src": "9718:147:39"
              }
            ],
            "id": 9346,
            "name": "FunctionDefinition",
            "src": "9651:214:39"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "checkAndCallSafeTransfer",
              "payable": false,
              "scope": 9385,
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
                      "name": "_from",
                      "scope": 9384,
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
                        "id": 9347,
                        "name": "ElementaryTypeName",
                        "src": "10402:7:39"
                      }
                    ],
                    "id": 9348,
                    "name": "VariableDeclaration",
                    "src": "10402:13:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9384,
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
                        "id": 9349,
                        "name": "ElementaryTypeName",
                        "src": "10417:7:39"
                      }
                    ],
                    "id": 9350,
                    "name": "VariableDeclaration",
                    "src": "10417:11:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 9384,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9351,
                        "name": "ElementaryTypeName",
                        "src": "10430:7:39"
                      }
                    ],
                    "id": 9352,
                    "name": "VariableDeclaration",
                    "src": "10430:16:39"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 9384,
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
                        "id": 9353,
                        "name": "ElementaryTypeName",
                        "src": "10448:5:39"
                      }
                    ],
                    "id": 9354,
                    "name": "VariableDeclaration",
                    "src": "10448:11:39"
                  }
                ],
                "id": 9355,
                "name": "ParameterList",
                "src": "10401:59:39"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9384,
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
                        "id": 9356,
                        "name": "ElementaryTypeName",
                        "src": "10479:4:39"
                      }
                    ],
                    "id": 9357,
                    "name": "VariableDeclaration",
                    "src": "10479:4:39"
                  }
                ],
                "id": 9358,
                "name": "ParameterList",
                "src": "10478:6:39"
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
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!",
                          "prefix": true,
                          "type": "bool"
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
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isContract",
                                  "referencedDeclaration": 7888,
                                  "type": "function (address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9350,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 9359,
                                    "name": "Identifier",
                                    "src": "10496:3:39"
                                  }
                                ],
                                "id": 9360,
                                "name": "MemberAccess",
                                "src": "10496:14:39"
                              }
                            ],
                            "id": 9361,
                            "name": "FunctionCall",
                            "src": "10496:16:39"
                          }
                        ],
                        "id": 9362,
                        "name": "UnaryOperation",
                        "src": "10495:17:39"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 9358
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 9363,
                                "name": "Literal",
                                "src": "10529:4:39"
                              }
                            ],
                            "id": 9364,
                            "name": "Return",
                            "src": "10522:11:39"
                          }
                        ],
                        "id": 9365,
                        "name": "Block",
                        "src": "10514:26:39"
                      }
                    ],
                    "id": 9366,
                    "name": "IfStatement",
                    "src": "10491:49:39"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        9368
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "retval",
                          "scope": 9384,
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
                            "id": 9367,
                            "name": "ElementaryTypeName",
                            "src": "10545:6:39"
                          }
                        ],
                        "id": 9368,
                        "name": "VariableDeclaration",
                        "src": "10545:13:39"
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
                          "type": "bytes4",
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
                              "member_name": "onERC721Received",
                              "referencedDeclaration": 9401,
                              "type": "function (address,uint256,bytes memory) external returns (bytes4)"
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
                                  "type": "contract ERC721Receiver",
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
                                      "referencedDeclaration": 9402,
                                      "type": "type(contract ERC721Receiver)",
                                      "value": "ERC721Receiver"
                                    },
                                    "id": 9369,
                                    "name": "Identifier",
                                    "src": "10561:14:39"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9350,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 9370,
                                    "name": "Identifier",
                                    "src": "10576:3:39"
                                  }
                                ],
                                "id": 9371,
                                "name": "FunctionCall",
                                "src": "10561:19:39"
                              }
                            ],
                            "id": 9372,
                            "name": "MemberAccess",
                            "src": "10561:36:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9348,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9373,
                            "name": "Identifier",
                            "src": "10598:5:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9352,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 9374,
                            "name": "Identifier",
                            "src": "10605:8:39"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9354,
                              "type": "bytes memory",
                              "value": "_data"
                            },
                            "id": 9375,
                            "name": "Identifier",
                            "src": "10615:5:39"
                          }
                        ],
                        "id": 9376,
                        "name": "FunctionCall",
                        "src": "10561:60:39"
                      }
                    ],
                    "id": 9377,
                    "name": "VariableDeclarationStatement",
                    "src": "10545:76:39"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9358
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
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
                                  "referencedDeclaration": 9368,
                                  "type": "bytes4",
                                  "value": "retval"
                                },
                                "id": 9378,
                                "name": "Identifier",
                                "src": "10635:6:39"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8819,
                                  "type": "bytes4",
                                  "value": "ERC721_RECEIVED"
                                },
                                "id": 9379,
                                "name": "Identifier",
                                "src": "10645:15:39"
                              }
                            ],
                            "id": 9380,
                            "name": "BinaryOperation",
                            "src": "10635:25:39"
                          }
                        ],
                        "id": 9381,
                        "name": "TupleExpression",
                        "src": "10634:27:39"
                      }
                    ],
                    "id": 9382,
                    "name": "Return",
                    "src": "10627:34:39"
                  }
                ],
                "id": 9383,
                "name": "Block",
                "src": "10485:181:39"
              }
            ],
            "id": 9384,
            "name": "FunctionDefinition",
            "src": "10368:298:39"
          }
        ],
        "id": 9385,
        "name": "ContractDefinition",
        "src": "300:10368:39"
      }
    ],
    "id": 9386,
    "name": "SourceUnit",
    "src": "0:10669:39"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:03:31.181Z"
}