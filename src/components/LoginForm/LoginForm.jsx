import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/operations';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from "hooks";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';


export const LoginForm = () => {
  const initialState = { name: '', email: ''};
  const [user, setUser] = useState(initialState);
  const { isLoggedIn } = useAuth();
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
      if (!isLoggedIn) {
        const resultAction = await dispatch(logInUser({
          email: user.email,
          password: user.password,
        }));
        if (resultAction.type === 'auth/login/fulfilled') {
          setUser(initialState);
          e.target.reset();
          toast.success('Login successful!');
        } else if (resultAction.type === 'auth/login/rejected') {
          toast.error('An error occurred during login. Please try again.');
        }
      } else {
        toast.error('You are already registered. Please log in instead.');
      }
    } catch (error) {
      toast.error('An error occurred during login. Please try again.');
    }
  };

  const emailIdLog = nanoid();
  const passwordIdLog = nanoid();

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
    <FormControl isRequired color='secondary'>
    <FormLabel htmlFor={emailIdLog}>
      Email
    </FormLabel>  
    <Input 
    id={emailIdLog}
    onChange={handleChange}
    type="email" 
    name="email" 
    placeholder='Enter your email' 
    bg='white'/>
    
    <FormLabel htmlFor={passwordIdLog} pt='10px'>
      Password
    </FormLabel>  
    <Input
    id={passwordIdLog} 
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
    Log In</Button>
  </FormControl>
  </form>
  );
};