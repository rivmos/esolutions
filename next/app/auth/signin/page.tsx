"use client"

import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    {/* <h1 className='mb-4'>Welcome Back</h1> */}
    <Formik
      initialValues={{ email: '', password: '' }}
    //   validate={values => {
    //     const errors = {};
    //     if (!values.email) {
    //       errors.email = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //       errors.email = 'Invalid email address';
    //     }
    //     return errors;
    //   }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
            type="email"
            name="email"
            placeholder='Enter Email'
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
  </div>
);

export default Basic;