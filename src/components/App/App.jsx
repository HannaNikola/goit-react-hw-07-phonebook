
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterName } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Conteiner } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsApi } from 'store/reducerContactSlice';






export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsApi());
   
  })
 


  return (
    <>
      <Conteiner>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <FilterName />
        <ContactList />
      </Conteiner>
    </>
  )

}
















