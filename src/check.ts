
import {Validator} from 'jsonschema';
import { CCSchemas } from './schemas.js';

export function checkCharacterCardVersion(data: any): 'v1'|'v2'|'v3'|'unknown'{
    
    const v = new Validator();
    if(v.validate(data, CCSchemas.V3).valid){
        return 'v3';
    }
    if(v.validate(data, CCSchemas.V2).valid){
        return 'v2';
    }
    if(v.validate(data, CCSchemas.V1).valid){
        return 'v1';
    }

    return 'unknown';
}