"use strict";export const validate = validate10;export default validate10;var schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","$ref":"#/definitions/CharacterCardV2","definitions":{"CharacterCardV2":{"type":"object","properties":{"spec":{"type":"string","const":"chara_card_v2"},"spec_version":{"type":"string","const":"2.0"},"data":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"personality":{"type":"string"},"scenario":{"type":"string"},"first_mes":{"type":"string"},"mes_example":{"type":"string"},"creator_notes":{"type":"string"},"system_prompt":{"type":"string"},"post_history_instructions":{"type":"string"},"alternate_greetings":{"type":"array","items":{"type":"string"}},"character_book":{"$ref":"#/definitions/CharacterBook"},"tags":{"type":"array","items":{"type":"string"}},"creator":{"type":"string"},"character_version":{"type":"string"},"extensions":{"type":"object"}},"required":["name","description","personality","scenario","first_mes","mes_example","creator_notes","system_prompt","post_history_instructions","alternate_greetings","tags","creator","character_version","extensions"],"additionalProperties":false}},"required":["spec","spec_version","data"],"additionalProperties":false},"CharacterBook":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"scan_depth":{"type":"number"},"token_budget":{"type":"number"},"recursive_scanning":{"type":"boolean"},"extensions":{"type":"object"},"entries":{"type":"array","items":{"type":"object","properties":{"keys":{"type":"array","items":{"type":"string"}},"content":{"type":"string"},"extensions":{"type":"object"},"enabled":{"type":"boolean"},"insertion_order":{"type":"number"},"name":{"type":"string"},"priority":{"type":"number"},"id":{"type":"number"},"comment":{"type":"string"},"selective":{"type":"boolean"},"secondary_keys":{"type":"array","items":{"type":"string"}},"constant":{"type":"boolean"},"position":{"type":"string","enum":["before_char","after_char"]},"case_sensitive":{"type":"boolean"}},"required":["keys","content","extensions","enabled","insertion_order"],"additionalProperties":false}}},"required":["extensions","entries"],"additionalProperties":false}}};var schema12 = {"type":"object","properties":{"spec":{"type":"string","const":"chara_card_v2"},"spec_version":{"type":"string","const":"2.0"},"data":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"personality":{"type":"string"},"scenario":{"type":"string"},"first_mes":{"type":"string"},"mes_example":{"type":"string"},"creator_notes":{"type":"string"},"system_prompt":{"type":"string"},"post_history_instructions":{"type":"string"},"alternate_greetings":{"type":"array","items":{"type":"string"}},"character_book":{"$ref":"#/definitions/CharacterBook"},"tags":{"type":"array","items":{"type":"string"}},"creator":{"type":"string"},"character_version":{"type":"string"},"extensions":{"type":"object"}},"required":["name","description","personality","scenario","first_mes","mes_example","creator_notes","system_prompt","post_history_instructions","alternate_greetings","tags","creator","character_version","extensions"],"additionalProperties":false}},"required":["spec","spec_version","data"],"additionalProperties":false};var schema13 = {"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"scan_depth":{"type":"number"},"token_budget":{"type":"number"},"recursive_scanning":{"type":"boolean"},"extensions":{"type":"object"},"entries":{"type":"array","items":{"type":"object","properties":{"keys":{"type":"array","items":{"type":"string"}},"content":{"type":"string"},"extensions":{"type":"object"},"enabled":{"type":"boolean"},"insertion_order":{"type":"number"},"name":{"type":"string"},"priority":{"type":"number"},"id":{"type":"number"},"comment":{"type":"string"},"selective":{"type":"boolean"},"secondary_keys":{"type":"array","items":{"type":"string"}},"constant":{"type":"boolean"},"position":{"type":"string","enum":["before_char","after_char"]},"case_sensitive":{"type":"boolean"}},"required":["keys","content","extensions","enabled","insertion_order"],"additionalProperties":false}}},"required":["extensions","entries"],"additionalProperties":false};var func2 = Object.prototype.hasOwnProperty;function validate11(data, valCxt){"use strict"; ;if(valCxt){var instancePath = valCxt.instancePath;var parentData = valCxt.parentData;var parentDataProperty = valCxt.parentDataProperty;var rootData = valCxt.rootData;}else {var instancePath = "";var parentData = undefined;var parentDataProperty = undefined;var rootData = data;}var vErrors = null;var errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){var missing0;if((((data.spec === undefined) && (missing0 = "spec")) || ((data.spec_version === undefined) && (missing0 = "spec_version"))) || ((data.data === undefined) && (missing0 = "data"))){validate11.errors = [{instancePath:instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {var _errs1 = errors;for(var key0 in data){if(!(((key0 === "spec") || (key0 === "spec_version")) || (key0 === "data"))){validate11.errors = [{instancePath:instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.spec !== undefined){var data0 = data.spec;var _errs2 = errors;if(typeof data0 !== "string"){validate11.errors = [{instancePath:instancePath+"/spec",schemaPath:"#/properties/spec/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}if("chara_card_v2" !== data0){validate11.errors = [{instancePath:instancePath+"/spec",schemaPath:"#/properties/spec/const",keyword:"const",params:{allowedValue: "chara_card_v2"},message:"must be equal to constant"}];return false;}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.spec_version !== undefined){var data1 = data.spec_version;var _errs4 = errors;if(typeof data1 !== "string"){validate11.errors = [{instancePath:instancePath+"/spec_version",schemaPath:"#/properties/spec_version/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}if("2.0" !== data1){validate11.errors = [{instancePath:instancePath+"/spec_version",schemaPath:"#/properties/spec_version/const",keyword:"const",params:{allowedValue: "2.0"},message:"must be equal to constant"}];return false;}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.data !== undefined){var data2 = data.data;var _errs6 = errors;if(errors === _errs6){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){var missing1;if(((((((((((((((data2.name === undefined) && (missing1 = "name")) || ((data2.description === undefined) && (missing1 = "description"))) || ((data2.personality === undefined) && (missing1 = "personality"))) || ((data2.scenario === undefined) && (missing1 = "scenario"))) || ((data2.first_mes === undefined) && (missing1 = "first_mes"))) || ((data2.mes_example === undefined) && (missing1 = "mes_example"))) || ((data2.creator_notes === undefined) && (missing1 = "creator_notes"))) || ((data2.system_prompt === undefined) && (missing1 = "system_prompt"))) || ((data2.post_history_instructions === undefined) && (missing1 = "post_history_instructions"))) || ((data2.alternate_greetings === undefined) && (missing1 = "alternate_greetings"))) || ((data2.tags === undefined) && (missing1 = "tags"))) || ((data2.creator === undefined) && (missing1 = "creator"))) || ((data2.character_version === undefined) && (missing1 = "character_version"))) || ((data2.extensions === undefined) && (missing1 = "extensions"))){validate11.errors = [{instancePath:instancePath+"/data",schemaPath:"#/properties/data/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];return false;}else {var _errs8 = errors;for(var key1 in data2){if(!(func2.call(schema12.properties.data.properties, key1))){validate11.errors = [{instancePath:instancePath+"/data",schemaPath:"#/properties/data/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"}];return false;break;}}if(_errs8 === errors){if(data2.name !== undefined){var _errs9 = errors;if(typeof data2.name !== "string"){validate11.errors = [{instancePath:instancePath+"/data/name",schemaPath:"#/properties/data/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs9 === errors;}else {var valid1 = true;}if(valid1){if(data2.description !== undefined){var _errs11 = errors;if(typeof data2.description !== "string"){validate11.errors = [{instancePath:instancePath+"/data/description",schemaPath:"#/properties/data/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs11 === errors;}else {var valid1 = true;}if(valid1){if(data2.personality !== undefined){var _errs13 = errors;if(typeof data2.personality !== "string"){validate11.errors = [{instancePath:instancePath+"/data/personality",schemaPath:"#/properties/data/properties/personality/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs13 === errors;}else {var valid1 = true;}if(valid1){if(data2.scenario !== undefined){var _errs15 = errors;if(typeof data2.scenario !== "string"){validate11.errors = [{instancePath:instancePath+"/data/scenario",schemaPath:"#/properties/data/properties/scenario/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs15 === errors;}else {var valid1 = true;}if(valid1){if(data2.first_mes !== undefined){var _errs17 = errors;if(typeof data2.first_mes !== "string"){validate11.errors = [{instancePath:instancePath+"/data/first_mes",schemaPath:"#/properties/data/properties/first_mes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs17 === errors;}else {var valid1 = true;}if(valid1){if(data2.mes_example !== undefined){var _errs19 = errors;if(typeof data2.mes_example !== "string"){validate11.errors = [{instancePath:instancePath+"/data/mes_example",schemaPath:"#/properties/data/properties/mes_example/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs19 === errors;}else {var valid1 = true;}if(valid1){if(data2.creator_notes !== undefined){var _errs21 = errors;if(typeof data2.creator_notes !== "string"){validate11.errors = [{instancePath:instancePath+"/data/creator_notes",schemaPath:"#/properties/data/properties/creator_notes/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs21 === errors;}else {var valid1 = true;}if(valid1){if(data2.system_prompt !== undefined){var _errs23 = errors;if(typeof data2.system_prompt !== "string"){validate11.errors = [{instancePath:instancePath+"/data/system_prompt",schemaPath:"#/properties/data/properties/system_prompt/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs23 === errors;}else {var valid1 = true;}if(valid1){if(data2.post_history_instructions !== undefined){var _errs25 = errors;if(typeof data2.post_history_instructions !== "string"){validate11.errors = [{instancePath:instancePath+"/data/post_history_instructions",schemaPath:"#/properties/data/properties/post_history_instructions/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs25 === errors;}else {var valid1 = true;}if(valid1){if(data2.alternate_greetings !== undefined){var data12 = data2.alternate_greetings;var _errs27 = errors;if(errors === _errs27){if(Array.isArray(data12)){var valid2 = true;var len0 = data12.length;for(var i0=0; i0<len0; i0++){var _errs29 = errors;if(typeof data12[i0] !== "string"){validate11.errors = [{instancePath:instancePath+"/data/alternate_greetings/" + i0,schemaPath:"#/properties/data/properties/alternate_greetings/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs29 === errors;if(!valid2){break;}}}else {validate11.errors = [{instancePath:instancePath+"/data/alternate_greetings",schemaPath:"#/properties/data/properties/alternate_greetings/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid1 = _errs27 === errors;}else {var valid1 = true;}if(valid1){if(data2.character_book !== undefined){var data14 = data2.character_book;var _errs31 = errors;var _errs32 = errors;if(errors === _errs32){if(data14 && typeof data14 == "object" && !Array.isArray(data14)){var missing2;if(((data14.extensions === undefined) && (missing2 = "extensions")) || ((data14.entries === undefined) && (missing2 = "entries"))){validate11.errors = [{instancePath:instancePath+"/data/character_book",schemaPath:"#/definitions/CharacterBook/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];return false;}else {var _errs34 = errors;for(var key2 in data14){if(!(((((((key2 === "name") || (key2 === "description")) || (key2 === "scan_depth")) || (key2 === "token_budget")) || (key2 === "recursive_scanning")) || (key2 === "extensions")) || (key2 === "entries"))){validate11.errors = [{instancePath:instancePath+"/data/character_book",schemaPath:"#/definitions/CharacterBook/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"}];return false;break;}}if(_errs34 === errors){if(data14.name !== undefined){var _errs35 = errors;if(typeof data14.name !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_book/name",schemaPath:"#/definitions/CharacterBook/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs35 === errors;}else {var valid4 = true;}if(valid4){if(data14.description !== undefined){var _errs37 = errors;if(typeof data14.description !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_book/description",schemaPath:"#/definitions/CharacterBook/properties/description/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid4 = _errs37 === errors;}else {var valid4 = true;}if(valid4){if(data14.scan_depth !== undefined){var data17 = data14.scan_depth;var _errs39 = errors;if(!((typeof data17 == "number") && (isFinite(data17)))){validate11.errors = [{instancePath:instancePath+"/data/character_book/scan_depth",schemaPath:"#/definitions/CharacterBook/properties/scan_depth/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs39 === errors;}else {var valid4 = true;}if(valid4){if(data14.token_budget !== undefined){var data18 = data14.token_budget;var _errs41 = errors;if(!((typeof data18 == "number") && (isFinite(data18)))){validate11.errors = [{instancePath:instancePath+"/data/character_book/token_budget",schemaPath:"#/definitions/CharacterBook/properties/token_budget/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid4 = _errs41 === errors;}else {var valid4 = true;}if(valid4){if(data14.recursive_scanning !== undefined){var _errs43 = errors;if(typeof data14.recursive_scanning !== "boolean"){validate11.errors = [{instancePath:instancePath+"/data/character_book/recursive_scanning",schemaPath:"#/definitions/CharacterBook/properties/recursive_scanning/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid4 = _errs43 === errors;}else {var valid4 = true;}if(valid4){if(data14.extensions !== undefined){var data20 = data14.extensions;var _errs45 = errors;if(!(data20 && typeof data20 == "object" && !Array.isArray(data20))){validate11.errors = [{instancePath:instancePath+"/data/character_book/extensions",schemaPath:"#/definitions/CharacterBook/properties/extensions/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid4 = _errs45 === errors;}else {var valid4 = true;}if(valid4){if(data14.entries !== undefined){var data21 = data14.entries;var _errs47 = errors;if(errors === _errs47){if(Array.isArray(data21)){var valid5 = true;var len1 = data21.length;for(var i1=0; i1<len1; i1++){var data22 = data21[i1];var _errs49 = errors;if(errors === _errs49){if(data22 && typeof data22 == "object" && !Array.isArray(data22)){var missing3;if((((((data22.keys === undefined) && (missing3 = "keys")) || ((data22.content === undefined) && (missing3 = "content"))) || ((data22.extensions === undefined) && (missing3 = "extensions"))) || ((data22.enabled === undefined) && (missing3 = "enabled"))) || ((data22.insertion_order === undefined) && (missing3 = "insertion_order"))){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1,schemaPath:"#/definitions/CharacterBook/properties/entries/items/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"}];return false;}else {var _errs51 = errors;for(var key3 in data22){if(!(func2.call(schema13.properties.entries.items.properties, key3))){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1,schemaPath:"#/definitions/CharacterBook/properties/entries/items/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key3},message:"must NOT have additional properties"}];return false;break;}}if(_errs51 === errors){if(data22.keys !== undefined){var data23 = data22.keys;var _errs52 = errors;if(errors === _errs52){if(Array.isArray(data23)){var valid7 = true;var len2 = data23.length;for(var i2=0; i2<len2; i2++){var _errs54 = errors;if(typeof data23[i2] !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/keys/" + i2,schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/keys/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid7 = _errs54 === errors;if(!valid7){break;}}}else {validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/keys",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/keys/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid6 = _errs52 === errors;}else {var valid6 = true;}if(valid6){if(data22.content !== undefined){var _errs56 = errors;if(typeof data22.content !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/content",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/content/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs56 === errors;}else {var valid6 = true;}if(valid6){if(data22.extensions !== undefined){var data26 = data22.extensions;var _errs58 = errors;if(!(data26 && typeof data26 == "object" && !Array.isArray(data26))){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/extensions",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/extensions/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid6 = _errs58 === errors;}else {var valid6 = true;}if(valid6){if(data22.enabled !== undefined){var _errs60 = errors;if(typeof data22.enabled !== "boolean"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/enabled",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/enabled/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs60 === errors;}else {var valid6 = true;}if(valid6){if(data22.insertion_order !== undefined){var data28 = data22.insertion_order;var _errs62 = errors;if(!((typeof data28 == "number") && (isFinite(data28)))){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/insertion_order",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/insertion_order/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid6 = _errs62 === errors;}else {var valid6 = true;}if(valid6){if(data22.name !== undefined){var _errs64 = errors;if(typeof data22.name !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/name",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs64 === errors;}else {var valid6 = true;}if(valid6){if(data22.priority !== undefined){var data30 = data22.priority;var _errs66 = errors;if(!((typeof data30 == "number") && (isFinite(data30)))){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/priority",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/priority/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid6 = _errs66 === errors;}else {var valid6 = true;}if(valid6){if(data22.id !== undefined){var data31 = data22.id;var _errs68 = errors;if(!((typeof data31 == "number") && (isFinite(data31)))){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/id",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/id/type",keyword:"type",params:{type: "number"},message:"must be number"}];return false;}var valid6 = _errs68 === errors;}else {var valid6 = true;}if(valid6){if(data22.comment !== undefined){var _errs70 = errors;if(typeof data22.comment !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/comment",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/comment/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs70 === errors;}else {var valid6 = true;}if(valid6){if(data22.selective !== undefined){var _errs72 = errors;if(typeof data22.selective !== "boolean"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/selective",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/selective/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs72 === errors;}else {var valid6 = true;}if(valid6){if(data22.secondary_keys !== undefined){var data34 = data22.secondary_keys;var _errs74 = errors;if(errors === _errs74){if(Array.isArray(data34)){var valid8 = true;var len3 = data34.length;for(var i3=0; i3<len3; i3++){var _errs76 = errors;if(typeof data34[i3] !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/secondary_keys/" + i3,schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/secondary_keys/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid8 = _errs76 === errors;if(!valid8){break;}}}else {validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/secondary_keys",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/secondary_keys/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid6 = _errs74 === errors;}else {var valid6 = true;}if(valid6){if(data22.constant !== undefined){var _errs78 = errors;if(typeof data22.constant !== "boolean"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/constant",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/constant/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs78 === errors;}else {var valid6 = true;}if(valid6){if(data22.position !== undefined){var data37 = data22.position;var _errs80 = errors;if(typeof data37 !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/position",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/position/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}if(!((data37 === "before_char") || (data37 === "after_char"))){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/position",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/position/enum",keyword:"enum",params:{allowedValues: schema13.properties.entries.items.properties.position.enum},message:"must be equal to one of the allowed values"}];return false;}var valid6 = _errs80 === errors;}else {var valid6 = true;}if(valid6){if(data22.case_sensitive !== undefined){var _errs82 = errors;if(typeof data22.case_sensitive !== "boolean"){validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1+"/case_sensitive",schemaPath:"#/definitions/CharacterBook/properties/entries/items/properties/case_sensitive/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs82 === errors;}else {var valid6 = true;}}}}}}}}}}}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/data/character_book/entries/" + i1,schemaPath:"#/definitions/CharacterBook/properties/entries/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid5 = _errs49 === errors;if(!valid5){break;}}}else {validate11.errors = [{instancePath:instancePath+"/data/character_book/entries",schemaPath:"#/definitions/CharacterBook/properties/entries/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid4 = _errs47 === errors;}else {var valid4 = true;}}}}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/data/character_book",schemaPath:"#/definitions/CharacterBook/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid1 = _errs31 === errors;}else {var valid1 = true;}if(valid1){if(data2.tags !== undefined){var data39 = data2.tags;var _errs84 = errors;if(errors === _errs84){if(Array.isArray(data39)){var valid9 = true;var len4 = data39.length;for(var i4=0; i4<len4; i4++){var _errs86 = errors;if(typeof data39[i4] !== "string"){validate11.errors = [{instancePath:instancePath+"/data/tags/" + i4,schemaPath:"#/properties/data/properties/tags/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs86 === errors;if(!valid9){break;}}}else {validate11.errors = [{instancePath:instancePath+"/data/tags",schemaPath:"#/properties/data/properties/tags/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid1 = _errs84 === errors;}else {var valid1 = true;}if(valid1){if(data2.creator !== undefined){var _errs88 = errors;if(typeof data2.creator !== "string"){validate11.errors = [{instancePath:instancePath+"/data/creator",schemaPath:"#/properties/data/properties/creator/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs88 === errors;}else {var valid1 = true;}if(valid1){if(data2.character_version !== undefined){var _errs90 = errors;if(typeof data2.character_version !== "string"){validate11.errors = [{instancePath:instancePath+"/data/character_version",schemaPath:"#/properties/data/properties/character_version/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid1 = _errs90 === errors;}else {var valid1 = true;}if(valid1){if(data2.extensions !== undefined){var data43 = data2.extensions;var _errs92 = errors;if(!(data43 && typeof data43 == "object" && !Array.isArray(data43))){validate11.errors = [{instancePath:instancePath+"/data/extensions",schemaPath:"#/properties/data/properties/extensions/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid1 = _errs92 === errors;}else {var valid1 = true;}}}}}}}}}}}}}}}}}}else {validate11.errors = [{instancePath:instancePath+"/data",schemaPath:"#/properties/data/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}var valid0 = _errs6 === errors;}else {var valid0 = true;}}}}}}else {validate11.errors = [{instancePath:instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate11.errors = vErrors;return errors === 0;}function validate10(data, valCxt){"use strict"; ;if(valCxt){var instancePath = valCxt.instancePath;var parentData = valCxt.parentData;var parentDataProperty = valCxt.parentDataProperty;var rootData = valCxt.rootData;}else {var instancePath = "";var parentData = undefined;var parentDataProperty = undefined;var rootData = data;}var vErrors = null;var errors = 0;if(!(validate11(data, {instancePath:instancePath,parentData:parentData,parentDataProperty:parentDataProperty,rootData:rootData}))){vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);errors = vErrors.length;}validate10.errors = vErrors;return errors === 0;}