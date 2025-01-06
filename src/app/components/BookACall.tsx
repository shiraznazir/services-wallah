"use client";

import React from "react";
import ContactForm from "./ContactForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const BookACall = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div className="flex justify-center items-center animate-slideIn">
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-[425px]">
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookACall;
