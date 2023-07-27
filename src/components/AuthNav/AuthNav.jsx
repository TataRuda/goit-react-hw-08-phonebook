import { NavLink } from "react-router-dom";
import { Flex, Spacer, Box } from "@chakra-ui/react";

export const AuthNav = () => {
    

    return (
        <Flex fontSize='lg' as='b'>
            <Box _hover={{color: 'active'}}>
                <NavLink to="/register">Register</NavLink>
            </Box>            
        <Spacer w='10px'/> 
            <Box _hover={{color: 'active'}}>   
                <NavLink to="/login">Log In</NavLink>
            </Box>
        </Flex>
    )
}