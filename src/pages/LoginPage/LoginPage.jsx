import { LoginForm } from "components/LoginForm/LoginForm";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function LoginPage() {
    useEffect(() => {
        document.title = "Login MyPhonebook";
    }, []);
    return ( 
        <Box bg='background' align="center" h='500px' p='50px' borderRadius='10px'>    
            <LoginForm/>
        </Box>
    );
}