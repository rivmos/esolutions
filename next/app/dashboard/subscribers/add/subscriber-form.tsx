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
import { Subscriber } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";


const SubscriberForm = ({ data }: { data?: Subscriber }) => {

  const router = useRouter()

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data?.id ? {
      id: data?.id,
      name: data?.name as string,
      email: data?.email as string,
    } : {
      name: "",
      email: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    // const formData = new FormData()
    // formData.append('title', data.title)
    // formData.append('description', data.description)
    // formData.append('content', data.content)
    axios.post('/api/subscriber/save', data).then(res => {
      router.push('/dashboard/subscribers/list')
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
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SubscriberForm