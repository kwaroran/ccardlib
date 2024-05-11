//@ts-ignore
import compiledV1 from './compiled/v1.js'
//@ts-ignore
import compiledV2 from './compiled/v2.js'
//@ts-ignore
import compiledV3 from './compiled/v3.js'

export function checkCharacterCardVersion(data: any): 'v1'|'v2'|'v3'|'unknown'{
    data = removeNullValues(data);
    if(compiledV3(data)){
        return 'v3'
    }
    if(compiledV2(data)){
        return 'v2'
    }
    if(compiledV1(data)){
        return 'v1'
    }

    return 'unknown';
}

function removeNullValues(obj: any){
    for (let key in obj) {
        if (obj[key] === null) {
            delete obj[key];
        }
        if (typeof obj[key] === 'object') {
            removeNullValues(obj[key]);
        }
    }
    return obj;
}