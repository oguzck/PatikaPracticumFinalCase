import React from 'react';
import { useFormik } from 'formik';

export default function Header({setValue , setPage , setClicked}) {
    // I used formik for handleChange and handleSubmit functionalities. 
  const formik = useFormik({
    initialValues: {
      nameOrModel: '',
    },
    onSubmit: (values) => {
      setValue(values.nameOrModel)
      setPage(1)
      setClicked(true)
    },
  });

  return (
    <div className='header1'>
      <img className='sw-logo' src='\star-wars-logo.png' />
      <form onSubmit={formik.handleSubmit} className='search-area'>
        <label htmlFor='nameOrModel'>Name / Model  </label>
        <input
          id='nameOrModel'
          name='nameOrModel'
          type='text'
          placeholder='Name / Model'
          onChange={formik.handleChange}
          value={formik.values.nameOrModel}
        />
        <button className='button-filter' type='submit'>Filter</button>
      </form>
    </div>
  );
}
