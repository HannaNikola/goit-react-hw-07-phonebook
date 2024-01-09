

import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyleForm, ButtonAdd, StyleError, InputStyle, Box } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/Selectors';
import { addContactApi } from 'store/reducerContactSlice';



const phonebookSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required'),
    number: Yup.number().min(6, 'Too short!').required('This field is required'),

});


export const ContactForm = () => {
    const dispatch = useDispatch();
    
    const contacts = useSelector(selectContacts);


    const generateId = () => {
        return nanoid();
    };

    const addContactHandle = async (newContact) => {
        const name = newContact.name;

        if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} :you have this number in your Phone Book.`);
            return;
        }

        const contactWithId = { ...newContact, id: generateId() };
        try {
            await dispatch(addContactApi(contactWithId))
        } catch (error) {
            console.error('Mistake',error)
        }
        
        

    }




    return (
        <Box>
            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}

                validationSchema={phonebookSchema}
                onSubmit={(values, actions) => {

                    addContactHandle(values);
                    actions.resetForm();
                }}

            >

                <StyleForm>
                    <label htmlFor="name">Name</label>
                    <InputStyle id="name" name="name" />
                    <StyleError name="name" component="div" />


                    <label type="tel" htmlFor="number">Number</label>
                    <InputStyle id="s" name="number" />
                    <StyleError name="number" component="div" />

                    <ButtonAdd type="submit">Add contact</ButtonAdd>
                </StyleForm>

            </Formik>
        </Box>
    );
};