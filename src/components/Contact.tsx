import { styles } from "../styles/styles";
import { ChangeEvent, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import { send } from "@emailjs/browser";
import { toast } from "react-hot-toast";

import FormInputGroup from "./FormInputGroup";

type Message = {
  user_name: string;
  user_email: string;
  message: string;
};
const Contact = () => {
  const [toSend, setToSend] = useState<Message>({
    user_name: "",
    user_email: "",
    message: "",
    // reply_to: '',
  });

  // handle change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  //   Submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Send message
    if (!toSend.user_name || !toSend.user_email || !toSend.message) {
      return toast.error("Please fill out the form");
    }

    try {
      await send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        toSend,
        import.meta.env.VITE_APP_PUBLIC_KEY
      );

      toast.success("Email sent successful");

      return setToSend({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      return toast.error("Failed");
    }
  };

  return (
    <section
      data-aos="fade-up"
      id="contact"
      className={`${styles.sectionSpacing} flex flex-col items-center justify-center w-full xs:w-[300px] sm:w-[450px] md:w-[600px]`}
    >
      <p className={styles.headingText}>Contact Us</p>
      <p className={styles.subHeadingText}>
        We would love to hear from you. Feel free to leave a message.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <FormInputGroup
          label="Name"
          placeholder="Enter your name"
          value={toSend.user_name}
          name="user_name"
          type="text"
          onChange={handleChange}
        />

        <FormInputGroup
          label="Email"
          placeholder="Enter your user email"
          value={toSend.user_email}
          name="user_email"
          type="email"
          onChange={handleChange}
        />
        <label className={styles.label}>
          Message
          <textarea
            placeholder="Enter your message"
            name="message"
            value={toSend.message}
            className={styles.input}
            onChange={handleChange}
          />
        </label>

        {/* Send button */}
        <button
          type="submit"
          className="text-white bg-green-800 hover:bg-green-700 py-4 rounded-md"
        >
          Send
        </button>
      </form>
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-2 items-center">
          <HiOutlineMail size={30} color="green" />
          <a href="mailto: umuajieyouthassociation@gmail.com">
            <p className="font-Anaheim text-sm md:text-xl">
              umuajieyouthassociation@gmail.com
            </p>
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <AiOutlinePhone size={30} color="green" />
          <a href="tel:+234 806 3435 975">
            <p className="font-Anaheim text-sm md:text-xl">
              +234 806 3435 975, +234 803 9865 441
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
