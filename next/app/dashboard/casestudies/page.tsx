"use client"

import React, { useState } from 'react'
import { Formik, Field, Form, FieldProps } from 'formik';
import { baseUrl } from '@/app/lib/constants/app.constant';
import axios from 'axios';
import ReactQuill, { Value } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Page = () => {

    const [value, setValue] = useState<Value>()

    return (
        <>
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                Case Studies
            </h1>
            <Formik
                initialValues={{
                    title: '',
                    discription: '',
                    content: '',
                    image: ''
                }}
                onSubmit={async (values) => {
                    console.log(values)
                    axios.post(`${baseUrl}/casestudies/save`, {...values, content: value})
                }}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (<Form className='flex flex-col gap-2'>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title" />

                        <label htmlFor="description">Description</label>
                        <Field id="description" name="description" />

                        <label htmlFor="content">Content</label>
                        <Field
                            id="content"
                            name="content"
                            type="text"
                        />
                        <Field name="content">
                            {({
                                field, // { name, value, onChange, onBlur }
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta,
                            }: FieldProps) => (
                                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                            )}
                        </Field>
                        <label htmlFor="file">Image</label>
                        <Field
                            id="image"
                            name="image"
                            type="file"
                        />
                        <button type="submit">Submit</button>
                    </Form>)}
            </Formik>
        </>
    )
}

export default Page