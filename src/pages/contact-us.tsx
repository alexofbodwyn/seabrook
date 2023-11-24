import React, { useState } from "react";
import { GetStaticProps } from "next";
import { getContact, getNavigation } from "@/lib/service";
import Header from "@/components/header";
import { sendEmail } from "@/lib/service";
import FormLabel from "@/components/formLabel";
import Footer from "@/components/footer";

export default function ContactUs({ page, navigation }: { page: any, navigation: any }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handleSubmit = async (evt:any) => {
    evt.preventDefault();
    const emailContent = `
      Message received from <strong>${name}</strong>. 
      Their email address is <strong>${email}</strong>. <br />
      Their contact number is <strong>${contactNumber}</strong>. <br />
      From ${company}
      They'd like to know about...
      ${message}
    `;

    const data = await sendEmail(
      'New message from website contact form',
      emailContent
    );

    setThankYouMessage(data.sendEmail.sent)
    
  };

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header menuItems={navigation}/>
      <div className="bg-stone-200">
        <div className="container mx-auto py-16">
        <h3 className="text-[32px] font-bold text-stone-600">{page.title}</h3>

        <div dangerouslySetInnerHTML={{ __html: page.content }} className="max-w-[600px] w-full [&>p]:text-stone-600 [&>p]:text-xl [&>p]:my-8"></div>

        <form onSubmit={handleSubmit} className="w-full pt-4 lg:max-w-[650px]">
          <div className="flex flex-col md:items-center mb-6 md:flex-row">
            <FormLabel id="name" text="Name *" />
            <input
              className="w-full max-w-[450px] h-[40px] p-1 border border-stone-300"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              id="name"
            />
          </div>
          <div className="flex flex-col md:items-center mb-6 md:flex-row">
          <FormLabel id="company" text="Company *"/>
            <input
              className="w-full max-w-[450px] h-[40px] p-1 border border-stone-300"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              id="company"
            />
          </div>
          <div className="flex flex-col md:items-center mb-6 md:flex-row">
            <FormLabel id="email" text="Email *" />
            <input
              className="w-full max-w-[450px] h-[40px] p-1 border border-stone-300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              id="email"
            />
          </div>
          <div className="flex flex-col md:items-center mb-6 md:flex-row">
            <FormLabel id="number" text="Contact number" />
            <input
              className="w-full max-w-[450px] h-[40px] p-1 border border-stone-300"
              type="number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              id="number"
            />
          </div>
          <div className="flex flex-col  mb-6 md:flex-row">
          <FormLabel id="enquiry" text="Enquiry *" />
            <textarea
              id="enquiry"
              className="w-full max-w-[450px] h-[300px] p-1 border border-stone-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="text-white flex h-[48px] w-[215px] bg-stone-700 items-center justify-center ml-auto transition-all hover:bg-stone-500 active:bg-stone-400">SUBMIT</button>
          </form>

          {thankYouMessage && <h3 className="text-[22px] mt-4 text-stone-600">Message sent successfully! We'll do our best to contact you as soon as possible to address your enquiry.</h3>}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await getContact();
  const navigation = await getNavigation()

  return {
    props: {
      page,
      navigation
    },
    revalidate: 3600,
  };
};


