export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058207e5c56aa9a56d72ec3a12fa314c290f06a91296db137205626beb89689b737a00029",
  "sourceMap": "117:1021:29:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1021:29:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          8047
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
        "id": 7951,
        "name": "PragmaDirective",
        "src": "0:24:29"
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
            8047
          ],
          "name": "SafeMath",
          "scope": 8048
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
              "scope": 8047,
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
                      "scope": 7984,
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
                        "id": 7952,
                        "name": "ElementaryTypeName",
                        "src": "216:7:29"
                      }
                    ],
                    "id": 7953,
                    "name": "VariableDeclaration",
                    "src": "216:9:29"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7984,
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
                        "id": 7954,
                        "name": "ElementaryTypeName",
                        "src": "227:7:29"
                      }
                    ],
                    "id": 7955,
                    "name": "VariableDeclaration",
                    "src": "227:9:29"
                  }
                ],
                "id": 7956,
                "name": "ParameterList",
                "src": "215:22:29"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7984,
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
                        "id": 7957,
                        "name": "ElementaryTypeName",
                        "src": "261:7:29"
                      }
                    ],
                    "id": 7958,
                    "name": "VariableDeclaration",
                    "src": "261:7:29"
                  }
                ],
                "id": 7959,
                "name": "ParameterList",
                "src": "260:9:29"
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
                              "referencedDeclaration": 7953,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 7960,
                            "name": "Identifier",
                            "src": "280:1:29"
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
                            "id": 7961,
                            "name": "Literal",
                            "src": "285:1:29"
                          }
                        ],
                        "id": 7962,
                        "name": "BinaryOperation",
                        "src": "280:6:29"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 7959
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
                                "id": 7963,
                                "name": "Literal",
                                "src": "303:1:29"
                              }
                            ],
                            "id": 7964,
                            "name": "Return",
                            "src": "296:8:29"
                          }
                        ],
                        "id": 7965,
                        "name": "Block",
                        "src": "288:23:29"
                      }
                    ],
                    "id": 7966,
                    "name": "IfStatement",
                    "src": "276:35:29"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        7968
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 7984,
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
                            "id": 7967,
                            "name": "ElementaryTypeName",
                            "src": "316:7:29"
                          }
                        ],
                        "id": 7968,
                        "name": "VariableDeclaration",
                        "src": "316:9:29"
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
                              "referencedDeclaration": 7953,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 7969,
                            "name": "Identifier",
                            "src": "328:1:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7955,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 7970,
                            "name": "Identifier",
                            "src": "332:1:29"
                          }
                        ],
                        "id": 7971,
                        "name": "BinaryOperation",
                        "src": "328:5:29"
                      }
                    ],
                    "id": 7972,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:29"
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
                              "referencedDeclaration": 9776,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 7973,
                            "name": "Identifier",
                            "src": "339:6:29"
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
                                      "referencedDeclaration": 7968,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 7974,
                                    "name": "Identifier",
                                    "src": "346:1:29"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7953,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 7975,
                                    "name": "Identifier",
                                    "src": "350:1:29"
                                  }
                                ],
                                "id": 7976,
                                "name": "BinaryOperation",
                                "src": "346:5:29"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7955,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 7977,
                                "name": "Identifier",
                                "src": "355:1:29"
                              }
                            ],
                            "id": 7978,
                            "name": "BinaryOperation",
                            "src": "346:10:29"
                          }
                        ],
                        "id": 7979,
                        "name": "FunctionCall",
                        "src": "339:18:29"
                      }
                    ],
                    "id": 7980,
                    "name": "ExpressionStatement",
                    "src": "339:18:29"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7959
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 7968,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 7981,
                        "name": "Identifier",
                        "src": "370:1:29"
                      }
                    ],
                    "id": 7982,
                    "name": "Return",
                    "src": "363:8:29"
                  }
                ],
                "id": 7983,
                "name": "Block",
                "src": "270:106:29"
              }
            ],
            "id": 7984,
            "name": "FunctionDefinition",
            "src": "203:173:29"
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
              "scope": 8047,
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
                      "scope": 8002,
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
                        "id": 7985,
                        "name": "ElementaryTypeName",
                        "src": "471:7:29"
                      }
                    ],
                    "id": 7986,
                    "name": "VariableDeclaration",
                    "src": "471:9:29"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8002,
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
                        "id": 7987,
                        "name": "ElementaryTypeName",
                        "src": "482:7:29"
                      }
                    ],
                    "id": 7988,
                    "name": "VariableDeclaration",
                    "src": "482:9:29"
                  }
                ],
                "id": 7989,
                "name": "ParameterList",
                "src": "470:22:29"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8002,
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
                        "id": 7990,
                        "name": "ElementaryTypeName",
                        "src": "516:7:29"
                      }
                    ],
                    "id": 7991,
                    "name": "VariableDeclaration",
                    "src": "516:7:29"
                  }
                ],
                "id": 7992,
                "name": "ParameterList",
                "src": "515:9:29"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7994
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 8002,
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
                            "id": 7993,
                            "name": "ElementaryTypeName",
                            "src": "605:7:29"
                          }
                        ],
                        "id": 7994,
                        "name": "VariableDeclaration",
                        "src": "605:9:29"
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
                              "referencedDeclaration": 7986,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 7995,
                            "name": "Identifier",
                            "src": "617:1:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7988,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 7996,
                            "name": "Identifier",
                            "src": "621:1:29"
                          }
                        ],
                        "id": 7997,
                        "name": "BinaryOperation",
                        "src": "617:5:29"
                      }
                    ],
                    "id": 7998,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:29"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7992
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 7994,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 7999,
                        "name": "Identifier",
                        "src": "717:1:29"
                      }
                    ],
                    "id": 8000,
                    "name": "Return",
                    "src": "710:8:29"
                  }
                ],
                "id": 8001,
                "name": "Block",
                "src": "525:198:29"
              }
            ],
            "id": 8002,
            "name": "FunctionDefinition",
            "src": "458:265:29"
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
              "scope": 8047,
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
                      "scope": 8022,
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
                        "id": 8003,
                        "name": "ElementaryTypeName",
                        "src": "848:7:29"
                      }
                    ],
                    "id": 8004,
                    "name": "VariableDeclaration",
                    "src": "848:9:29"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8022,
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
                        "id": 8005,
                        "name": "ElementaryTypeName",
                        "src": "859:7:29"
                      }
                    ],
                    "id": 8006,
                    "name": "VariableDeclaration",
                    "src": "859:9:29"
                  }
                ],
                "id": 8007,
                "name": "ParameterList",
                "src": "847:22:29"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8022,
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
                        "id": 8008,
                        "name": "ElementaryTypeName",
                        "src": "893:7:29"
                      }
                    ],
                    "id": 8009,
                    "name": "VariableDeclaration",
                    "src": "893:7:29"
                  }
                ],
                "id": 8010,
                "name": "ParameterList",
                "src": "892:9:29"
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
                              "referencedDeclaration": 9776,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 8011,
                            "name": "Identifier",
                            "src": "908:6:29"
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
                                  "referencedDeclaration": 8006,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 8012,
                                "name": "Identifier",
                                "src": "915:1:29"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8004,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 8013,
                                "name": "Identifier",
                                "src": "920:1:29"
                              }
                            ],
                            "id": 8014,
                            "name": "BinaryOperation",
                            "src": "915:6:29"
                          }
                        ],
                        "id": 8015,
                        "name": "FunctionCall",
                        "src": "908:14:29"
                      }
                    ],
                    "id": 8016,
                    "name": "ExpressionStatement",
                    "src": "908:14:29"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8010
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
                              "referencedDeclaration": 8004,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8017,
                            "name": "Identifier",
                            "src": "935:1:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8006,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8018,
                            "name": "Identifier",
                            "src": "939:1:29"
                          }
                        ],
                        "id": 8019,
                        "name": "BinaryOperation",
                        "src": "935:5:29"
                      }
                    ],
                    "id": 8020,
                    "name": "Return",
                    "src": "928:12:29"
                  }
                ],
                "id": 8021,
                "name": "Block",
                "src": "902:43:29"
              }
            ],
            "id": 8022,
            "name": "FunctionDefinition",
            "src": "835:110:29"
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
              "scope": 8047,
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
                      "scope": 8046,
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
                        "id": 8023,
                        "name": "ElementaryTypeName",
                        "src": "1020:7:29"
                      }
                    ],
                    "id": 8024,
                    "name": "VariableDeclaration",
                    "src": "1020:9:29"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 8046,
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
                        "id": 8025,
                        "name": "ElementaryTypeName",
                        "src": "1031:7:29"
                      }
                    ],
                    "id": 8026,
                    "name": "VariableDeclaration",
                    "src": "1031:9:29"
                  }
                ],
                "id": 8027,
                "name": "ParameterList",
                "src": "1019:22:29"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8046,
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
                        "id": 8028,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:29"
                      }
                    ],
                    "id": 8029,
                    "name": "VariableDeclaration",
                    "src": "1065:7:29"
                  }
                ],
                "id": 8030,
                "name": "ParameterList",
                "src": "1064:9:29"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        8032
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 8046,
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
                            "id": 8031,
                            "name": "ElementaryTypeName",
                            "src": "1080:7:29"
                          }
                        ],
                        "id": 8032,
                        "name": "VariableDeclaration",
                        "src": "1080:9:29"
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
                              "referencedDeclaration": 8024,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 8033,
                            "name": "Identifier",
                            "src": "1092:1:29"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8026,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 8034,
                            "name": "Identifier",
                            "src": "1096:1:29"
                          }
                        ],
                        "id": 8035,
                        "name": "BinaryOperation",
                        "src": "1092:5:29"
                      }
                    ],
                    "id": 8036,
                    "name": "VariableDeclarationStatement",
                    "src": "1080:17:29"
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
                              "referencedDeclaration": 9776,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 8037,
                            "name": "Identifier",
                            "src": "1103:6:29"
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
                                  "referencedDeclaration": 8032,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 8038,
                                "name": "Identifier",
                                "src": "1110:1:29"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8024,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 8039,
                                "name": "Identifier",
                                "src": "1115:1:29"
                              }
                            ],
                            "id": 8040,
                            "name": "BinaryOperation",
                            "src": "1110:6:29"
                          }
                        ],
                        "id": 8041,
                        "name": "FunctionCall",
                        "src": "1103:14:29"
                      }
                    ],
                    "id": 8042,
                    "name": "ExpressionStatement",
                    "src": "1103:14:29"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8030
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8032,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 8043,
                        "name": "Identifier",
                        "src": "1130:1:29"
                      }
                    ],
                    "id": 8044,
                    "name": "Return",
                    "src": "1123:8:29"
                  }
                ],
                "id": 8045,
                "name": "Block",
                "src": "1074:62:29"
              }
            ],
            "id": 8046,
            "name": "FunctionDefinition",
            "src": "1007:129:29"
          }
        ],
        "id": 8047,
        "name": "ContractDefinition",
        "src": "117:1021:29"
      }
    ],
    "id": 8048,
    "name": "SourceUnit",
    "src": "0:1139:29"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:03:31.167Z"
}