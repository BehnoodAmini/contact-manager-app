import { createContext } from "react";

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    contact: {},
    setContacts: () => {},
    contacts: [],
    filteredContacts: [],
    setFilteredContacts: () => {},
    contactQuery: {},
    groups: [],
    onContactChange: () => {},
    deleteContact: () => {},
    createContact: () => {},
    contactSearch: () => {},
});