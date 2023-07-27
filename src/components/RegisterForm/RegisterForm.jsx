import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
        registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <FormControl  isRequired color='secondary'>
      <FormLabel htmlFor="nameId" >
        Username
      </FormLabel>  
      <Input 
      id="nameId"
      type="text"
      name="name" 
      placeholder='Enter your name'
      bg='white' 
      />
      <FormLabel htmlFor="emailId" pt='10px'>
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
      Register
      </Button>
    </FormControl>
    </form>
  );
};