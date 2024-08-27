'use client'

import { useHouses } from "@/hooks/houses/useHouses"
import { Container, Pagination, Stack, Typography } from "@mui/material"
import HouseCard from "./components/houseCard"

export const HousesContainer = ()=>{

    const { houses } = useHouses({ page: 0, pageSize: 10})



    return (
        <Container>
            <Stack my={3} justifyContent={'center'} alignItems={'center'}>
                <Typography>Welcome to</Typography>
                <Typography variant="h4">An Interface of Ice & Fire</Typography>
                
            </Stack>
            <Typography>The place where you can see a list of all the houses from the books and their sworn members.</Typography>
            <Stack spacing={3}>
                { houses?.data?.map((house) => <HouseCard key={ house.url } {...house} />) }
            </Stack>
            <Pagination>
                
            </Pagination>

        </Container>
    )
}