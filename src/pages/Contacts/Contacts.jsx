import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/contacts/operations";

export default function Contacts() {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchContacts());
    }, [dispatch]
    );

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
            <ContactList/>
        </>
    );
}