export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:19:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:19:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          5405
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
        "id": 5309,
        "name": "PragmaDirective",
        "src": "0:24:19"
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
          "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5405
          ],
          "name": "SafeMath",
          "scope": 5406
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mul",
              "payable": false,
              "scope": 5405,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5342,
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
                        "id": 5310,
                        "name": "ElementaryTypeName",
                        "src": "216:7:19"
                      }
                    ],
                    "id": 5311,
                    "name": "VariableDeclaration",
                    "src": "216:9:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5342,
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
                        "id": 5312,
                        "name": "ElementaryTypeName",
                        "src": "227:7:19"
                      }
                    ],
                    "id": 5313,
                    "name": "VariableDeclaration",
                    "src": "227:9:19"
                  }
                ],
                "id": 5314,
                "name": "ParameterList",
                "src": "215:22:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5342,
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
                        "id": 5315,
                        "name": "ElementaryTypeName",
                        "src": "261:7:19"
                      }
                    ],
                    "id": 5316,
                    "name": "VariableDeclaration",
                    "src": "261:7:19"
                  }
                ],
                "id": 5317,
                "name": "ParameterList",
                "src": "260:9:19"
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
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
                              "referencedDeclaration": 5311,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5318,
                            "name": "Identifier",
                            "src": "280:1:19"
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
                            "id": 5319,
                            "name": "Literal",
                            "src": "285:1:19"
                          }
                        ],
                        "id": 5320,
                        "name": "BinaryOperation",
                        "src": "280:6:19"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 5317
                            },
                            "children": [
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
                                "id": 5321,
                                "name": "Literal",
                                "src": "303:1:19"
                              }
                            ],
                            "id": 5322,
                            "name": "Return",
                            "src": "296:8:19"
                          }
                        ],
                        "id": 5323,
                        "name": "Block",
                        "src": "288:23:19"
                      }
                    ],
                    "id": 5324,
                    "name": "IfStatement",
                    "src": "276:35:19"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5326
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5342,
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
                            "id": 5325,
                            "name": "ElementaryTypeName",
                            "src": "316:7:19"
                          }
                        ],
                        "id": 5326,
                        "name": "VariableDeclaration",
                        "src": "316:9:19"
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
                          "operator": "*",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5311,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5327,
                            "name": "Identifier",
                            "src": "328:1:19"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5313,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5328,
                            "name": "Identifier",
                            "src": "332:1:19"
                          }
                        ],
                        "id": 5329,
                        "name": "BinaryOperation",
                        "src": "328:5:19"
                      }
                    ],
                    "id": 5330,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:19"
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
                              "referencedDeclaration": 6697,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5331,
                            "name": "Identifier",
                            "src": "339:6:19"
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
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
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
                                  "operator": "/",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5326,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 5332,
                                    "name": "Identifier",
                                    "src": "346:1:19"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5311,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 5333,
                                    "name": "Identifier",
                                    "src": "350:1:19"
                                  }
                                ],
                                "id": 5334,
                                "name": "BinaryOperation",
                                "src": "346:5:19"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5313,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5335,
                                "name": "Identifier",
                                "src": "355:1:19"
                              }
                            ],
                            "id": 5336,
                            "name": "BinaryOperation",
                            "src": "346:10:19"
                          }
                        ],
                        "id": 5337,
                        "name": "FunctionCall",
                        "src": "339:18:19"
                      }
                    ],
                    "id": 5338,
                    "name": "ExpressionStatement",
                    "src": "339:18:19"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5317
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5326,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5339,
                        "name": "Identifier",
                        "src": "370:1:19"
                      }
                    ],
                    "id": 5340,
                    "name": "Return",
                    "src": "363:8:19"
                  }
                ],
                "id": 5341,
                "name": "Block",
                "src": "270:106:19"
              }
            ],
            "id": 5342,
            "name": "FunctionDefinition",
            "src": "203:173:19"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "div",
              "payable": false,
              "scope": 5405,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5360,
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
                        "id": 5343,
                        "name": "ElementaryTypeName",
                        "src": "471:7:19"
                      }
                    ],
                    "id": 5344,
                    "name": "VariableDeclaration",
                    "src": "471:9:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5360,
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
                        "id": 5345,
                        "name": "ElementaryTypeName",
                        "src": "482:7:19"
                      }
                    ],
                    "id": 5346,
                    "name": "VariableDeclaration",
                    "src": "482:9:19"
                  }
                ],
                "id": 5347,
                "name": "ParameterList",
                "src": "470:22:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5360,
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
                        "id": 5348,
                        "name": "ElementaryTypeName",
                        "src": "516:7:19"
                      }
                    ],
                    "id": 5349,
                    "name": "VariableDeclaration",
                    "src": "516:7:19"
                  }
                ],
                "id": 5350,
                "name": "ParameterList",
                "src": "515:9:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5352
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5360,
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
                            "id": 5351,
                            "name": "ElementaryTypeName",
                            "src": "605:7:19"
                          }
                        ],
                        "id": 5352,
                        "name": "VariableDeclaration",
                        "src": "605:9:19"
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
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5344,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5353,
                            "name": "Identifier",
                            "src": "617:1:19"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5346,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5354,
                            "name": "Identifier",
                            "src": "621:1:19"
                          }
                        ],
                        "id": 5355,
                        "name": "BinaryOperation",
                        "src": "617:5:19"
                      }
                    ],
                    "id": 5356,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:19"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5350
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5352,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5357,
                        "name": "Identifier",
                        "src": "717:1:19"
                      }
                    ],
                    "id": 5358,
                    "name": "Return",
                    "src": "710:8:19"
                  }
                ],
                "id": 5359,
                "name": "Block",
                "src": "525:198:19"
              }
            ],
            "id": 5360,
            "name": "FunctionDefinition",
            "src": "458:265:19"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "sub",
              "payable": false,
              "scope": 5405,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5380,
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
                        "id": 5361,
                        "name": "ElementaryTypeName",
                        "src": "848:7:19"
                      }
                    ],
                    "id": 5362,
                    "name": "VariableDeclaration",
                    "src": "848:9:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5380,
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
                        "id": 5363,
                        "name": "ElementaryTypeName",
                        "src": "859:7:19"
                      }
                    ],
                    "id": 5364,
                    "name": "VariableDeclaration",
                    "src": "859:9:19"
                  }
                ],
                "id": 5365,
                "name": "ParameterList",
                "src": "847:22:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5380,
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
                        "id": 5366,
                        "name": "ElementaryTypeName",
                        "src": "893:7:19"
                      }
                    ],
                    "id": 5367,
                    "name": "VariableDeclaration",
                    "src": "893:7:19"
                  }
                ],
                "id": 5368,
                "name": "ParameterList",
                "src": "892:9:19"
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
                              "referencedDeclaration": 6697,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5369,
                            "name": "Identifier",
                            "src": "908:6:19"
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
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5364,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5370,
                                "name": "Identifier",
                                "src": "915:1:19"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5362,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5371,
                                "name": "Identifier",
                                "src": "920:1:19"
                              }
                            ],
                            "id": 5372,
                            "name": "BinaryOperation",
                            "src": "915:6:19"
                          }
                        ],
                        "id": 5373,
                        "name": "FunctionCall",
                        "src": "908:14:19"
                      }
                    ],
                    "id": 5374,
                    "name": "ExpressionStatement",
                    "src": "908:14:19"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5368
                    },
                    "children": [
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5362,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5375,
                            "name": "Identifier",
                            "src": "935:1:19"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5364,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5376,
                            "name": "Identifier",
                            "src": "939:1:19"
                          }
                        ],
                        "id": 5377,
                        "name": "BinaryOperation",
                        "src": "935:5:19"
                      }
                    ],
                    "id": 5378,
                    "name": "Return",
                    "src": "928:12:19"
                  }
                ],
                "id": 5379,
                "name": "Block",
                "src": "902:43:19"
              }
            ],
            "id": 5380,
            "name": "FunctionDefinition",
            "src": "835:110:19"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "add",
              "payable": false,
              "scope": 5405,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5404,
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
                        "id": 5381,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:19"
                      }
                    ],
                    "id": 5382,
                    "name": "VariableDeclaration",
                    "src": "1020:9:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5404,
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
                        "id": 5383,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:19"
                      }
                    ],
                    "id": 5384,
                    "name": "VariableDeclaration",
                    "src": "1031:9:19"
                  }
                ],
                "id": 5385,
                "name": "ParameterList",
                "src": "1019:22:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5404,
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
                        "id": 5386,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:19"
                      }
                    ],
                    "id": 5387,
                    "name": "VariableDeclaration",
                    "src": "1065:7:19"
                  }
                ],
                "id": 5388,
                "name": "ParameterList",
                "src": "1064:9:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5390
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5404,
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
                            "id": 5389,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:19"
                          }
                        ],
                        "id": 5390,
                        "name": "VariableDeclaration",
                        "src": "1080:9:19"
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
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5382,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5391,
                            "name": "Identifier",
                            "src": "1092:1:19"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5384,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5392,
                            "name": "Identifier",
                            "src": "1096:1:19"
                          }
                        ],
                        "id": 5393,
                        "name": "BinaryOperation",
                        "src": "1092:5:19"
                      }
                    ],
                    "id": 5394,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:19"
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
                              "referencedDeclaration": 6697,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5395,
                            "name": "Identifier",
                            "src": "1103:6:19"
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
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5390,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 5396,
                                "name": "Identifier",
                                "src": "1110:1:19"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5382,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5397,
                                "name": "Identifier",
                                "src": "1115:1:19"
                              }
                            ],
                            "id": 5398,
                            "name": "BinaryOperation",
                            "src": "1110:6:19"
                          }
                        ],
                        "id": 5399,
                        "name": "FunctionCall",
                        "src": "1103:14:19"
                      }
                    ],
                    "id": 5400,
                    "name": "ExpressionStatement",
                    "src": "1103:14:19"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5388
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5390,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5401,
                        "name": "Identifier",
                        "src": "1130:1:19"
                      }
                    ],
                    "id": 5402,
                    "name": "Return",
                    "src": "1123:8:19"
                  }
                ],
                "id": 5403,
                "name": "Block",
                "src": "1074:62:19"
              }
            ],
            "id": 5404,
            "name": "FunctionDefinition",
            "src": "1007:129:19"
          }
        ],
        "id": 5405,
        "name": "ContractDefinition",
        "src": "117:1021:19"
      }
    ],
    "id": 5406,
    "name": "SourceUnit",
    "src": "0:1139:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-07T18:02:24.330Z"
}