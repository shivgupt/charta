export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "who",
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
      "exportedSymbols": {
        "ERC20": [
          5504
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
        "id": 5463,
        "name": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "attributes": {
          "SourceUnit": 5537,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 5505,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5464,
        "name": "ImportDirective",
        "src": "26:26:21"
      },
      {
        "attributes": {
          "contractDependencies": [
            5536
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5504,
            5536
          ],
          "name": "ERC20",
          "scope": 5505
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
                  "name": "ERC20Basic",
                  "referencedDeclaration": 5536,
                  "type": "contract ERC20Basic"
                },
                "id": 5465,
                "name": "UserDefinedTypeName",
                "src": "162:10:21"
              }
            ],
            "id": 5466,
            "name": "InheritanceSpecifier",
            "src": "162:10:21"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 5504,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "owner",
                      "scope": 5475,
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
                        "id": 5467,
                        "name": "ElementaryTypeName",
                        "src": "196:7:21"
                      }
                    ],
                    "id": 5468,
                    "name": "VariableDeclaration",
                    "src": "196:13:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 5475,
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
                        "id": 5469,
                        "name": "ElementaryTypeName",
                        "src": "211:7:21"
                      }
                    ],
                    "id": 5470,
                    "name": "VariableDeclaration",
                    "src": "211:15:21"
                  }
                ],
                "id": 5471,
                "name": "ParameterList",
                "src": "195:32:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5475,
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
                        "id": 5472,
                        "name": "ElementaryTypeName",
                        "src": "249:7:21"
                      }
                    ],
                    "id": 5473,
                    "name": "VariableDeclaration",
                    "src": "249:7:21"
                  }
                ],
                "id": 5474,
                "name": "ParameterList",
                "src": "248:9:21"
              }
            ],
            "id": 5475,
            "name": "FunctionDefinition",
            "src": "177:81:21"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 5504,
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
                      "name": "from",
                      "scope": 5486,
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
                        "id": 5476,
                        "name": "ElementaryTypeName",
                        "src": "283:7:21"
                      }
                    ],
                    "id": 5477,
                    "name": "VariableDeclaration",
                    "src": "283:12:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 5486,
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
                        "id": 5478,
                        "name": "ElementaryTypeName",
                        "src": "297:7:21"
                      }
                    ],
                    "id": 5479,
                    "name": "VariableDeclaration",
                    "src": "297:10:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5486,
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
                        "id": 5480,
                        "name": "ElementaryTypeName",
                        "src": "309:7:21"
                      }
                    ],
                    "id": 5481,
                    "name": "VariableDeclaration",
                    "src": "309:13:21"
                  }
                ],
                "id": 5482,
                "name": "ParameterList",
                "src": "282:41:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5486,
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
                        "id": 5483,
                        "name": "ElementaryTypeName",
                        "src": "340:4:21"
                      }
                    ],
                    "id": 5484,
                    "name": "VariableDeclaration",
                    "src": "340:4:21"
                  }
                ],
                "id": 5485,
                "name": "ParameterList",
                "src": "339:6:21"
              }
            ],
            "id": 5486,
            "name": "FunctionDefinition",
            "src": "261:85:21"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 5504,
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
                      "name": "spender",
                      "scope": 5495,
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
                        "id": 5487,
                        "name": "ElementaryTypeName",
                        "src": "366:7:21"
                      }
                    ],
                    "id": 5488,
                    "name": "VariableDeclaration",
                    "src": "366:15:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5495,
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
                        "id": 5489,
                        "name": "ElementaryTypeName",
                        "src": "383:7:21"
                      }
                    ],
                    "id": 5490,
                    "name": "VariableDeclaration",
                    "src": "383:13:21"
                  }
                ],
                "id": 5491,
                "name": "ParameterList",
                "src": "365:32:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5495,
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
                        "id": 5492,
                        "name": "ElementaryTypeName",
                        "src": "414:4:21"
                      }
                    ],
                    "id": 5493,
                    "name": "VariableDeclaration",
                    "src": "414:4:21"
                  }
                ],
                "id": 5494,
                "name": "ParameterList",
                "src": "413:6:21"
              }
            ],
            "id": 5495,
            "name": "FunctionDefinition",
            "src": "349:71:21"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "owner",
                      "scope": 5503,
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
                        "id": 5496,
                        "name": "ElementaryTypeName",
                        "src": "438:7:21"
                      }
                    ],
                    "id": 5497,
                    "name": "VariableDeclaration",
                    "src": "438:21:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 5503,
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
                        "id": 5498,
                        "name": "ElementaryTypeName",
                        "src": "461:7:21"
                      }
                    ],
                    "id": 5499,
                    "name": "VariableDeclaration",
                    "src": "461:23:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 5503,
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
                        "id": 5500,
                        "name": "ElementaryTypeName",
                        "src": "486:7:21"
                      }
                    ],
                    "id": 5501,
                    "name": "VariableDeclaration",
                    "src": "486:13:21"
                  }
                ],
                "id": 5502,
                "name": "ParameterList",
                "src": "437:63:21"
              }
            ],
            "id": 5503,
            "name": "EventDefinition",
            "src": "423:78:21"
          }
        ],
        "id": 5504,
        "name": "ContractDefinition",
        "src": "144:359:21"
      }
    ],
    "id": 5505,
    "name": "SourceUnit",
    "src": "0:504:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-07T18:02:24.331Z"
}