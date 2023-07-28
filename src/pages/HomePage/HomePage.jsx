import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function HomePage () {
  useEffect(() => {
    document.title = "Welcome to MyPhonebook";
}, []);
    return (
      
        <Box bg='background' align="center" h='500px' p='50px' borderRadius='10px'> 
          <Text fontSize='4xl' color='active' as='b'>
          Welcome to MyPhonebook!
         </Text> 
          <Text fontSize='xl' color='secondary' pt="30px" > With this application you can easily save and manage your contacts. </Text>
          <Text fontSize='xl' color='secondary' pt="14px"> Please register and enjoy a organized way to keep track of your contacts with MyPhonebook!</Text>
        </Box>      
     
    );
}

