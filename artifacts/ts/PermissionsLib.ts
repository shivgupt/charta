export const PermissionsLib = 
{
  "contractName": "PermissionsLib",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a72305820c354ce7b74c3d2f71d288e1e04a33cbf1ca35c1d7dcdd13bafeacebea2bedd460029",
  "sourceMap": "610:2090:11:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "610:2090:11:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\nlibrary PermissionsLib {\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(Permissions storage self, address agent)\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n    }\n\n    function revokeAuthorization(Permissions storage self, address agent)\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
      "exportedSymbols": {
        "PermissionsLib": [
          4031
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
        "id": 3853,
        "name": "PragmaDirective",
        "src": "584:23:11"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            4031
          ],
          "name": "PermissionsLib",
          "scope": 4032
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "PermissionsLib.Permissions",
              "name": "Permissions",
              "scope": 4031,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "authorized",
                  "scope": 3865,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "mapping(address => bool)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
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
                        "id": 3854,
                        "name": "ElementaryTypeName",
                        "src": "677:7:11"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 3855,
                        "name": "ElementaryTypeName",
                        "src": "688:4:11"
                      }
                    ],
                    "id": 3856,
                    "name": "Mapping",
                    "src": "668:25:11"
                  }
                ],
                "id": 3857,
                "name": "VariableDeclaration",
                "src": "668:36:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "agentToIndex",
                  "scope": 3865,
                  "stateVariable": false,
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
                        "id": 3858,
                        "name": "ElementaryTypeName",
                        "src": "723:7:11"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3859,
                        "name": "ElementaryTypeName",
                        "src": "734:4:11"
                      }
                    ],
                    "id": 3860,
                    "name": "Mapping",
                    "src": "714:25:11"
                  }
                ],
                "id": 3861,
                "name": "VariableDeclaration",
                "src": "714:38:11"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "authorizedAgents",
                  "scope": 3865,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address[] storage pointer",
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
                        "id": 3862,
                        "name": "ElementaryTypeName",
                        "src": "786:7:11"
                      }
                    ],
                    "id": 3863,
                    "name": "ArrayTypeName",
                    "src": "786:9:11"
                  }
                ],
                "id": 3864,
                "name": "VariableDeclaration",
                "src": "786:26:11"
              }
            ],
            "id": 3865,
            "name": "StructDefinition",
            "src": "639:180:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "authorize",
              "payable": false,
              "scope": 4031,
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
                      "name": "self",
                      "scope": 3908,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3865,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3866,
                        "name": "UserDefinedTypeName",
                        "src": "844:11:11"
                      }
                    ],
                    "id": 3867,
                    "name": "VariableDeclaration",
                    "src": "844:24:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3908,
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
                        "id": 3868,
                        "name": "ElementaryTypeName",
                        "src": "870:7:11"
                      }
                    ],
                    "id": 3869,
                    "name": "VariableDeclaration",
                    "src": "870:13:11"
                  }
                ],
                "id": 3870,
                "name": "ParameterList",
                "src": "843:41:11"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3871,
                "name": "ParameterList",
                "src": "906:0:11"
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
                            "id": 3872,
                            "name": "Identifier",
                            "src": "916:7:11"
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
                                      "typeIdentifier": "t_struct$_Permissions_$3865_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4018,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isNotAuthorized"
                                },
                                "id": 3873,
                                "name": "Identifier",
                                "src": "924:15:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3867,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3874,
                                "name": "Identifier",
                                "src": "940:4:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3869,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3875,
                                "name": "Identifier",
                                "src": "946:5:11"
                              }
                            ],
                            "id": 3876,
                            "name": "FunctionCall",
                            "src": "924:28:11"
                          }
                        ],
                        "id": 3877,
                        "name": "FunctionCall",
                        "src": "916:37:11"
                      }
                    ],
                    "id": 3878,
                    "name": "ExpressionStatement",
                    "src": "916:37:11"
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
                                  "member_name": "authorized",
                                  "referencedDeclaration": 3857,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3867,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3879,
                                    "name": "Identifier",
                                    "src": "964:4:11"
                                  }
                                ],
                                "id": 3882,
                                "name": "MemberAccess",
                                "src": "964:15:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3869,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3881,
                                "name": "Identifier",
                                "src": "980:5:11"
                              }
                            ],
                            "id": 3883,
                            "name": "IndexAccess",
                            "src": "964:22:11"
                          },
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
                            "id": 3884,
                            "name": "Literal",
                            "src": "989:4:11"
                          }
                        ],
                        "id": 3885,
                        "name": "Assignment",
                        "src": "964:29:11"
                      }
                    ],
                    "id": 3886,
                    "name": "ExpressionStatement",
                    "src": "964:29:11"
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
                          "type": "uint256",
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
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (address) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3864,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3867,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3887,
                                    "name": "Identifier",
                                    "src": "1003:4:11"
                                  }
                                ],
                                "id": 3890,
                                "name": "MemberAccess",
                                "src": "1003:21:11"
                              }
                            ],
                            "id": 3891,
                            "name": "MemberAccess",
                            "src": "1003:26:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3869,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3892,
                            "name": "Identifier",
                            "src": "1030:5:11"
                          }
                        ],
                        "id": 3893,
                        "name": "FunctionCall",
                        "src": "1003:33:11"
                      }
                    ],
                    "id": 3894,
                    "name": "ExpressionStatement",
                    "src": "1003:33:11"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 3861,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3867,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3895,
                                    "name": "Identifier",
                                    "src": "1046:4:11"
                                  }
                                ],
                                "id": 3898,
                                "name": "MemberAccess",
                                "src": "1046:17:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3869,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3897,
                                "name": "Identifier",
                                "src": "1064:5:11"
                              }
                            ],
                            "id": 3899,
                            "name": "IndexAccess",
                            "src": "1046:24:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "-",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "authorizedAgents",
                                      "referencedDeclaration": 3864,
                                      "type": "address[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3867,
                                          "type": "struct PermissionsLib.Permissions storage pointer",
                                          "value": "self"
                                        },
                                        "id": 3900,
                                        "name": "Identifier",
                                        "src": "1073:4:11"
                                      }
                                    ],
                                    "id": 3901,
                                    "name": "MemberAccess",
                                    "src": "1073:21:11"
                                  }
                                ],
                                "id": 3902,
                                "name": "MemberAccess",
                                "src": "1073:28:11"
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
                                "id": 3903,
                                "name": "Literal",
                                "src": "1104:1:11"
                              }
                            ],
                            "id": 3904,
                            "name": "BinaryOperation",
                            "src": "1073:32:11"
                          }
                        ],
                        "id": 3905,
                        "name": "Assignment",
                        "src": "1046:59:11"
                      }
                    ],
                    "id": 3906,
                    "name": "ExpressionStatement",
                    "src": "1046:59:11"
                  }
                ],
                "id": 3907,
                "name": "Block",
                "src": "906:206:11"
              }
            ],
            "id": 3908,
            "name": "FunctionDefinition",
            "src": "825:287:11"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "revokeAuthorization",
              "payable": false,
              "scope": 4031,
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
                      "name": "self",
                      "scope": 3987,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3865,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3909,
                        "name": "UserDefinedTypeName",
                        "src": "1147:11:11"
                      }
                    ],
                    "id": 3910,
                    "name": "VariableDeclaration",
                    "src": "1147:24:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 3987,
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
                        "id": 3911,
                        "name": "ElementaryTypeName",
                        "src": "1173:7:11"
                      }
                    ],
                    "id": 3912,
                    "name": "VariableDeclaration",
                    "src": "1173:13:11"
                  }
                ],
                "id": 3913,
                "name": "ParameterList",
                "src": "1146:41:11"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3914,
                "name": "ParameterList",
                "src": "1209:0:11"
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
                            "id": 3915,
                            "name": "Identifier",
                            "src": "1388:7:11"
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
                                      "typeIdentifier": "t_struct$_Permissions_$3865_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4002,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 3916,
                                "name": "Identifier",
                                "src": "1396:12:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3910,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3917,
                                "name": "Identifier",
                                "src": "1409:4:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3912,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3918,
                                "name": "Identifier",
                                "src": "1415:5:11"
                              }
                            ],
                            "id": 3919,
                            "name": "FunctionCall",
                            "src": "1396:25:11"
                          }
                        ],
                        "id": 3920,
                        "name": "FunctionCall",
                        "src": "1388:34:11"
                      }
                    ],
                    "id": 3921,
                    "name": "ExpressionStatement",
                    "src": "1388:34:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3923
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToRevoke",
                          "scope": 3987,
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
                            "id": 3922,
                            "name": "ElementaryTypeName",
                            "src": "1433:4:11"
                          }
                        ],
                        "id": 3923,
                        "name": "VariableDeclaration",
                        "src": "1433:25:11"
                      },
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "agentToIndex",
                              "referencedDeclaration": 3861,
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3910,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3924,
                                "name": "Identifier",
                                "src": "1461:4:11"
                              }
                            ],
                            "id": 3925,
                            "name": "MemberAccess",
                            "src": "1461:17:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3912,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3926,
                            "name": "Identifier",
                            "src": "1479:5:11"
                          }
                        ],
                        "id": 3927,
                        "name": "IndexAccess",
                        "src": "1461:24:11"
                      }
                    ],
                    "id": 3928,
                    "name": "VariableDeclarationStatement",
                    "src": "1433:52:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3930
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "indexOfAgentToMove",
                          "scope": 3987,
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
                            "id": 3929,
                            "name": "ElementaryTypeName",
                            "src": "1495:4:11"
                          }
                        ],
                        "id": 3930,
                        "name": "VariableDeclaration",
                        "src": "1495:23:11"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3864,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3910,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3931,
                                    "name": "Identifier",
                                    "src": "1521:4:11"
                                  }
                                ],
                                "id": 3932,
                                "name": "MemberAccess",
                                "src": "1521:21:11"
                              }
                            ],
                            "id": 3933,
                            "name": "MemberAccess",
                            "src": "1521:28:11"
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
                            "id": 3934,
                            "name": "Literal",
                            "src": "1552:1:11"
                          }
                        ],
                        "id": 3935,
                        "name": "BinaryOperation",
                        "src": "1521:32:11"
                      }
                    ],
                    "id": 3936,
                    "name": "VariableDeclarationStatement",
                    "src": "1495:58:11"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3938
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "agentToMove",
                          "scope": 3987,
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
                            "id": 3937,
                            "name": "ElementaryTypeName",
                            "src": "1563:7:11"
                          }
                        ],
                        "id": 3938,
                        "name": "VariableDeclaration",
                        "src": "1563:19:11"
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorizedAgents",
                              "referencedDeclaration": 3864,
                              "type": "address[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3910,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3939,
                                "name": "Identifier",
                                "src": "1585:4:11"
                              }
                            ],
                            "id": 3940,
                            "name": "MemberAccess",
                            "src": "1585:21:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3930,
                              "type": "uint256",
                              "value": "indexOfAgentToMove"
                            },
                            "id": 3941,
                            "name": "Identifier",
                            "src": "1607:18:11"
                          }
                        ],
                        "id": 3942,
                        "name": "IndexAccess",
                        "src": "1585:41:11"
                      }
                    ],
                    "id": 3943,
                    "name": "VariableDeclarationStatement",
                    "src": "1563:63:11"
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
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
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
                                  "member_name": "authorized",
                                  "referencedDeclaration": 3857,
                                  "type": "mapping(address => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3910,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3944,
                                    "name": "Identifier",
                                    "src": "1689:4:11"
                                  }
                                ],
                                "id": 3945,
                                "name": "MemberAccess",
                                "src": "1689:15:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3912,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3946,
                                "name": "Identifier",
                                "src": "1705:5:11"
                              }
                            ],
                            "id": 3947,
                            "name": "IndexAccess",
                            "src": "1689:22:11"
                          }
                        ],
                        "id": 3948,
                        "name": "UnaryOperation",
                        "src": "1682:29:11"
                      }
                    ],
                    "id": 3949,
                    "name": "ExpressionStatement",
                    "src": "1682:29:11"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3864,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3910,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3950,
                                    "name": "Identifier",
                                    "src": "1792:4:11"
                                  }
                                ],
                                "id": 3953,
                                "name": "MemberAccess",
                                "src": "1792:21:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3923,
                                  "type": "uint256",
                                  "value": "indexOfAgentToRevoke"
                                },
                                "id": 3952,
                                "name": "Identifier",
                                "src": "1814:20:11"
                              }
                            ],
                            "id": 3954,
                            "name": "IndexAccess",
                            "src": "1792:43:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3938,
                              "type": "address",
                              "value": "agentToMove"
                            },
                            "id": 3955,
                            "name": "Identifier",
                            "src": "1838:11:11"
                          }
                        ],
                        "id": 3956,
                        "name": "Assignment",
                        "src": "1792:57:11"
                      }
                    ],
                    "id": 3957,
                    "name": "ExpressionStatement",
                    "src": "1792:57:11"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 3861,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3910,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3958,
                                    "name": "Identifier",
                                    "src": "1920:4:11"
                                  }
                                ],
                                "id": 3961,
                                "name": "MemberAccess",
                                "src": "1920:17:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3938,
                                  "type": "address",
                                  "value": "agentToMove"
                                },
                                "id": 3960,
                                "name": "Identifier",
                                "src": "1938:11:11"
                              }
                            ],
                            "id": 3962,
                            "name": "IndexAccess",
                            "src": "1920:30:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3923,
                              "type": "uint256",
                              "value": "indexOfAgentToRevoke"
                            },
                            "id": 3963,
                            "name": "Identifier",
                            "src": "1953:20:11"
                          }
                        ],
                        "id": 3964,
                        "name": "Assignment",
                        "src": "1920:53:11"
                      }
                    ],
                    "id": 3965,
                    "name": "ExpressionStatement",
                    "src": "1920:53:11"
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
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "agentToIndex",
                                  "referencedDeclaration": 3861,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3910,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3966,
                                    "name": "Identifier",
                                    "src": "1990:4:11"
                                  }
                                ],
                                "id": 3967,
                                "name": "MemberAccess",
                                "src": "1990:17:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3912,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 3968,
                                "name": "Identifier",
                                "src": "2008:5:11"
                              }
                            ],
                            "id": 3969,
                            "name": "IndexAccess",
                            "src": "1990:24:11"
                          }
                        ],
                        "id": 3970,
                        "name": "UnaryOperation",
                        "src": "1983:31:11"
                      }
                    ],
                    "id": 3971,
                    "name": "ExpressionStatement",
                    "src": "1983:31:11"
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
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3864,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3910,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3972,
                                    "name": "Identifier",
                                    "src": "2088:4:11"
                                  }
                                ],
                                "id": 3973,
                                "name": "MemberAccess",
                                "src": "2088:21:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3930,
                                  "type": "uint256",
                                  "value": "indexOfAgentToMove"
                                },
                                "id": 3974,
                                "name": "Identifier",
                                "src": "2110:18:11"
                              }
                            ],
                            "id": 3975,
                            "name": "IndexAccess",
                            "src": "2088:41:11"
                          }
                        ],
                        "id": 3976,
                        "name": "UnaryOperation",
                        "src": "2081:48:11"
                      }
                    ],
                    "id": 3977,
                    "name": "ExpressionStatement",
                    "src": "2081:48:11"
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
                          "operator": "-=",
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
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "authorizedAgents",
                                  "referencedDeclaration": 3864,
                                  "type": "address[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3910,
                                      "type": "struct PermissionsLib.Permissions storage pointer",
                                      "value": "self"
                                    },
                                    "id": 3978,
                                    "name": "Identifier",
                                    "src": "2139:4:11"
                                  }
                                ],
                                "id": 3981,
                                "name": "MemberAccess",
                                "src": "2139:21:11"
                              }
                            ],
                            "id": 3982,
                            "name": "MemberAccess",
                            "src": "2139:28:11"
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
                            "id": 3983,
                            "name": "Literal",
                            "src": "2171:1:11"
                          }
                        ],
                        "id": 3984,
                        "name": "Assignment",
                        "src": "2139:33:11"
                      }
                    ],
                    "id": 3985,
                    "name": "ExpressionStatement",
                    "src": "2139:33:11"
                  }
                ],
                "id": 3986,
                "name": "Block",
                "src": "1209:970:11"
              }
            ],
            "id": 3987,
            "name": "FunctionDefinition",
            "src": "1118:1061:11"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuthorized",
              "payable": false,
              "scope": 4031,
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
                      "name": "self",
                      "scope": 4002,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3865,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 3988,
                        "name": "UserDefinedTypeName",
                        "src": "2207:11:11"
                      }
                    ],
                    "id": 3989,
                    "name": "VariableDeclaration",
                    "src": "2207:24:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4002,
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
                        "id": 3990,
                        "name": "ElementaryTypeName",
                        "src": "2233:7:11"
                      }
                    ],
                    "id": 3991,
                    "name": "VariableDeclaration",
                    "src": "2233:13:11"
                  }
                ],
                "id": 3992,
                "name": "ParameterList",
                "src": "2206:41:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4002,
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
                        "id": 3993,
                        "name": "ElementaryTypeName",
                        "src": "2295:4:11"
                      }
                    ],
                    "id": 3994,
                    "name": "VariableDeclaration",
                    "src": "2295:4:11"
                  }
                ],
                "id": 3995,
                "name": "ParameterList",
                "src": "2294:6:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3995
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
                              "member_name": "authorized",
                              "referencedDeclaration": 3857,
                              "type": "mapping(address => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3989,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 3996,
                                "name": "Identifier",
                                "src": "2322:4:11"
                              }
                            ],
                            "id": 3997,
                            "name": "MemberAccess",
                            "src": "2322:15:11"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3991,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 3998,
                            "name": "Identifier",
                            "src": "2338:5:11"
                          }
                        ],
                        "id": 3999,
                        "name": "IndexAccess",
                        "src": "2322:22:11"
                      }
                    ],
                    "id": 4000,
                    "name": "Return",
                    "src": "2315:29:11"
                  }
                ],
                "id": 4001,
                "name": "Block",
                "src": "2305:46:11"
              }
            ],
            "id": 4002,
            "name": "FunctionDefinition",
            "src": "2185:166:11"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isNotAuthorized",
              "payable": false,
              "scope": 4031,
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
                      "name": "self",
                      "scope": 4018,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3865,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4003,
                        "name": "UserDefinedTypeName",
                        "src": "2382:11:11"
                      }
                    ],
                    "id": 4004,
                    "name": "VariableDeclaration",
                    "src": "2382:24:11"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agent",
                      "scope": 4018,
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
                        "id": 4005,
                        "name": "ElementaryTypeName",
                        "src": "2408:7:11"
                      }
                    ],
                    "id": 4006,
                    "name": "VariableDeclaration",
                    "src": "2408:13:11"
                  }
                ],
                "id": 4007,
                "name": "ParameterList",
                "src": "2381:41:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4018,
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
                        "id": 4008,
                        "name": "ElementaryTypeName",
                        "src": "2470:4:11"
                      }
                    ],
                    "id": 4009,
                    "name": "VariableDeclaration",
                    "src": "2470:4:11"
                  }
                ],
                "id": 4010,
                "name": "ParameterList",
                "src": "2469:6:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4010
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
                                      "typeIdentifier": "t_struct$_Permissions_$3865_storage_ptr",
                                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4002,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)",
                                  "value": "isAuthorized"
                                },
                                "id": 4011,
                                "name": "Identifier",
                                "src": "2498:12:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4004,
                                  "type": "struct PermissionsLib.Permissions storage pointer",
                                  "value": "self"
                                },
                                "id": 4012,
                                "name": "Identifier",
                                "src": "2511:4:11"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4006,
                                  "type": "address",
                                  "value": "agent"
                                },
                                "id": 4013,
                                "name": "Identifier",
                                "src": "2517:5:11"
                              }
                            ],
                            "id": 4014,
                            "name": "FunctionCall",
                            "src": "2498:25:11"
                          }
                        ],
                        "id": 4015,
                        "name": "UnaryOperation",
                        "src": "2497:26:11"
                      }
                    ],
                    "id": 4016,
                    "name": "Return",
                    "src": "2490:33:11"
                  }
                ],
                "id": 4017,
                "name": "Block",
                "src": "2480:50:11"
              }
            ],
            "id": 4018,
            "name": "FunctionDefinition",
            "src": "2357:173:11"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedAgents",
              "payable": false,
              "scope": 4031,
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
                      "name": "self",
                      "scope": 4030,
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "type": "struct PermissionsLib.Permissions storage pointer",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Permissions",
                          "referencedDeclaration": 3865,
                          "type": "struct PermissionsLib.Permissions storage pointer"
                        },
                        "id": 4019,
                        "name": "UserDefinedTypeName",
                        "src": "2565:11:11"
                      }
                    ],
                    "id": 4020,
                    "name": "VariableDeclaration",
                    "src": "2565:24:11"
                  }
                ],
                "id": 4021,
                "name": "ParameterList",
                "src": "2564:26:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4030,
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
                            "id": 4022,
                            "name": "ElementaryTypeName",
                            "src": "2638:7:11"
                          }
                        ],
                        "id": 4023,
                        "name": "ArrayTypeName",
                        "src": "2638:9:11"
                      }
                    ],
                    "id": 4024,
                    "name": "VariableDeclaration",
                    "src": "2638:9:11"
                  }
                ],
                "id": 4025,
                "name": "ParameterList",
                "src": "2637:11:11"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4025
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "authorizedAgents",
                          "referencedDeclaration": 3864,
                          "type": "address[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4020,
                              "type": "struct PermissionsLib.Permissions storage pointer",
                              "value": "self"
                            },
                            "id": 4026,
                            "name": "Identifier",
                            "src": "2670:4:11"
                          }
                        ],
                        "id": 4027,
                        "name": "MemberAccess",
                        "src": "2670:21:11"
                      }
                    ],
                    "id": 4028,
                    "name": "Return",
                    "src": "2663:28:11"
                  }
                ],
                "id": 4029,
                "name": "Block",
                "src": "2653:45:11"
              }
            ],
            "id": 4030,
            "name": "FunctionDefinition",
            "src": "2536:162:11"
          }
        ],
        "id": 4031,
        "name": "ContractDefinition",
        "src": "610:2090:11"
      }
    ],
    "id": 4032,
    "name": "SourceUnit",
    "src": "584:2117:11"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x9bafc073db4c1c8a1a3c9e89391f9de6b5076320"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xc13d026d7e4e6c2864240aa1f26bb436c6271338"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-07T18:04:41.216Z"
}