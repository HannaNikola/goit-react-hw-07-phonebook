import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { List, ListItem, ButtonDelete } from "./ContactList.styled";
import { selectContacts, selectFilter } from "store/Selectors";
import { deleteContactApi } from "store/reducerContactSlice";
import { createSelector } from "reselect"; 


const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const deleteContact = async (id) => {
    try {
      dispatch(deleteContactApi(id));
    } catch (error) {
      console.error('Mistake', error);
    }
  };

  return (
    <List>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => deleteContact(contact.id)}>Delete</ButtonDelete>
        </ListItem>
      ))}
    </List>)
};


