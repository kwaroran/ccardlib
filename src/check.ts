//@ts-ignore
import compiledV1 from './compiled/v1.js'
//@ts-ignore
import compiledV2 from './compiled/v2.js'
//@ts-ignore
import compiledV3 from './compiled/v3.js'

export function checkCharacterCardVersion(data: any): 'v1'|'v2'|'v3'|'unknown'{
    const dataWithoutNulls = removeNullValues(cloneJson(data));
    if(compiledV3(dataWithoutNulls)){
        return 'v3'
    }
    if(compiledV2(dataWithoutNulls)){
        return 'v2'
    }
    if(compiledV1(dataWithoutNulls)){
        return 'v1'
    }

    return 'unknown';
}

function removeNullValues(obj: any){
    if(!obj || typeof obj !== 'object'){
        return obj;
    }

    for (let key in obj) {
        if (obj[key] === null) {
            delete obj[key];
        }
        if (obj[key] && typeof obj[key] === 'object') {
            removeNullValues(obj[key]);
        }
    }
    return obj;
}

function cloneJson<T>(data: T): T{
    if(data === undefined){
        return data;
    }
    return JSON.parse(JSON.stringify(data));
}
