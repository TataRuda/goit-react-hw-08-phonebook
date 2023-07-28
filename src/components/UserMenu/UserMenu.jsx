import { useAuth } from "hooks";
import { logOutUser } from "redux/auth/operations";
import { useDispatch } from "react-redux"; 
import { Flex, Button, Text } from "@chakra-ui/react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Flex fontSize='lg' as='b' alignItems={'center'} justifyContent={'space-between'}>
            <Text pr='8px'> Welcome, {user.name}!</Text>
            <Button 
            type="button" 
            onClick={() => dispatch(logOutUser())}
            size='sm'
            variant='solid'
            color='secondary' 
             _hover={{bgColor: 'active'}}>
              Log Out
            </Button>
        </Flex>
    )
}