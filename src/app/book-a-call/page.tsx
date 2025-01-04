"use client";

import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const formSchema = z.object({
    name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long." })
    .max(50, { message: "Username must not exceed 50 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const InputField = ({ name, label }: { name: string; label: string }) => {
  const { getFieldState, register, formState } = useFormContext<FormData>();
  const { toast } = useToast()
  const { error } = getFieldState(name, formState);

  if(error){
    toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
  }

  return (
    <div className="form-item mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Input {...register(name)} placeholder={label} />
    </div>
  );
};

const BookACall = () => {
  
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    alert(`Form submitted with username: ${data.name}`);
  };

  return (
    <FormProvider {...methods}>
      <div className="px-10 py-5">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <InputField name="name" label="Name" />
          <InputField name="email" label="E-mail" />
          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default BookACall;
