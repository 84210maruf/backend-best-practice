import React, { useState } from 'react';

const handleInputChange = (fieldName) => (event)=> {
    return { [fieldName]:event.target.value }
}
export default function HandleCng() {
  const [values, setValues] = useState({ firstName:'',lastName:''});


  const handleChange = (fieldName) => (event)=> {
   setValues({
    ...values,
    ...handleInputChange(fieldName)(event),
   })
  };

  return (
    <div className='p-4'>
      <section className='flex gap-2 pb-2'>
        
        <input 
          type="text" 
          name="firstName" 
          value={values.firstName} 
          onChange={handleChange('firstName')} 
          placeholder="First Name" 
          className='border'
        />
        <input 
          type="text" 
          name="lastName" 
          value={values.lastName} 
          onChange={handleChange('lastName')} 
          placeholder="Last Name" 
          className='border'
        />
      </section>
      <div className='flex gap-4 bg-yellow-100'>
        <p>First Name:{values.firstName}</p>
        <p>First Name:{values.lastName}</p>
      </div>
      <hr/>
    </div>
  );
}