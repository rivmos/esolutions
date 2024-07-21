"use client"

import React from 'react';
import { Formik } from 'formik';
import Link from 'next/link';
import axios from 'axios';

const page = () => (
  <div>
    <h1 className='mb-4'>Sign Up</h1>
    <Formik
      initialValues={{ username: '', email:'', password: '' }}
      onSubmit={async (values, { setSubmitting }) => {
        axios.post('/api/register', values).then(res => console.log(res.data)).catch(error => console.log(error))
      }}
      
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input
            type="username"
            name="username"
            placeholder='Enter username'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            className='border-[1px] rounded-md p-2'
          />
          {errors.username && touched.username && errors.username}
          <input
            type="email"
            name="email"
            placeholder='Enter email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className='border-[1px] rounded-md p-2'
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className='border-[1px] rounded-md p-2'
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" className="border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    <Link href="/auth/signin">Sign In</Link>
  </div>
);

export default page;