import React from "react";
import Section from "./Section";
import { ValidationError, useForm } from "@formspree/react";
import { SOCIALS } from "../../constants/data";

const ContactSection = ({}) => {
  const [state, handleSubmit] = useForm("xknlojnw");

  return (
    <Section>
      <div className="w-full flex lg:flex-row lg:justify-between flex-col">
        <div className="font-bold lg:mt-20 tracking-tighter uppercase">
          <h1 className="lg:text-7xl text-3xl text-white mb-3">A request ?</h1>
          <h1 className="lg:text-7xl text-3xl text-slate-600">Contact me !</h1>
          <div className="lg:flex flex-col gap-3 mt-10 ml-6 tracking-normal hidden">
            <p className="text-white">
              You can contact me by email or by phone.
              <br />I will answer you as soon as possible.
            </p>
            <p className="text-white">Email</p>
            <p className="text-slate-400 leading-3">
              <a href="mailto:vignal.brice@gmail.com" target={"_blank"}>
                vignal.brice@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-row lg:mt-10 mt-5 lg:-ml-8 -ml-10">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col ml-10 lg:w-10 lg:h-10 w-8 h-8 rounded-lg bg-slate-600 justify-center items-center"
                >
                  <a href={social.link} target={"_blank"}>
                    <Icon className="text-white md:text-3xl  text-xl" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:mt-24 mt-8 p-8 rounded-xl bg-white bg-opacity-25 w-96 max-w-full">
          {state.succeeded ? (
            <p className="text-gray-900 text-center">
              Thanks for your message !
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="name"
                className="font-normal text-gray-900 block mb-1"
              >
                Name
              </label>
              <input
                placeholder="John Doe"
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-xl border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <label
                htmlFor="email"
                className="font-normal text-gray-900 block mb-1 mt-8"
              >
                Email
              </label>
              <input
                placeholder="john.doe@gmail.com"
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-xl border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <ValidationError
                className="mt-1 text-red-500"
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label
                htmlFor="message"
                className="font-normal text-gray-900 block mb-1 mt-8"
              >
                Message
              </label>
              <textarea
                placeholder="Hello Brice, I would like to talk to you about..."
                name="message"
                id="message"
                className="h-32 block w-full rounded-xl border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
              />
              <ValidationError
                className="mt-1 text-red-500"
                errors={state.errors}
              />
              <button
                disabled={state.submitting}
                className="bg-slate-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-10 w-full"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
