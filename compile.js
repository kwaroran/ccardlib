import { CCSchemas } from './src/schemas.js'
import { Ajv } from 'ajv';
import pkg from 'ajv/dist/standalone/index.js';
import fs from 'fs'

const ajv = new Ajv({
    code: {source: true, esm: true, es5:true},
    strict: false,
})
fs.writeFileSync("./src/compiled/v1.js", pkg(ajv, ajv.compile(CCSchemas.V1)))
fs.writeFileSync("./src/compiled/v2.js", pkg(ajv, ajv.compile(CCSchemas.V2)))
fs.writeFileSync("./src/compiled/v3.js", pkg(ajv, ajv.compile(CCSchemas.V3)))
