import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Box } from '@chakra-ui/react';


export default function RegistrationPage() {
    return (        
        <Box bg='background' align="center" h='500px' p='50px' borderRadius='10px'>                      
            <RegisterForm/>
        </Box>
    );
}