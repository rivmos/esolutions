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
import { schema } from "@/app/dashboard/subscribers/add/z-schema";
import axios from "axios";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterForm = () => {

  const { toast } = useToast()

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await axios.post('/api/subscriber/save', data);
      form.reset();
      toast({ description: "Subscribed Successfully", variant: 'success' })
    }
    catch (error) {
      toast({ description: "Subscription Failed. Please try again.", variant: 'destructive' })
      console.error('Error submitting form:', error);
    }
  }



  useEffect(() => {
    console.log(form.formState.errors)
  }, [form.formState.errors])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 justify-center">
        <div className="flex flex-col lg:flex-row items-end gap-4">

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="sr-only">Name</FormLabel> {/* sr-only class hides the label visually but it's accessible for screen readers */}
                <FormControl>
                  <Input placeholder="Name" {...field} />
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
                <FormLabel className="sr-only">Email</FormLabel> {/* sr-only class hides the label visually but it's accessible for screen readers */}
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {!form.formState.isSubmitting ? 'Submit' : 'Submitting...'}
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterForm