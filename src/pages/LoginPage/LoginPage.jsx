import { LoginForm } from "components/LoginForm/LoginForm";
import { Box } from "@chakra-ui/react";
//import { Helmet } from "react-helmet";

export default function LoginPage() {
    return (
        <Box bg='background' align="center" h='500px' p='50px' borderRadius='10px'>    
           
                <title>Login</title>
            
            <LoginForm/>
        </Box>
    );
}