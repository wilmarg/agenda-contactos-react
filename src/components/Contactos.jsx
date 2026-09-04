import React, { useReducer } from 'react'
import TableContacts from './TableContacts';
import FormAdd from './FormAdd';
import { ContactsReducer } from '../reducers/ContactsReducer';

    const contactos = [
        {
            id: "0009wfd", 
            nombre: "Wilmar Galvis", 
            tel: "3001234567"
        },
        
        {
            id: "0029wfd", 
            nombre: "Nhey Duran", 
            tel: "3211233298"
        },

        {
            id: "0226wfd", 
            nombre: "Yaneth Rojas", 
            tel: "3041220258"
        }

    ]


const Contactos = () => {

    const [state, dispatch] = useReducer(ContactsReducer, contactos)


  return (
    <>
        <div className='container mt-3'>
            <FormAdd dispatch={dispatch}/>
            <TableContacts contactos= {state}/>
            
        </div>    
    </>
  )
};

export default Contactos
