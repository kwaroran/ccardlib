
import { Ajv } from 'ajv';
import { CCSchemas } from './schemas.js';

export function checkCharacterCardVersion(data: any): 'v1'|'v2'|'v3'|'unknown'{
    
    const v = new Ajv();

    if(v.compile(CCSchemas.V3)(data)){
        return 'v3'
    }
    if(v.compile(CCSchemas.V2)(data)){
        return 'v2'
    }
    if(v.compile(CCSchemas.V1)(data)){
        return 'v1'
    }

    return 'unknown';
}