
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterName } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Conteiner } from './App.styled';






export const App = () => {



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
















