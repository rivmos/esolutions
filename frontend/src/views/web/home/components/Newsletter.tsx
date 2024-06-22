import { Button, Input, Notification, toast } from '@/components/ui'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { FormContainer, FormItem } from '@/components/ui'
import { apiNewSubscriber } from '@/services/Subscriber'

const openNotification = (
  type: 'success' | 'warning' | 'danger' | 'info', message:string
) => {
  toast.push(
      <Notification
          title={type.charAt(0).toUpperCase() + type.slice(1)}
          type={type}
      >
          {message}
      </Notification>
  )
}

const Newsletter = () => {
  return (
    <div className='bg-gradient-to-r from-neutral-900 to-neutral-700'>
      <div className="bg-neutral-200 py-16 sm:py-24 lg:py-32 rounded-br-[150px] mr-32">
        <div className='text-center text-4xl lg:text-4xl mb-8 text-gray-900 ml-32'>
          Subscribe to Newsletter
        </div>
        <div className="mx-auto container px-6 lg:px-8">
          <div className='flex item-center justify-center gap-4 ml-32'>
            <Formik
              initialValues={{
                name: '',
                email: '',
              }}
              onSubmit={async (values, {setSubmitting, resetForm}) => {
                await apiNewSubscriber(values).then(() => {
                  setSubmitting(false)
                  openNotification('success', 'Subscribed Successfully')
                  resetForm()
                })
              }}
            >
              {
                ({values, isSubmitting}) => {
                  return (
                    <Form>
                      <FormContainer layout='inline'>
                        <div className='flex items-center'>
                          <FormItem>
                            <Field
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              component={Input}
                            />
                          </FormItem>
                          <FormItem>
                            <Field
                              type="email"
                              name="email"
                              placeholder="Email"
                              component={Input}
                            />
                          </FormItem>
                          <FormItem>
                            <Button type="submit" className="rounded-md !bg-blue-700 !text-white" loading={isSubmitting}>Subscribe</Button>
                          </FormItem>
                        </div>
                      </FormContainer>
                    </Form>
                  )
                }
              }
            </Formik>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Newsletter