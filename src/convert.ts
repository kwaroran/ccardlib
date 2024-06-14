import type { CharacterCardV1, CharacterCardV2, CharacterCardV3, CharacterBook, Lorebook } from "./index.js";
import { checkCharacterCardVersion } from "./check.js";
import { parseDecorators } from "./decorators.js";

type ConvertLorebookVersionResult<T> = T extends 'v2' ? CharacterBook : Lorebook;
interface ConvertLorebookVersionOptions {
    removeDecorators?: boolean
}

export function convertLorebookVersion<T extends 'v2'|'v3'>(data: CharacterBook|Lorebook, args: {
    from?: 'v2'|'v3',
    to: T,
    options?: ConvertLorebookVersionOptions
}): ConvertLorebookVersionResult<T>{

    let from:'v2'|'v3'
    let to:T = args.to;
    const options = args.options ?? {};

    if(!args.from){
        if((data as any).spec === 'chara_book_v2'){
            from = 'v2'
        }
        else if((data as any).spec === 'chara_book_v3'){
            from = 'v3'
        }
        else{
            throw new Error('Invalid lorebook data');
        }
    }
    else{
        from = args.from;
    }

    if(from === to){
        return data as ConvertLorebookVersionResult<T>;
    }

    if(from === 'v2' && to === 'v3'){
        return convertV2LBtoV3(data as CharacterBook, options) as ConvertLorebookVersionResult<T>;
    }
    if(from === 'v3' && to === 'v2'){
        return convertV3LBtoV2(data as Lorebook, options) as ConvertLorebookVersionResult<T>;
    }

    throw new Error('Invalid conversion');
}

type ConvertCharacterCardVersionResult<T> = T extends 'v1' ? CharacterCardV1 : T extends 'v2' ? CharacterCardV2 : CharacterCardV3;
interface ConvertCharacterCardVersionOptions extends ConvertLorebookVersionOptions{
    convertRisuFields?: boolean
}

export function convertCharacterCardVersion<T extends 'v1'|'v2'|'v3'>(data: CharacterCardV1|CharacterCardV2|CharacterCardV3, args: {
    from?: 'v1'|'v2'|'v3',
    to: T,
    options?: ConvertCharacterCardVersionOptions
}): ConvertCharacterCardVersionResult<T>{

    let from:'v1'|'v2'|'v3'
    let to:T = args.to;
    const options = args.options ?? {};
    options.convertRisuFields = options.convertRisuFields ?? false

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
        if(to === 'v3'){
            return postProcessV3(data as CharacterCardV3, options) as ConvertCharacterCardVersionResult<T>;
        }
        return data as ConvertCharacterCardVersionResult<T>;
    }

    if(from === 'v1' && to === 'v2'){
        return convertV1toV2(data as CharacterCardV1, options) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v2' && to === 'v1'){
        return convertV2toV1(data as CharacterCardV2, options) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v2' && to === 'v3'){
        return convertV2toV3(data as CharacterCardV2, options) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v3' && to === 'v2'){
        return convertV3toV2(data as CharacterCardV3, options) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v1' && to === 'v3'){
        return convertV2toV3(convertV1toV2(data as CharacterCardV1, options), options) as ConvertCharacterCardVersionResult<T>;
    }
    if(from === 'v3' && to === 'v1'){
        return convertV2toV1(convertV3toV2(data as CharacterCardV3, options), options) as ConvertCharacterCardVersionResult<T>;
    }

    throw new Error('Invalid conversion');
}

function convertV1toV2(data: CharacterCardV1, options:ConvertCharacterCardVersionOptions): CharacterCardV2{
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

function convertV2toV1(data:CharacterCardV2, options:ConvertCharacterCardVersionOptions): CharacterCardV1{
    return {
        name: data.data.name,
        description: data.data.description,
        personality: data.data.personality,
        scenario: data.data.scenario,
        first_mes: data.data.first_mes,
        mes_example: data.data.mes_example
    }
}

function convertV2LBtoV3(data:CharacterBook, options:ConvertLorebookVersionOptions): Lorebook{
    return {
        name: data?.name,
        description: data?.description,
        scan_depth: data?.scan_depth,
        token_budget: data?.token_budget,
        recursive_scanning: data?.recursive_scanning,
        extensions: data?.extensions ?? {},
        entries: data?.entries?.map(entry => {
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
    }
}

function convertV2toV3(data:CharacterCardV2, options:ConvertCharacterCardVersionOptions): CharacterCardV3{
    const book = data.data.character_book
    return postProcessV3({
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
          character_book: book ? convertV2LBtoV3(book, options) : undefined,
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
    }, options)
}

function postProcessV3(data:CharacterCardV3, options:ConvertCharacterCardVersionOptions):CharacterCardV3{

    let assets: {
        type: string;
        uri: string;
        name: string;
        ext: string;
    }[] = data.data.assets ?? []

    let source:string[] = []

    source = data.data.source ?? []

    if(options.convertRisuFields){
        const convertRisuURI = (uri:string) => {
            if(!uri){
                return uri
            }
            
            if(uri.length === 64){
                const hexadecimals = '0123456789abcdef'
                if(uri.split('').every(char => hexadecimals.includes(char))){
                    return 'risustored:' + uri
                }
            }
            return uri
        }


        const risuEmotions:[string, string][] = data.data.extensions?.risuai?.emotions
        if(risuEmotions){
            risuEmotions.forEach(emotion => {
                assets.push({
                    type: 'emotion',
                    uri: convertRisuURI(emotion[1]),
                    name: emotion[0],
                    ext: 'unknown'
                })
            })
            delete data.data.extensions.risuai.emotions
        }

        const risuAssets:[string, string, string][] = data.data.extensions?.risuai?.additionalAssets
        if(risuAssets){
            risuAssets.forEach(asset => {
                assets.push({
                    type: 'x-risu-asset',
                    uri: convertRisuURI(asset[1]),
                    name: asset[0],
                    ext: asset[2] || 'unknown'
                })
            })
            delete data.data.extensions.risuai.additionalAssets
        }

        const risuSource:string[] = data.data.extensions?.risuai?.source
        if(risuSource){
            source = source.concat(risuSource).filter((value, index, self) => self.indexOf(value) === index)
            delete data.data.extensions.risuai.source
        }
    }

    data.data.assets = assets
    data.data.source = source

    return data
}

function convertV3LBtoV2(data:Lorebook, options:ConvertLorebookVersionOptions): CharacterBook{

    const convertContents = (entry:string) => {
        if(!options.removeDecorators){
            return entry
        }
        return parseDecorators(entry, () => {})
    }

    return {
        name: data?.name,
        description: data?.description,
        scan_depth: data?.scan_depth,
        token_budget: data?.token_budget,
        recursive_scanning: data?.recursive_scanning,
        extensions: data?.extensions ?? {},
        entries: data?.entries?.map(entry => {
            return {
                keys: entry.keys ?? [],
                content: convertContents(entry.content) ?? '',
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
    }
}

function convertV3toV2(data:CharacterCardV3, options:ConvertCharacterCardVersionOptions): CharacterCardV2{
    const book = data.data.character_book

    let card:CharacterCardV2 = {
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
            character_book: book ? convertV3LBtoV2(book, options) : undefined,
            tags: data.data.tags ?? [],
            creator: data.data.creator,
            character_version: data.data.character_version,
            extensions: data.data.extensions ?? {}
        }
    }

    if(options.convertRisuFields){
        let risuEmotions:[string, string][] = []
        let risuAssets:[string, string, string][] = []
        let risuSource:string[] = []
        let assets = data.data.assets ?? []

        assets.forEach(asset => {
            if(asset.type === 'emotion'){
                risuEmotions.push([asset.name, asset.uri])
            }
            else if(asset.type === 'x-risu-asset'){
                risuAssets.push([asset.name, asset.uri, asset.ext])
            }
        })

        if(data.data.source){
            risuSource = data.data.source
        }

        card.data.extensions.risuai ??= {}
        if(risuEmotions.length > 0){
            card.data.extensions.risuai.emotions = risuEmotions
        }
        if(risuAssets.length > 0){
            card.data.extensions.risuai.additionalAssets = risuAssets
        }
        if(risuSource.length > 0){
            card.data.extensions.risuai.source = risuSource
        }
    }

    return card
}