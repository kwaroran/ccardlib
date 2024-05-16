

export function parseDecorators(data:string, hook:(name:string, args:string[])=>boolean|void){
    const lines = data.trim().split('\n')
    let fallback = false

    for(let i=0; i<lines.length; i++){
        let line = lines[i].trim()
        
        if(line === '@@@end'){
            line = '@@end' // legacy support
        }

        if(line.startsWith('@@')){
            if(line.startsWith('@@@')){
                if(!fallback){
                    continue
                }
            }

            let firstSpace = line.indexOf(' ')
            if(firstSpace === -1){
                firstSpace = line.length
            }

            const name = line.slice(line.startsWith('@@@') ? 3 : 2, firstSpace)
            const args = line.slice(firstSpace).split(',').map(arg=>arg.trim()).filter(arg=>arg !== '')
            if(name !== ''){
                const result = hook(name, args)
                fallback = result === false
            }
            else{
                fallback = false
            }
        }
        else{
            return lines.slice(i).join('\n').trim()
        }
    }

    return ''

}