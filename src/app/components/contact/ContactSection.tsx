import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="flex pt-12 max-md:pb-12">
      <ContactForm />
      <div className=" max-lg:hidden">
        <Image alt="" src="formimg.png" />
      </div>
    </div>
  );
}
