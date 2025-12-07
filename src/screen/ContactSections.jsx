import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import "./style/ContactSections.css";

export default function ContactSection() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_9nir2ni",
        "template_jqrf6ov",
        form,
        "bdSdj7y6Tr5T2jkkZ"
      )
      .then(() => {
        setSuccess("Your message has been sent successfully!");
        setSending(false);

        setForm({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: ""
        });
      })
      .catch((err) => {
        console.log(err);
        setSuccess("Failed to send message. Please try again.");
        setSending(false);
      });
  };

  return (
    <div className="px-6 py-24 sm:py-10 lg:px-8" id="ContactSections">
      <div className="ContactScreenContainer mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Contact <span>Me</span>
        </h2>
        <p className="mt-2 text-lg text-gray-400">Get in touch with me.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">

        {/* LEFT: Contact Form */}
        <div className="ContactFormLeft flex items-center justify-center bg-white/5 min-h-[650px] flex∆">

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 gap-x-16 gap-y-6 sm:grid-cols-2">
              
              {/* FIRST NAME */}
              <div>
                <label className="block text-sm font-semibold">First name</label>
                <div className="mt-2.5">
                  <input
                    name="first_name"
                    type="text"
                    value={form.first_name}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-black outline-1 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* LAST NAME */}
              <div>
                <label className="block text-sm font-semibold">Last name</label>
                <div className="mt-2.5">
                  <input
                    name="last_name"
                    type="text"
                    value={form.last_name}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-black outline-1 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold">Email</label>
                <div className="mt-2.5">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-black outline-1 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* PHONE */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold">Phone number</label>
                <div className="mt-2.5">
                  <input
                    name="phone"
                    type="text"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="855"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-black outline-1 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold">Message</label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-black outline-1 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="mt-10">
              <button
                type="submit"
                className="btnSubmit block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold"
              >
                {sending ? "Sending..." : "Let's talk"}
              </button>
            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="text-green-400 text-center mt-4">{success}</p>
            )}
          </form>

        </div>

        {/* RIGHT: Contact Info */}
        <div className="ContactFormLeft min-h-[420px] justify-center flex flex-col">
          <h1 className="pt-6 pl-6 text-xl font-bold">Contact</h1>

          <div className="flex flex-col gap-4 mt-4 pl-6 pr-6">

            <div className="contactBox rounded-2xl h-18 flex items-center gap-2">
              <h2 className="text-lg flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                vathanayon852@gmail.com
              </h2>
            </div>

            <div className="contactBox rounded-2xl h-18 flex items-center gap-3">
              <h2 className="text-lg flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                +855 966 807 610
              </h2>
            </div>
                        <div className="contactBox rounded-2xl h-18 flex items-center gap-3 relative">
              <span className="absolute top-2 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Fast Respone
              </span>
              <h2 className="text-lg flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9468 2.76793C18.9499 2.58949 19.933 2.61446 20.6592 3.34071C21.3855 4.06697 21.4104 5.05005 21.232 6.05313C21.055 7.04811 20.6261 8.33483 20.0931 9.93361L18.3147 15.2689C17.7296 17.0242 17.2619 18.4275 16.7732 19.4017C16.2866 20.3717 15.6399 21.2031 14.5608 21.313C13.4818 21.4229 12.6807 20.739 12.0085 19.8871C11.3334 19.0314 10.5923 17.7513 9.66527 16.15L9.42719 15.7388C9.42289 15.7314 9.41864 15.7241 9.41444 15.7168L13.8977 11.2335C14.2101 10.9211 14.2101 10.4146 13.8977 10.1022C13.5853 9.78974 13.0788 9.78974 12.7663 10.1022L8.28306 14.5854C8.27583 14.5813 8.26853 14.577 8.26114 14.5728L7.8498 14.3346C6.24859 13.4076 4.96851 12.6665 4.11282 11.9914C3.26091 11.3193 2.577 10.5182 2.68693 9.43911C2.79685 8.36004 3.62825 7.71332 4.59821 7.22677C5.57247 6.73805 6.97573 6.27032 8.73102 5.68525L14.0663 3.90681C15.6651 3.37385 16.9518 2.94493 17.9468 2.76793Z" fill="black" class="my-path"></path>
                </svg>
                @vathanayon 
                <a
                  href="https://t.me/yonvathana"
                  className="telegram-link text-s opacity-30 hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Telegram username)
                </a>
              </h2>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
