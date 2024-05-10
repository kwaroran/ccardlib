//@ts-ignore
import compiledV1 from './compiled/v1.js'
//@ts-ignore
import compiledV2 from './compiled/v2.js'
//@ts-ignore
import compiledV3 from './compiled/v3.js'

export function checkCharacterCardVersion(data: any): 'v1'|'v2'|'v3'|'unknown'{

    if(compiledV1(data)){
        return 'v3'
    }
    if(compiledV2(data)){
        return 'v2'
    }
    if(compiledV3(data)){
        return 'v1'
    }

    return 'unknown';
}