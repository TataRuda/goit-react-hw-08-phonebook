import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const initialState = { name: '', number: ''};
  const [contact, setContact] = useState(initialState);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = contacts.find(({ name }) => name === contact.name);
    const isDuplicateNumber = contacts.find(({ number }) => number === contact.number);
    if (isDuplicate) {
    toast.error( `${contact.name} already exists!`);
    return;
    }
    else if (isDuplicateNumber) {
    toast.error( `${contact.number} already exists in the contacts!`);
    return;
  }
    dispatch(addContact({ name: contact.name, number: contact.number }));
    setContact(initialState);
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <form  onSubmit={handleSubmit} autoComplete="off">
      <FormControl isRequired color='secondary'>
      <FormLabel htmlFor={nameId}>Name</FormLabel>
      <Input
        id={nameId}
        type="text"
        value={contact.name}
        onChange={handleChange}
        name="name"
        bg='white'
        placeholder="For example Adrian, Jacob Mercer"
        required
      />
      <FormLabel htmlFor={numberId} pt="10px">Number</FormLabel>
      <Input
        id={numberId}
        type="tel"
        value={contact.number}
        onChange={handleChange}
        name="number"
        placeholder="Enter the phone number to save"
        bg='white'
        required
      />
      <Button 
      mt='40px'
      type="submit" 
      size='lg'
      variant='solid'
      color='secondary' 
      _hover={{bgColor: 'active'}}>
        Add contact
      </Button>
      </FormControl>
    </form>
  );
}; 
