import { checkCharacterCardVersion } from './check.js'
import { convertCharacterCardVersion } from './convert.js'

export const CCardLib = {
    check: checkCharacterCardVersion,
    convert: convertCharacterCardVersion
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
    spec_version: '3.0'
    data: {
      // fields from CCV2
      name: string
      description: string
      tags: Array<string>
      creator: string
      character_version: string
      mes_example: string
      extensions: Record<string, any>
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
    extensions: Record<string, any>
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