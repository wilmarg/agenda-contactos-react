import React from 'react'
import TableContacts from './TableContacts';
import FormAdd from './FormAdd';


const Contactos = () => {

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
        }



    ]

  return (
    <>
        <div className='container mt-3'>
            <FormAdd/>
            <TableContacts contactos= {contactos}/>
            
        </div>    
    </>
  )
};

export default Contactos
