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
import { CaseStudy } from "@prisma/client";
import { useRouter } from "next/navigation";
import ImageUpload from "./image-upload";
import { useToast } from "@/components/ui/use-toast";


const CaseStudyForm = ({ data }: { data?: CaseStudy }) => {

  const {toast} = useToast()
  const router = useRouter()

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data?.id ? {
      id: data?.id,
      title: data?.title as string,
      description: data?.description as string,
      content: data?.content as string,
      image: data?.image as string,
    } : {
      title: "",
      description: "",
      content: "",
      image: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    // const formData = new FormData()
    // formData.append('title', data.title)
    // formData.append('description', data.description)
    // formData.append('content', data.content)
    axios.post('/api/casestudy/save', data).then(res => {
      router.push('/dashboard/casestudies/list')
      toast({description:"Case Study Added Successfully", variant:'success'})
      router.refresh()
    })
  }


  useEffect(() => {
    console.log(form.formState.errors)
  }, [form.formState.errors])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">

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
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Description</FormLabel>
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
          <div className="lg:col-span-1">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <ImageUpload value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit">{form.formState.isSubmitting ? 'Submitting' : 'Submit'}</Button>
      </form>
    </Form>
  );
};

export default CaseStudyForm