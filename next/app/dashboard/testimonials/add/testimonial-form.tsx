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
import { z } from "zod";
import { schema } from "./z-schema";
import axios from "axios";
import { useEffect } from "react";
import { Testimonial } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";


const TestimonialForm = ({ data }: { data?: Testimonial }) => {

  const {toast} = useToast()
  const router = useRouter()

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data?.id ? {
      id: data?.id,
      name: data?.name as string,
      position: data?.position as string,
      message: data?.message as string,
    } : {
      name: "",
      position: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    // const formData = new FormData()
    // formData.append('title', data.title)
    // formData.append('description', data.description)
    // formData.append('content', data.content)
    axios.post('/api/testimonial/save', data).then(res => {
      router.push('/dashboard/testimonials/list')
      toast({description:"Testimonial Added Successfully", variant:'success'})
      router.refresh()
    })
  }


  useEffect(() => {
    console.log(form.formState.errors)
  }, [form.formState.errors])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

        <Button type="submit">{form.formState.isSubmitting ? 'Submitting' : 'Submit'}</Button>
      </form>
    </Form>
  );
};

export default TestimonialForm