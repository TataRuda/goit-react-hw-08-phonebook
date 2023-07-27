import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/contacts/operations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { Box } from "@chakra-ui/react";

export default function ContactsPage() {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchContacts());
    }, [dispatch]
    );

    return (
        <Box bg='background' align="center" minH='500px' p='50px' borderRadius='10px'>               
            <ContactForm/>
            <Filter/>            
            <ContactList/>
        </Box>
    );
}