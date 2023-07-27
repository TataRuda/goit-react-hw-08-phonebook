import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import {
    Button,
    List,
    ListItem, 
    Text,
} from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons'; 

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
};
  
return (
    <List pt='30px'>
        {contacts.map(({ id, name, number }) => (
        <ListItem pt="5px" display="flex" alignItems="center" gap='10px' key= {id}>
           <PhoneIcon color='green.700' />    
           <Text fontSize='xl' color='secondary'>{name}: {number}</Text>
           <Button 
           type="button" 
           onClick={() => handleDelete(id)}
           size='sm'
           variant='solid'
           color='secondary' 
           _hover={{bgColor: 'active'}}
           >
            <DeleteIcon color='secondary.700'/> 
            </Button>  
        </ListItem>
        ))}
    </List>
)
};
