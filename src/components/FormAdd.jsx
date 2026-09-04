import React, { useState } from 'react'

const FormAdd = ({dispatch}) => {

    const [data, setData] = useState({nombre:"", tel:""})
    
    const {nombre, tel} = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        }
        );
    };

    const actionAdd = {
        type: "add",
        payload: {
            id: "6729wfd", 
            nombre, 
            tel,
        },
    };

    const handleAdd = () =>{
        dispatch(actionAdd);
    };
  
  return (
        <>
            <div className='contanier'>
                <label className='mx-1 d-grid gap-2'>
                    Nombre:{" "}
                    <input onChange={handleChange}
                    value={nombre} 
                    name='nombre' 
                    type="text" 
                    className='form-control' 
                    autoComplete='off'/>
                </label>

                <label className='mx-1 d-grid gap-2'>
                    Teléfono:{" "}
                    <input onChange={handleChange} 
                    value={tel}
                    name='tel' 
                    type="text" 
                    className='form-control' 
                    autoComplete='off'/>
                </label>

                <div className='mx-1 d-grid gap-2'>
                    <button onClick={handleAdd} className='btn btn-info mt-2'>Agregar</button>                
                </div>
            </div>
        </>
    )
};

export default FormAdd;