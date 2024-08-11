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
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { schema } from "./z-schema";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Service, Tag } from "@prisma/client";
import { useRouter } from "next/navigation";
import ImageUpload from "../../casestudies/add/image-upload";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/extension/multi-select";
import { useToast } from "@/components/ui/use-toast";


const ServiceForm = ({ data, tags }: { data?: Service, tags: Tag[] }) => {

  const { toast } = useToast()
  const router = useRouter();


  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data?.id
      ? {
        id: data.id,
        name: data.name,
        description: data.description,
        image: data.image,
        href: data.href,
        tagIds: data.tagIds || [],
        isActive: data.isActive,
      }
      : {
        name: "",
        description: "",
        image: "",
        href: "",
        tagIds: [],
        isActive: true,
      },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    axios.post("/api/service/save", data).then((res) => {
      router.push('/dashboard/services/list')
      toast({ description: "Service Added Successfully", variant: 'success' })
      router.refresh()
    });
  };

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Service Name" {...field} />
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
                    <Textarea placeholder="Enter Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="href"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Path</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Path" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <FormLabel>
                    Active
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tagIds"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tags</FormLabel>
                  <MultiSelector
                    onValuesChange={field.onChange}
                    values={field.value}
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {tags.map((tag) => (
                          <MultiSelectorItem key={tag.id} value={tag.id}>
                            <div className="flex items-center space-x-2">
                              <span>{tag.name}</span>
                            </div>
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>

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

export default ServiceForm;
