import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import { Flex, Spacer, Box } from "@chakra-ui/react";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Flex  fontSize='lg' as='b'>
            <Box _hover={{color: 'active'}}><NavLink to="/">Home</NavLink></Box> 
           
            <Spacer w='10px'/>
            <Box _hover={{color: 'active'}}>{isLoggedIn && (<NavLink to="/contacts">Contacts</NavLink>)}</Box>        
        </Flex>
    )
}