import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const validateEmail = (email) => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const email = form.email.value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_e542ceh", // Replace with your Email.js service ID
        "template_c6ojuwh", // Replace with your Email.js template ID
        form,
        "217xaByOhJhyoiiZI" // Replace with your Email.js user ID
      );
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <section className="py-20 px-6 bg-primary text-neutral">
      <h2 className="text-4xl font-extrabold text-center leading-tight mb-12">
        Contact Me
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-neutral py-3 rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
