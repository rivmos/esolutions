"use client"

import React from 'react';
import { Formik } from 'formik';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import {useRouter} from 'next/navigation';


const signin = () => {

const router = useRouter()

 return ( <div>
    <h1 className='mb-4'>Sign In</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
    //   validate={values => {
    //     const errors = {};
    //     if (!values.username) {
    //       errors.username = 'Required';
    //     } else if (
    //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
    //     ) {
    //       errors.username = 'Invalid username address';
    //     }
    //     return errors;
    //   }}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await signIn('credentials', values).then(() => {
          router.push('/web/home')
        })
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
    <Link href="/auth/signup">Sign Up</Link>
  </div>)
}

export default signin;