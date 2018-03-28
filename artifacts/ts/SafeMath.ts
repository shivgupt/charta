export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "sourceMap": "117:1022:10:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1022:10:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          2600
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
        "id": 2504,
        "name": "PragmaDirective",
        "src": "0:24:10"
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
            2600
          ],
          "name": "SafeMath",
          "scope": 2601
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
              "scope": 2600,
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
                      "scope": 2537,
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
                        "id": 2505,
                        "name": "ElementaryTypeName",
                        "src": "216:7:10"
                      }
                    ],
                    "id": 2506,
                    "name": "VariableDeclaration",
                    "src": "216:9:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 2537,
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
                        "id": 2507,
                        "name": "ElementaryTypeName",
                        "src": "227:7:10"
                      }
                    ],
                    "id": 2508,
                    "name": "VariableDeclaration",
                    "src": "227:9:10"
                  }
                ],
                "id": 2509,
                "name": "ParameterList",
                "src": "215:22:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2537,
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
                        "id": 2510,
                        "name": "ElementaryTypeName",
                        "src": "261:7:10"
                      }
                    ],
                    "id": 2511,
                    "name": "VariableDeclaration",
                    "src": "261:7:10"
                  }
                ],
                "id": 2512,
                "name": "ParameterList",
                "src": "260:9:10"
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
                              "referencedDeclaration": 2506,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2513,
                            "name": "Identifier",
                            "src": "280:1:10"
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
                            "id": 2514,
                            "name": "Literal",
                            "src": "285:1:10"
                          }
                        ],
                        "id": 2515,
                        "name": "BinaryOperation",
                        "src": "280:6:10"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 2512
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
                                "id": 2516,
                                "name": "Literal",
                                "src": "303:1:10"
                              }
                            ],
                            "id": 2517,
                            "name": "Return",
                            "src": "296:8:10"
                          }
                        ],
                        "id": 2518,
                        "name": "Block",
                        "src": "288:23:10"
                      }
                    ],
                    "id": 2519,
                    "name": "IfStatement",
                    "src": "276:35:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2521
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 2537,
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
                            "id": 2520,
                            "name": "ElementaryTypeName",
                            "src": "316:7:10"
                          }
                        ],
                        "id": 2521,
                        "name": "VariableDeclaration",
                        "src": "316:9:10"
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
                              "referencedDeclaration": 2506,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2522,
                            "name": "Identifier",
                            "src": "328:1:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2508,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 2523,
                            "name": "Identifier",
                            "src": "332:1:10"
                          }
                        ],
                        "id": 2524,
                        "name": "BinaryOperation",
                        "src": "328:5:10"
                      }
                    ],
                    "id": 2525,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:10"
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
                              "referencedDeclaration": 2734,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 2526,
                            "name": "Identifier",
                            "src": "339:6:10"
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
                                      "referencedDeclaration": 2521,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 2527,
                                    "name": "Identifier",
                                    "src": "346:1:10"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2506,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 2528,
                                    "name": "Identifier",
                                    "src": "350:1:10"
                                  }
                                ],
                                "id": 2529,
                                "name": "BinaryOperation",
                                "src": "346:5:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2508,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 2530,
                                "name": "Identifier",
                                "src": "355:1:10"
                              }
                            ],
                            "id": 2531,
                            "name": "BinaryOperation",
                            "src": "346:10:10"
                          }
                        ],
                        "id": 2532,
                        "name": "FunctionCall",
                        "src": "339:18:10"
                      }
                    ],
                    "id": 2533,
                    "name": "ExpressionStatement",
                    "src": "339:18:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2512
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 2521,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 2534,
                        "name": "Identifier",
                        "src": "370:1:10"
                      }
                    ],
                    "id": 2535,
                    "name": "Return",
                    "src": "363:8:10"
                  }
                ],
                "id": 2536,
                "name": "Block",
                "src": "270:106:10"
              }
            ],
            "id": 2537,
            "name": "FunctionDefinition",
            "src": "203:173:10"
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
              "scope": 2600,
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
                      "scope": 2555,
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
                        "id": 2538,
                        "name": "ElementaryTypeName",
                        "src": "471:7:10"
                      }
                    ],
                    "id": 2539,
                    "name": "VariableDeclaration",
                    "src": "471:9:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 2555,
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
                        "id": 2540,
                        "name": "ElementaryTypeName",
                        "src": "482:7:10"
                      }
                    ],
                    "id": 2541,
                    "name": "VariableDeclaration",
                    "src": "482:9:10"
                  }
                ],
                "id": 2542,
                "name": "ParameterList",
                "src": "470:22:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2555,
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
                        "id": 2543,
                        "name": "ElementaryTypeName",
                        "src": "516:7:10"
                      }
                    ],
                    "id": 2544,
                    "name": "VariableDeclaration",
                    "src": "516:7:10"
                  }
                ],
                "id": 2545,
                "name": "ParameterList",
                "src": "515:9:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2547
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 2555,
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
                            "id": 2546,
                            "name": "ElementaryTypeName",
                            "src": "605:7:10"
                          }
                        ],
                        "id": 2547,
                        "name": "VariableDeclaration",
                        "src": "605:9:10"
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
                              "referencedDeclaration": 2539,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2548,
                            "name": "Identifier",
                            "src": "617:1:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2541,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 2549,
                            "name": "Identifier",
                            "src": "621:1:10"
                          }
                        ],
                        "id": 2550,
                        "name": "BinaryOperation",
                        "src": "617:5:10"
                      }
                    ],
                    "id": 2551,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2545
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 2547,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 2552,
                        "name": "Identifier",
                        "src": "717:1:10"
                      }
                    ],
                    "id": 2553,
                    "name": "Return",
                    "src": "710:8:10"
                  }
                ],
                "id": 2554,
                "name": "Block",
                "src": "525:198:10"
              }
            ],
            "id": 2555,
            "name": "FunctionDefinition",
            "src": "458:265:10"
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
              "scope": 2600,
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
                      "scope": 2575,
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
                        "id": 2556,
                        "name": "ElementaryTypeName",
                        "src": "849:7:10"
                      }
                    ],
                    "id": 2557,
                    "name": "VariableDeclaration",
                    "src": "849:9:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 2575,
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
                        "id": 2558,
                        "name": "ElementaryTypeName",
                        "src": "860:7:10"
                      }
                    ],
                    "id": 2559,
                    "name": "VariableDeclaration",
                    "src": "860:9:10"
                  }
                ],
                "id": 2560,
                "name": "ParameterList",
                "src": "848:22:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2575,
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
                        "id": 2561,
                        "name": "ElementaryTypeName",
                        "src": "894:7:10"
                      }
                    ],
                    "id": 2562,
                    "name": "VariableDeclaration",
                    "src": "894:7:10"
                  }
                ],
                "id": 2563,
                "name": "ParameterList",
                "src": "893:9:10"
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
                              "referencedDeclaration": 2734,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 2564,
                            "name": "Identifier",
                            "src": "909:6:10"
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
                                  "referencedDeclaration": 2559,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 2565,
                                "name": "Identifier",
                                "src": "916:1:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2557,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 2566,
                                "name": "Identifier",
                                "src": "921:1:10"
                              }
                            ],
                            "id": 2567,
                            "name": "BinaryOperation",
                            "src": "916:6:10"
                          }
                        ],
                        "id": 2568,
                        "name": "FunctionCall",
                        "src": "909:14:10"
                      }
                    ],
                    "id": 2569,
                    "name": "ExpressionStatement",
                    "src": "909:14:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2563
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
                              "referencedDeclaration": 2557,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2570,
                            "name": "Identifier",
                            "src": "936:1:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2559,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 2571,
                            "name": "Identifier",
                            "src": "940:1:10"
                          }
                        ],
                        "id": 2572,
                        "name": "BinaryOperation",
                        "src": "936:5:10"
                      }
                    ],
                    "id": 2573,
                    "name": "Return",
                    "src": "929:12:10"
                  }
                ],
                "id": 2574,
                "name": "Block",
                "src": "903:43:10"
              }
            ],
            "id": 2575,
            "name": "FunctionDefinition",
            "src": "836:110:10"
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
              "scope": 2600,
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
                      "scope": 2599,
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
                        "id": 2576,
                        "name": "ElementaryTypeName",
                        "src": "1021:7:10"
                      }
                    ],
                    "id": 2577,
                    "name": "VariableDeclaration",
                    "src": "1021:9:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 2599,
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
                        "id": 2578,
                        "name": "ElementaryTypeName",
                        "src": "1032:7:10"
                      }
                    ],
                    "id": 2579,
                    "name": "VariableDeclaration",
                    "src": "1032:9:10"
                  }
                ],
                "id": 2580,
                "name": "ParameterList",
                "src": "1020:22:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2599,
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
                        "id": 2581,
                        "name": "ElementaryTypeName",
                        "src": "1066:7:10"
                      }
                    ],
                    "id": 2582,
                    "name": "VariableDeclaration",
                    "src": "1066:7:10"
                  }
                ],
                "id": 2583,
                "name": "ParameterList",
                "src": "1065:9:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2585
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 2599,
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
                            "id": 2584,
                            "name": "ElementaryTypeName",
                            "src": "1081:7:10"
                          }
                        ],
                        "id": 2585,
                        "name": "VariableDeclaration",
                        "src": "1081:9:10"
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
                              "referencedDeclaration": 2577,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 2586,
                            "name": "Identifier",
                            "src": "1093:1:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2579,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 2587,
                            "name": "Identifier",
                            "src": "1097:1:10"
                          }
                        ],
                        "id": 2588,
                        "name": "BinaryOperation",
                        "src": "1093:5:10"
                      }
                    ],
                    "id": 2589,
                    "name": "VariableDeclarationStatement",
                    "src": "1081:17:10"
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
                              "referencedDeclaration": 2734,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 2590,
                            "name": "Identifier",
                            "src": "1104:6:10"
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
                                  "referencedDeclaration": 2585,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 2591,
                                "name": "Identifier",
                                "src": "1111:1:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2577,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 2592,
                                "name": "Identifier",
                                "src": "1116:1:10"
                              }
                            ],
                            "id": 2593,
                            "name": "BinaryOperation",
                            "src": "1111:6:10"
                          }
                        ],
                        "id": 2594,
                        "name": "FunctionCall",
                        "src": "1104:14:10"
                      }
                    ],
                    "id": 2595,
                    "name": "ExpressionStatement",
                    "src": "1104:14:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2583
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 2585,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 2596,
                        "name": "Identifier",
                        "src": "1131:1:10"
                      }
                    ],
                    "id": 2597,
                    "name": "Return",
                    "src": "1124:8:10"
                  }
                ],
                "id": 2598,
                "name": "Block",
                "src": "1075:62:10"
              }
            ],
            "id": 2599,
            "name": "FunctionDefinition",
            "src": "1008:129:10"
          }
        ],
        "id": 2600,
        "name": "ContractDefinition",
        "src": "117:1022:10"
      }
    ],
    "id": 2601,
    "name": "SourceUnit",
    "src": "0:1140:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-28T21:50:45.989Z"
}