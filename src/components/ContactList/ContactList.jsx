import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';


 export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  
    return (
        <ul>
            {contacts.map((contact) => (
            <ContactItem 
            key= {contact.id}
            {...contact}
            />
            ))}
        </ul>
    )
} 
