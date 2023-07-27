import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
        logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <FormControl onSubmit={handleSubmit} autoComplete="off"  isRequired color='secondary'>
    <FormLabel htmlFor="emailId">
      Email
    </FormLabel>  
    <Input 
    id="emailId"
    type="email" 
    name="email" 
    placeholder='Enter your email' 
    bg='white'/>
    
    <FormLabel htmlFor='passwordId' pt='10px'>
      Password
    </FormLabel>  
    <Input
    id="passwordId" 
    type="password" 
    name="password" 
    placeholder='Enter your password' 
    bg='white'/>
    
    <Button 
    mt='40px'
    type="submit" 
    size='lg'
    variant='solid'
    color='secondary' 
    _hover={{bgColor: 'active'}}>
    Log In</Button>
  </FormControl>
  </form>
  );
};