"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod";
import { schema } from "./z-schema";
import axios from "axios";
import { useEffect } from "react";
import type { Enquiry } from '@prisma/client'
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";


const ContactUsForm = ({ data }: { data?: Enquiry }) => {

  const { toast } = useToast()

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      first: "",
      last: "",
      email: "",
      mobile: "",
      message: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    // const formData = new FormData()
    // formData.append('title', data.title)
    // formData.append('description', data.description)
    // formData.append('content', data.content)

    try {
      // Save the enquiry to the database
      await axios.post('/api/enquiry/save', data);
      // Send the confirmation email
      await axios.post('/api/mail', data);
      form.reset();
      toast({ description: "Enquiry Sent Successfully", variant: 'success' })
    }
    catch (error) {
      console.error('Error submitting form:', error);
    }
  }


  useEffect(() => {
    console.log(form.formState.errors)
  }, [form.formState.errors])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 !w-full">
        <div className="grid grid-cols-1 gap-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="first"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>First Name</FormLabel> */}
                  <FormControl>
                    <Input placeholder="First Name*" {...field} className="shadow-sm !placeholder-[#828282]"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Last Name</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Last Name*" {...field} className="shadow-sm !placeholder-[#828282]"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Email*" {...field} className="shadow-sm !placeholder-[#828282]"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Mobile Number</FormLabel> */}
                  <FormControl>
                    <Input type="number" placeholder="Phone*" {...field} className="shadow-sm !placeholder-[#828282]"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                {/* <FormLabel>Message</FormLabel> */}
                <FormControl>
                  <Textarea placeholder="Enter Your Message" {...field} className="shadow-sm !placeholder-[#828282]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="bg-blue-600 w-40">{form.formState.isSubmitting ? 'Submitting' : 'Submit'}</Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactUsForm