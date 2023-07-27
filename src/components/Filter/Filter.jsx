import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import {
  FormControl,
  FormLabel,
  Input,
  
} from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
    return (
      <FormControl color='secondary' mt="25px">
        <FormLabel pb='10px'> Find contacts by name </FormLabel>
        <Input 
            type="text"
            name="filter"
            onChange={handleChangeFilter}
            placeholder="Search..."
            bg='white'
        />
        </FormControl>  
    );  
}

