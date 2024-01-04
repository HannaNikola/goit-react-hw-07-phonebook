import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DELETE_CONTACT } from "store/reducerContactSlice";
import { List, ListItem, ButtonDelete } from "./ContactList.styled";
import { selectContacts, selectFilter } from "store/Selectors";



export const ContactList = () => {
  // const contacts = useSelector((state) => state.contact.contacts.items);
  const contacts = useSelector(selectContacts);
  // const filter = useSelector((state) => state.filter.filter);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(DELETE_CONTACT(id));
  };
  const filteredContacts = contacts.filter(contact =>

    contact.name.toLowerCase().includes(filter.toLowerCase())

  )
  

  return (
    <List>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => deleteContact(contact.id)}>Delete</ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
};





