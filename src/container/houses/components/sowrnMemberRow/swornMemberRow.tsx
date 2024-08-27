import { CharacterType } from "@/hooks/characters/types"
import { Stack, Typography } from "@mui/material"

export const SwornMemberRow = ({ name, died }: Partial<CharacterType>)=>{
    return (
        <Stack onClick={()=>alert(`navigate to ${name} details`)} my={1.5} direction={'row'} justifyContent={'space-between'} alignItems={'center'} minHeight={50}>
            <Typography>{ name } </Typography>
            <Stack>
               { died 
               
                    ? <Stack alignItems={'end'} justifyContent={'center'}>
                        <Typography>Dead</Typography> 
                        <Typography variant="caption">{ died }</Typography> 
                    </Stack>
                    : <Typography>Alive</Typography> 
                }
            </Stack>
            
        </Stack>
    )
}