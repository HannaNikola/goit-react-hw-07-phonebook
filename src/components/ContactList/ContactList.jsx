import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { List, ListItem, ButtonDelete } from "./ContactList.styled";
import { selectContacts, selectFilter } from "store/Selectors";
import { deleteContactApi } from "store/reducerContactSlice";



export const ContactList = () => {
  // const contacts = useSelector((state) => state.contact.contacts.items);
  const contacts = useSelector(selectContacts);
  // const filter = useSelector((state) => state.filter.filter);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteContact = async (id) => {
    try {
      dispatch(deleteContactApi(id));
    }catch(error){
console.error('Mistake', error)
    }
    // dispatch(DELETE_CONTACT(id));
  };
  const filteredContacts = contacts.filter(contact =>

    contact.name.toLowerCase().includes(filter.toLowerCase())

  )
  


  return (
    <List>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.phone}
          <ButtonDelete onClick={() => deleteContact(contact.id)}>Delete</ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
};





