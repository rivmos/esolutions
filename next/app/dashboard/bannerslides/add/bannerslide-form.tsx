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
import { BannerSlide } from "@prisma/client";
import { useRouter } from "next/navigation";
import ImageUpload from "../../casestudies/add/image-upload";
import { useToast } from "@/components/ui/use-toast";


const BannerSlideForm = ({ data }: { data?: BannerSlide }) => {

  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data?.id ? {
      id: data?.id,
      heading: data?.heading as string,
      subheading: data?.subheading as string,
      ctaText: data?.ctaText as string,
      ctaHref: data?.ctaHref as string,
      image: data?.image as string,
    } : {
      heading: "",
      subheading: "",
      ctaText: "",
      ctaHref: "",
      image: ""
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    // const formData = new FormData()
    // formData.append('title', data.title)
    // formData.append('description', data.description)
    // formData.append('content', data.content)
    axios.post('/api/bannerslide/save', data).then(res => {
      router.push('/dashboard/bannerslides/list')
      toast({ description: "BannerSlide Saved Successfully", variant: 'success' })
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
              name="heading"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Heading</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subheading"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Subheading</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ctaText"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Button</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ctaHref"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Path</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BannerSlideForm