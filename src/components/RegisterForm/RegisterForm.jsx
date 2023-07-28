import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useAuth } from "hooks";
import { toast } from 'react-toastify';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';



export const RegisterForm = () => {
  const initialState = { name: '', email: '', password: ''};
  const [user, setUser] = useState(initialState);
  const { isRegistered } = useAuth();
  const dispatch = useDispatch();

  const handleChange = e => {
    setUser(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isRegistered) {
        const resultAction = await dispatch(registerUser({
          name: user.name,
          email: user.email,
          password: user.password,
        }));
        if (resultAction.type === 'auth/register/fulfilled') {
          setUser(initialState);
          e.target.reset();
          toast.success('Registration successful!');
        } else if (resultAction.type === 'auth/register/rejected') {
          toast.error('Opps... try again!');
        }
      } else {
        toast.error('An error occurred during registration. Please try again.');
      }
    } catch (error) {
      if (error?.payload?.error) {
        toast.error(error.payload.error);
      } else {
        toast.error('An error occurred during registration. Please try again.');
      }
    }
  }; 

  const nameIdReg = nanoid();
  const emailIdReg = nanoid();
  const passwordIdReg = nanoid();

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <FormControl  isRequired color='secondary'>
      <FormLabel htmlFor={nameIdReg} >
        Username
      </FormLabel>  
      <Input 
      id={nameIdReg}
      onChange={handleChange}
      type="text"
      name="name" 
      placeholder='Enter your name'
      bg='white' 
      />
      <FormLabel htmlFor={emailIdReg} pt='10px'>
        Email
      </FormLabel>  
      <Input 
      id={emailIdReg}
      onChange={handleChange}
      type="email" 
      name="email" 
      placeholder='Enter your email' 
      bg='white'/>
      
      <FormLabel htmlFor={passwordIdReg} pt='10px'>
        Password
      </FormLabel>  
      <Input 
      id={passwordIdReg}
      onChange={handleChange}
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