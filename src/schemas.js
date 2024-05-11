//This file is for the JSON schemas for the character card data
//It isn't used in the final code, but it is used to generate the compiled schemas

export const CCSchemas = {
    V1: {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$ref": "#/definitions/CharacterCardV1",
        "definitions": {
            "CharacterCardV1": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "personality": {
                        "type": "string"
                    },
                    "scenario": {
                        "type": "string"
                    },
                    "first_mes": {
                        "type": "string"
                    },
                    "mes_example": {
                        "type": "string"
                    }
                },
                "required": [
                    "name",
                    "description",
                    "personality",
                    "scenario",
                    "first_mes",
                    "mes_example"
                ],
                "additionalProperties": true
            }
        }
    },
    V2: {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$ref": "#/definitions/CharacterCardV2",
        "definitions": {
            "CharacterCardV2": {
                "type": "object",
                "properties": {
                    "spec": {
                        "type": "string",
                        "const": "chara_card_v2"
                    },
                    "spec_version": {
                        "type": "string",
                        "const": "2.0"
                    },
                    "data": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "personality": {
                                "type": "string"
                            },
                            "scenario": {
                                "type": "string"
                            },
                            "first_mes": {
                                "type": "string"
                            },
                            "mes_example": {
                                "type": "string"
                            },
                            "creator_notes": {
                                "type": "string"
                            },
                            "system_prompt": {
                                "type": "string"
                            },
                            "post_history_instructions": {
                                "type": "string"
                            },
                            "alternate_greetings": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "character_book": {
                                "$ref": "#/definitions/CharacterBook"
                            },
                            "tags": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "creator": {
                                "type": "string"
                            },
                            "character_version": {
                                "type": "string"
                            },
                            "extensions": {
                                "type": "object"
                            }
                        },
                        "required": [
                            "name",
                            "description",
                            "personality",
                            "scenario",
                            "first_mes",
                            "mes_example",
                            "creator_notes",
                            "system_prompt",
                            "post_history_instructions",
                            "alternate_greetings",
                            "tags",
                            "creator",
                            "character_version",
                            "extensions"
                        ],
                        "additionalProperties": true
                    }
                },
                "required": [
                    "spec",
                    "spec_version",
                    "data"
                ],
                "additionalProperties": true
            },
            "CharacterBook": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "scan_depth": {
                        "type": "number"
                    },
                    "token_budget": {
                        "type": "number"
                    },
                    "recursive_scanning": {
                        "type": "boolean"
                    },
                    "extensions": {
                        "type": "object"
                    },
                    "entries": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "keys": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "content": {
                                    "type": "string"
                                },
                                "extensions": {
                                    "type": "object"
                                },
                                "enabled": {
                                    "type": "boolean"
                                },
                                "insertion_order": {
                                    "type": "number"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "priority": {
                                    "type": "number"
                                },
                                "id": {
                                    "type": "number"
                                },
                                "comment": {
                                    "type": "string"
                                },
                                "selective": {
                                    "type": "boolean"
                                },
                                "secondary_keys": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "constant": {
                                    "type": "boolean"
                                },
                                "position": {
                                    "type": "string",
                                    "enum": [
                                        "before_char",
                                        "after_char"
                                    ]
                                },
                                "case_sensitive": {
                                    "type": "boolean"
                                }
                            },
                            "required": [
                                "keys",
                                "content",
                                "extensions",
                                "enabled",
                                "insertion_order"
                            ],
                            "additionalProperties": true
                        }
                    }
                },
                "required": [
                    "extensions",
                    "entries"
                ],
                "additionalProperties": true
            }
        }
    },
    V3: {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$ref": "#/definitions/CharacterCardV3",
        "definitions": {
            "CharacterCardV3": {
                "type": "object",
                "properties": {
                    "spec": {
                        "type": "string",
                        "const": "chara_card_v3"
                    },
                    "spec_version": {
                        "type": "string",
                        "const": "3.0"
                    },
                    "data": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "description": {
                                "type": "string"
                            },
                            "tags": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "creator": {
                                "type": "string"
                            },
                            "character_version": {
                                "type": "string"
                            },
                            "mes_example": {
                                "type": "string"
                            },
                            "extensions": {
                                "type": "object"
                            },
                            "system_prompt": {
                                "type": "string"
                            },
                            "post_history_instructions": {
                                "type": "string"
                            },
                            "first_mes": {
                                "type": "string"
                            },
                            "alternate_greetings": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "personality": {
                                "type": "string"
                            },
                            "scenario": {
                                "type": "string"
                            },
                            "creator_notes": {
                                "type": "string"
                            },
                            "character_book": {
                                "$ref": "#/definitions/Lorebook"
                            },
                            "assets": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        },
                                        "uri": {
                                            "type": "string"
                                        },
                                        "name": {
                                            "type": "string"
                                        },
                                        "ext": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "type",
                                        "uri",
                                        "name",
                                        "ext"
                                    ],
                                    "additionalProperties": true
                                }
                            },
                            "nickname": {
                                "type": "string"
                            },
                            "creator_notes_multilingual": {
                                "type": "object",
                                "additionalProperties": {
                                    "type": "string"
                                }
                            },
                            "source": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "group_only_greetings": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "creation_date": {
                                "type": "number"
                            },
                            "modification_date": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "name",
                            "description",
                            "tags",
                            "creator",
                            "character_version",
                            "mes_example",
                            "extensions",
                            "system_prompt",
                            "post_history_instructions",
                            "first_mes",
                            "alternate_greetings",
                            "personality",
                            "scenario",
                            "creator_notes",
                            "group_only_greetings"
                        ],
                        "additionalProperties": true
                    }
                },
                "required": [
                    "spec",
                    "spec_version",
                    "data"
                ],
                "additionalProperties": true
            },
            "Lorebook": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "scan_depth": {
                        "type": "number"
                    },
                    "token_budget": {
                        "type": "number"
                    },
                    "recursive_scanning": {
                        "type": "boolean"
                    },
                    "extensions": {
                        "type": "object"
                    },
                    "entries": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/LorebookEntry"
                        }
                    }
                },
                "required": [
                    "extensions",
                    "entries"
                ],
                "additionalProperties": true
            },
            "LorebookEntry": {
                "type": "object",
                "properties": {
                    "keys": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "content": {
                        "type": "string"
                    },
                    "extensions": {
                        "type": "object"
                    },
                    "enabled": {
                        "type": "boolean"
                    },
                    "insertion_order": {
                        "type": "number"
                    },
                    "case_sensitive": {
                        "type": "boolean"
                    },
                    "use_regex": {
                        "type": "boolean"
                    },
                    "constant": {
                        "type": "boolean"
                    },
                    "name": {
                        "type": "string"
                    },
                    "priority": {
                        "type": "number"
                    },
                    "id": {
                        "type": "number"
                    },
                    "comment": {
                        "type": "string"
                    },
                    "selective": {
                        "type": "boolean"
                    },
                    "secondary_keys": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "position": {
                        "type": "string",
                        "enum": [
                            "before_char",
                            "after_char"
                        ]
                    }
                },
                "required": [
                    "keys",
                    "content",
                    "extensions",
                    "enabled",
                    "insertion_order",
                    "use_regex"
                ],
                "additionalProperties": true
            }
        }
    }
}