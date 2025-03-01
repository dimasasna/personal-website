import Earth from "../ui/globe";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  interface EmailFormElements extends HTMLFormControlsCollection {
    user_name: HTMLInputElement;
    user_email: HTMLInputElement;
    subject: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    elements: EmailFormElements;
  }

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(
          "service_d6qcstu",
          "template_9mwwi4r",
          form.current,
          "2Gb7DJSg_R0gnNCrz"
        )
        .then(
          () => {
            notifySuccess();
            setIsLoading(false);
          },
          () => {
            notifyError();
            setIsLoading(false);
          }
        );
      e.currentTarget.reset();
    }
    e.currentTarget.reset();
  };

  const notifySuccess = () => {
    toast.success("Message Sent Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notifyError = () => {
    toast.error("Oops! Something Went Wrong While Sending the Message.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="bg-black relative text-white pb-20">
      <div className="absolute inset-0 z-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#63e_100%)]"></div>
      <div className="relative z-10">
        <h1
          data-aos="fade-down"
          className="text-center text-5xl font-bold italic"
        >
          GET IN TOUCH
        </h1>
        <div className="grid grid-cols-8 gap-4 mx-40 mt-12">
          <div
            data-aos="fade-right"
            className="col-span-4 justify-items-center "
          >
            <div className="relative z-10 h-full">
              <Earth />
            </div>
          </div>
          <div data-aos="fade-left" className="col-span-4 place-content-center">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                <input
                  className="bg-transparent border py-2 px-5 rounded-lg"
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  required
                />
                <input
                  className="bg-transparent border py-2 px-5 rounded-lg"
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  required
                />
                <input
                  className="col-span-2 bg-transparent border py-2 px-5 rounded-lg"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
                <textarea
                  className="col-span-2 bg-transparent border py-2 px-5 rounded-lg h-[100px]"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#383838] mx-auto px-3 py-2 rounded-lg hover:bg-[#595959] mt-4 w-full cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? <ClipLoader color="#fff" size={15} /> : "Send It!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
