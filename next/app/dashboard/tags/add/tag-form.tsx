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
import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { Tag } from "@prisma/client";
import { useRouter } from "next/navigation";
import prisma from '@/app/lib/prismadb'
import { useToast } from "@/components/ui/use-toast";


const TagForm = ({ data }: { data?: Tag }) => {

  const {toast} = useToast()
  const router = useRouter()

  const [tag, setTags] = useState<Tag[]>([])

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data?.id ? {
      id: data?.id,
      name: data?.name as string,
    } : {
      name: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    // const formData = new FormData()
    // formData.append('title', data.title)
    // formData.append('description', data.description)
    // formData.append('content', data.content)
    axios.post('/api/tag/save', data).then(res => {
      router.push('/dashboard/tags/list')
      toast({description:"Toast Added Successfully", variant:'success'})
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
                  <FormLabel>Tag Name</FormLabel>
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

export default TagForm