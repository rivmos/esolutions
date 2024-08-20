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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Legal } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";


const LegalForm = ({ data }: { data?: Legal }) => {

  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data?.id ? {
      id: data?.id,
      title: data?.title as string,
      content: data?.content as string,
    } : {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    axios.post('/api/legal/save', data).then(res => {
      router.push('/dashboard/legal/list')
      toast({ description: "Legal document saved successfully", variant: 'success' })
      router.refresh()
    })
  }


  useEffect(() => {
    console.log(form.formState.errors)
  }, [form.formState.errors])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4">

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
         
        </div>

        <Button type="submit">{form.formState.isSubmitting ? 'Submitting' : 'Submit'}</Button>
      </form>
    </Form>
  );
};

export default LegalForm