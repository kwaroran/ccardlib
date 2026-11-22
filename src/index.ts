import { checkCharacterCardVersion } from './check.js'
import { convertCharacterCardVersion, convertLorebookVersion } from './convert.js'
import { parseDecorators } from './decorators.js'

export const CCardLib = {
    character: {
        check: checkCharacterCardVersion,
        convert: convertCharacterCardVersion
    },
    lorebook: {
        convert: convertLorebookVersion
    },
    decorator:{
        parse: parseDecorators
    }
}

export type CharacterCardV2 = {
    spec: 'chara_card_v2'
    spec_version: '2.0' // May 8th addition
    data: {
        name: string
        description: string
        personality: string
        scenario: string
        first_mes: string
        mes_example: string
        creator_notes: string
        system_prompt: string
        post_history_instructions: string
        alternate_greetings: string[]
        character_book?: CharacterBook
        tags: string[]
        creator: string
        character_version: string
        extensions: Record<string, any>
    }
}  

export type CharacterBook = {
    name?: string
    description?: string
    scan_depth?: number // agnai: "Memory: Chat History Depth"
    token_budget?: number // agnai: "Memory: Context Limit"
    recursive_scanning?: boolean // no agnai equivalent. whether entry content can trigger other entries
    extensions: Record<string, any>
    entries: Array<CharacterBookEntry>
}


interface CharacterBookEntry{
    keys: Array<string>
    content: string
    extensions: Record<string, any>
    enabled: boolean
    insertion_order: number // if two entries inserted, lower "insertion order" = inserted higher
    name?: string // not used in prompt engineering
    priority?: number // if token budget reached, lower priority value = discarded first
    id?: number // not used in prompt engineering
    comment?: string // not used in prompt engineering
    selective?: boolean // if `true`, require a key from both `keys` and `secondary_keys` to trigger the entry
    secondary_keys?: Array<string> // see field `selective`. ignored if selective == false
    constant?: boolean // if true, always inserted in the prompt (within budget limit)
    position?: 'before_char' | 'after_char' // whether the entry is placed before or after the character defs
    case_sensitive?:boolean
}


export type CharacterCardV1 = {
    name: string
    description: string
    personality: string
    scenario: string
    first_mes: string
    mes_example: string
}

export interface CharacterCardV3{
    spec: 'chara_card_v3'
    spec_version: '3.0' | `3.${string}` // 3.1 and later minor versions add no field to `data`
    data: {
      // fields from CCV2
      name: string
      description: string
      tags: Array<string>
      creator: string
      character_version: string
      mes_example: string
      extensions: Record<string, any> & CharacterCardV3StandardExtensions
      system_prompt: string
      post_history_instructions: string
      first_mes: string
      alternate_greetings: Array<string>
      personality: string
      scenario: string
  
      //Changes from CCV2
      creator_notes: string
      character_book?: Lorebook
  
      //New fields in CCV3
      assets?: Array<{
        type: string
        uri: string
        name: string
        ext: string
      }>
      nickname?: string
      creator_notes_multilingual?: Record<string, string>
      source?: string[]
      group_only_greetings: Array<string>
      creation_date?: number
      modification_date?: number
    }
}

export type Lorebook = {
    name?: string
    description?: string
    scan_depth?: number 
    token_budget?: number
    recursive_scanning?: boolean
    extensions: Record<string, any>
    entries: Array<LorebookEntry>
}

export type LorebookEntry = {
    keys: Array<string>
    content: string
    extensions: Record<string, any> & LorebookEntryStandardExtensions
    enabled: boolean
    insertion_order: number
    case_sensitive?: boolean
    use_regex: boolean
    constant?: boolean
    name?: string
    priority?: number
    id?: number
    comment?: string
    selective?: boolean
    secondary_keys?: Array<string>
    position?: 'before_char' | 'after_char'
}

// Standard `extensions` keys of Character Card V3.1 (SPEC_V3.md, "Standard `extensions` keys").
// Every key is optional; an application keeps the ones it does not use when it exports a card.

export interface CharacterCardV3StandardExtensions {
    localizations?: CharacterCardV3Localizations
    asset_info?: Array<CharacterCardV3AssetInfo>
}

export interface CharacterCardV3Localizations {
    language?: string // BCP 47 tag of the base fields
    locales?: Record<string /* BCP 47 tag */, CharacterCardV3Localization>
}

export interface CharacterCardV3Localization {
    name?: string
    nickname?: string
    description?: string
    personality?: string
    scenario?: string
    first_mes?: string
    alternate_greetings?: Array<string> // by index of the base array
    group_only_greetings?: Array<string> // by index of the base array
    mes_example?: string
    system_prompt?: string
    post_history_instructions?: string
    creator_notes?: string
    meta?: {
        origin: 'author' | 'machine' | 'community'
        translator?: string
        based_on?: number // modification_date when the locale was last brought up to date
    }
}

export interface CharacterCardV3AssetInfo {
    type: string // matches the asset with this type and name
    name: string
    lang?: string // BCP 47 tag
    variant_of?: string // with lang: replaces the asset of the same type with this name
}

export interface LorebookEntryStandardExtensions {
    localizations?: Record<string /* BCP 47 tag */, LorebookEntryLocalization>
}

export interface LorebookEntryLocalization {
    keys?: Array<string>
    secondary_keys?: Array<string>
    content?: string // never holds decorators
    name?: string
    comment?: string
}
