"use client";

import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email is required." }),
  mobile: z
    .string()
    .regex(/^\d{10}$/, { message: "Mobile number must be 10 digits." })
    .nonempty({ message: "Mobile number is required." }),
  message: z.string().nonempty({ message: "Message is required." }),
});

type FormData = z.infer<typeof formSchema>;

const InputField = ({
  name,
  label,
}: {
  name: keyof FormData;
  label: string;
}) => {
  const { toast } = useToast();
  const { getFieldState, register, formState } = useFormContext<FormData>();
  const { error } = getFieldState(name, formState);

  React.useEffect(() => {
    if (error) {
      toast({
        title: "Validation Error",
        description: error.message,
        // variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <div className="form-item mb-4">
      <Label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </Label>
      <Input {...register(name)} id={name} placeholder={label} />
      {error && <p className="text-sm text-red-600 mt-1">{error.message}</p>}
    </div>
  );
};

const ContactForm = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    alert(
      `Form submitted:\nName: ${data.name}\nEmail: ${data.email}\nMobile: ${data.mobile}\nMessage: ${data.message}`
    );
  };

  return (
    <FormProvider {...methods}>
      <div className="px-10 py-5">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <InputField name="name" label="Full Name" />
          <InputField name="email" label="Email Address" />
          <InputField name="mobile" label="Mobile Number" />
          <div className="form-item mb-4">
            <Label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </Label>
            <Textarea
              {...methods.register("message")}
              id="message"
              placeholder="Type your message here."
            />
            {methods.formState.errors.message && (
              <p className="text-sm text-red-600 mt-1">
                {methods.formState.errors.message.message}
              </p>
            )}
          </div>
          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};

export default ContactForm;
