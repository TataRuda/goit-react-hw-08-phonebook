import { useAuth } from "hooks";
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Flex } from '@chakra-ui/react';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Flex h='60px' alignItems={'center'} justifyContent={'space-between'}>
            <Navigation />


            {isLoggedIn ? < UserMenu/> : <AuthNav/>}
        </Flex>
    )
}