import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/contacts/operations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";

export default function ContactsPage() {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchContacts());
    }, [dispatch]
    );

    return (
        <>           
            <title>Your contacts</title>
            <ContactForm/>
            <Filter/>            
            <ContactList/>
        </>
    );
}