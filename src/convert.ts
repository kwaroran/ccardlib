import type { CharacterCardV1, CharacterCardV2, CharacterCardV3 } from "./index.js";
import { checkCharacterCardVersion } from "./check.js";

type ConvertCharacterCardVersionResult<T> = T extends 'v1' ? CharacterCardV1 : T extends 'v2' ? CharacterCardV2 : CharacterCardV3;

export function convertCharacterCardVersion<T extends 'v1'|'v2'|'v3'>(data: CharacterCardV1|CharacterCardV2|CharacterCardV3, args: {
    from?: 'v1'|'v2'|'v3',
    to: T
}): ConvertCharacterCardVersionResult<T>{

    let from:'v1'|'v2'|'v3'
    let to:T = args.to;
    if(!args.from){
        const checkResult = checkCharacterCardVersion(data);
        if(checkResult === 'unknown'){
            throw new Error('Invalid character card data');
        }
        from = checkResult;
    }
    else{
        from = args.from;
    }

    if(from === to){
        return data as ConvertCharacterCardVersionResult<T>;
    }

    if(from === 'v1' && to === 'v2'){
        return convertV1toV2(data as CharacterCardV1) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v2' && to === 'v1'){
        return convertV2toV1(data as CharacterCardV2) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v2' && to === 'v3'){
        return convertV2toV3(data as CharacterCardV2) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v3' && to === 'v2'){
        return convertV3toV2(data as CharacterCardV3) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v1' && to === 'v3'){
        return convertV2toV3(convertV1toV2(data as CharacterCardV1)) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v3' && to === 'v1'){
        return convertV2toV1(convertV3toV2(data as CharacterCardV3)) as ConvertCharacterCardVersionResult<T>;
    }

    throw new Error('Invalid conversion');
}

function convertV1toV2(data: CharacterCardV1): CharacterCardV2{
    return {
        spec: 'chara_card_v2',
        spec_version: '2.0',
        data: {
            name: data.name,
            description: data.description,
            personality: data.personality,
            scenario: data.scenario,
            first_mes: data.first_mes,
            mes_example: data.mes_example,
            creator_notes: "",
            system_prompt: "",
            post_history_instructions: "",
            alternate_greetings: [],
            character_book: {
                extensions: {},
                entries: []
            },
            tags: [],
            creator: "Unknown",
            character_version: "Unknown",
            extensions: {}
        }
    }
}

function convertV2toV1(data:CharacterCardV2): CharacterCardV1{
    return {
        name: data.data.name,
        description: data.data.description,
        personality: data.data.personality,
        scenario: data.data.scenario,
        first_mes: data.data.first_mes,
        mes_example: data.data.mes_example
    }
}

function convertV2toV3(data:CharacterCardV2): CharacterCardV3{
    return {
        spec: 'chara_card_v3',
        spec_version: '3.0',
        data: {
          // fields from CCV2
          name: data.data.name,
          description: data.data.description,
          tags: data.data.tags ?? [],
          creator: data.data.creator,
          character_version: data.data.character_version,
          mes_example: data.data.mes_example,
          extensions: data.data.extensions,
          system_prompt: data.data.system_prompt,
          post_history_instructions: data.data.post_history_instructions,
          first_mes: data.data.first_mes,
          alternate_greetings: data.data.alternate_greetings,
          personality: data.data.personality,
          scenario: data.data.scenario,
      
          //Changes from CCV2
          creator_notes: data.data.creator_notes,
          character_book: {
            name: data.data.character_book?.name,
            description: data.data.character_book?.description,
            scan_depth: data.data.character_book?.scan_depth ?? 0,
            token_budget: data.data.character_book?.token_budget ?? 0,
            recursive_scanning: data.data.character_book?.recursive_scanning ?? false,
            extensions: data.data.character_book?.extensions ?? {},
            entries: data.data.character_book?.entries?.map(entry => {
                return {
                    keys: entry.keys ?? [],
                    content: entry.content ?? '',
                    extensions: entry.extensions ?? {},
                    enabled: entry.enabled ?? false,
                    insertion_order: entry.insertion_order ?? 100,
                    case_sensitive: entry.case_sensitive,
                    use_regex: false,
                    constant: entry.constant,
                    name: entry.name,
                    priority: entry.priority,
                    id: entry.id,
                    comment: entry.comment,
                    selective: entry.selective,
                    secondary_keys: entry.secondary_keys,
                    position: entry.position,
                }
            }) ?? []
          },
          //New fields in CCV3
          assets: [{
            type: 'icon',
            uri: 'ccdefault:',
            name: 'main',
            ext: 'png'
          }],
          nickname: '',
          creator_notes_multilingual: {},
          source: [],
          group_only_greetings: [],
          creation_date: 0,
          modification_date: 0
        }
    }
}

function convertV3toV2(data:CharacterCardV3): CharacterCardV2{
    return {
        spec: 'chara_card_v2',
        spec_version: '2.0',
        data: {
            name: data.data.name,
            description: data.data.description,
            personality: data.data.personality,
            scenario: data.data.scenario,
            first_mes: data.data.first_mes,
            mes_example: data.data.mes_example,
            creator_notes: data.data.creator_notes,
            system_prompt: data.data.system_prompt,
            post_history_instructions: data.data.post_history_instructions,
            alternate_greetings: data.data.alternate_greetings ?? [],
            character_book: {
                name: data.data.character_book?.name,
                description: data.data.character_book?.description,
                scan_depth: data.data.character_book?.scan_depth ?? 0,
                token_budget: data.data.character_book?.token_budget ?? 0,
                recursive_scanning: data.data.character_book?.recursive_scanning ?? false,
                extensions: data.data.character_book?.extensions ?? {},
                entries: data.data.character_book?.entries?.map(entry => {
                    return {
                        keys: entry.keys ?? [],
                        content: entry.content ?? '',
                        extensions: entry.extensions ?? {},
                        enabled: entry.enabled ?? false,
                        insertion_order: entry.insertion_order ?? 100,
                        case_sensitive: entry.case_sensitive,
                        name: entry.name,
                        priority: entry.priority,
                        id: entry.id,
                        comment: entry.comment,
                        selective: entry.selective,
                        secondary_keys: entry.secondary_keys,
                        position: entry.position,
                        constant: entry.constant,
                    }
                }) ?? []
            },
            tags: data.data.tags ?? [],
            creator: data.data.creator,
            character_version: data.data.character_version,
            extensions: data.data.extensions ?? {}
        }
    }
}