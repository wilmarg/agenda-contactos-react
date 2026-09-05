import React, { useEffect, useReducer, useState } from 'react'
import TableContacts from './TableContacts';
import FormAdd from './FormAdd';
import { ContactsReducer } from '../reducers/ContactsReducer';


const init = () => {
    const contactos = localStorage.getItem("contactos")
    console.log(contactos);
    return contactos ? JSON.parse(contactos) : [];
}

const Contactos = () => {

    const [state, dispatch] = useReducer(ContactsReducer, [], init)

    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(state));
    }, [state]);

    const [view, setView] = useState(false);

  return (
    <>
        <div className='container mt-3'>

            <button onClick={() => setView(!view)} className='btn btn-success'>
               {!view ? " + Agregar Contacto" : " - Cerrar Formulario"} 
            </button>

            { view && <FormAdd dispatch={dispatch}/> }
            <TableContacts contactos= {state} dispatch = {dispatch}/>
            
        </div>    
    </>
  )
};

export default Contactos
