import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="flex pt-12 max-md:pb-12">
      <ContactForm />
      <div className=" max-lg:hidden">
        <img src="formimg.png" />
      </div>
    </div>
  );
}
