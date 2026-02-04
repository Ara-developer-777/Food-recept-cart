'use client'
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        alert("Сообщение успешно отправлено!");
        setForm({ name: "", email: "", message: "" });
      }, (error) => {
        console.log(error.text);
        alert("Ошибка при отправке сообщения. Попробуйте позже.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Contact Us
        </h1>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#e7750a] focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#e7750a] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#e7750a] focus:outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#e7750a] text-white py-3 rounded-lg font-semibold hover:bg-[#d76909] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
